import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app';
const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'vgtpbx.dev';

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const [subdomain, domain, tld] = host.split('.');
  
  const isLocalhost = domain === 'localhost' || host === 'localhost:3000';
  const isRootDomain = `${domain}.${tld}` === ROOT_DOMAIN || host === ROOT_DOMAIN;
  const isSubdomain = (!isRootDomain && subdomain !== 'www') || (isLocalhost && subdomain !== 'localhost');

  const token = request.cookies.get('auth_token')?.value;
  const isAuthCallback = request.nextUrl.pathname === '/auth/callback';
  const isLoginPage = request.nextUrl.pathname === '/login';
  const isRootPath = request.nextUrl.pathname === '/';

  // Allow access to auth callback without a token
  if (isAuthCallback) {
    return NextResponse.next();
  }

  // Handle root domain and localhost without subdomain
  if ((isRootDomain || (isLocalhost)) && isRootPath) {
    return NextResponse.next(); // Show landing page
  }

  // Handle subdomain logic (including localhost subdomains)
  if (isSubdomain) {
    // For production subdomains, validate
    if (!isLocalhost) {
      const subdomainValidationResponse = await fetch(`${request.nextUrl.origin}/api/v1/domains/${subdomain}?isSubdomain=true`);
      
      if (!subdomainValidationResponse.ok) {
        return NextResponse.rewrite(new URL('/404', request.url));
      }
    }

    // Redirect to login if not authenticated, except for login page
    if (!token && !isLoginPage) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // For authenticated routes on root domain, localhost, or subdomains
  if (!isRootPath && !token && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Token verification for authenticated routes
  if (token) {
    try {
      const res = await fetch(`${AUTH_APP_URL}/api/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (!data.valid) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete('auth_token');
        return response;
      }

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', data.uid);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error('Authentication error:', error);
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};