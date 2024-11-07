import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app';
const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'vgtpbx.dev';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || 'localhost';
  const currentHost = hostname.replace(`.${ROOT_DOMAIN}`, '');

  // Define allowed hosts
  const allowedHosts = ['localhost:3000', ROOT_DOMAIN, `www.${ROOT_DOMAIN}`];

  if (!allowedHosts.includes(hostname) && !hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    return new NextResponse(null, { status: 400, statusText: 'Bad Request' });
  }

  const isRootDomain = hostname === ROOT_DOMAIN || hostname === `www.${ROOT_DOMAIN}`;
  const isLocalhost = hostname === 'localhost:3000';
  const isSubdomain = !isRootDomain && !isLocalhost;

  const token = request.cookies.get('auth_token')?.value;
  const isAuthCallback = request.nextUrl.pathname === '/auth/callback';
  const isLoginPage = request.nextUrl.pathname === '/login';
  const isRootPath = request.nextUrl.pathname === '/';

  // Allow access to auth callback without a token
  if (isAuthCallback) {
    return NextResponse.next();
  }

  // Handle root domain and localhost
  if ((isRootDomain || isLocalhost) && isRootPath) {
    return NextResponse.next(); // Show landing page
  }

  // Handle subdomain logic
  if (isSubdomain) {
    // Validate subdomain
    const subdomainValidationResponse = await fetch(`${request.nextUrl.origin}/api/v1/domains/${currentHost}?isSubdomain=true`);
    
    if (!subdomainValidationResponse.ok) {
      return NextResponse.rewrite(new URL('/404', request.url));
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