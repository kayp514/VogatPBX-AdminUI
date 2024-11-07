import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app';
const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'vgtpbx.dev';

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const subdomain = host?.split('.')[0];
  const isLocalhost = host?.includes('localhost');
  const isRootDomain = host === ROOT_DOMAIN || host === `www.${ROOT_DOMAIN}`;
  const isSubdomain = !isRootDomain && !isLocalhost && subdomain !== 'www';

  const token = request.cookies.get('auth_token')?.value;
  const isAuthCallback = request.nextUrl.pathname === '/auth/callback';
  const isLoginPage = request.nextUrl.pathname === '/login';

  // Allow access to auth callback without a token
  if (isAuthCallback) {
    return NextResponse.next();
  }

  // Handle subdomain logic
  if (isSubdomain) {
    const subdomainValidationResponse = await fetch(`${request.nextUrl.origin}/api/v1/domains/${subdomain}?isSubdomain=true`);
    
    if (!subdomainValidationResponse.ok) {
      // Subdomain doesn't exist, redirect to a 404 page or show an error
      return NextResponse.rewrite(new URL('/404', request.url));
    }

    if (!token && !isLoginPage) {
      // Redirect to subdomain login page if not authenticated
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Root domain logic
  if (isRootDomain || isLocalhost) {
    // Allow access to the landing page without authentication
    if (request.nextUrl.pathname === '/') {
      return NextResponse.next();
    }

    // For other pages on the root domain, check for authentication
    if (!token && !isLoginPage) {
      console.log('No token found in middleware, redirecting to login');
      return NextResponse.redirect(new URL('/login', request.url));
    }
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
        console.log('Invalid token, redirecting to login');
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

  // Allow access to public routes or return next() for authenticated routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};