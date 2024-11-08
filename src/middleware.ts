import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROD_ROOT_DOMAIN = 'vgtpbx.dev';
const DEV_ROOT_DOMAIN = 'localhost:3000';
const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || PROD_ROOT_DOMAIN;
const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const isLocalhost = hostname.includes('localhost');

  let currentHost;
  if (isLocalhost) {
    currentHost = hostname.split('.')[0] === 'localhost' ? '' : hostname.split('.')[0];
  } else {
    const hostWithoutWWW = hostname.replace(/^www\./, '');
    currentHost = hostWithoutWWW.replace(`.${PROD_ROOT_DOMAIN}`, '');
  }

  // Define allowed hosts
  const allowedHosts = [DEV_ROOT_DOMAIN, PROD_ROOT_DOMAIN, `www.${PROD_ROOT_DOMAIN}`];

  console.log('Root Domain:', ROOT_DOMAIN);
  console.log('Current Host:', currentHost);
  console.log('Allowed Hosts:', allowedHosts);

  if (!allowedHosts.includes(hostname) && !hostname.endsWith(`.${DEV_ROOT_DOMAIN}`) && !hostname.endsWith(`.${PROD_ROOT_DOMAIN}`)) {
    console.log('Bad Request for:', hostname);
    return new NextResponse(null, { status: 400, statusText: 'Bad Request' });
  }

  const isRootDomain = hostname === PROD_ROOT_DOMAIN || hostname === `www.${PROD_ROOT_DOMAIN}` || hostname === DEV_ROOT_DOMAIN;
  const isSubdomain = !isRootDomain && currentHost !== '';

  const token = request.cookies.get('auth_token')?.value;
  const isAuthCallback = request.nextUrl.pathname === '/auth/callback';
  const isLoginPage = request.nextUrl.pathname === '/login';
  const isRootPath = request.nextUrl.pathname === '/';

  // Allow access to auth callback without a token
  if (isAuthCallback) {
    return NextResponse.next();
  }

  // Handle root domain and localhost
  if (isRootDomain && isRootPath) {
    return NextResponse.next(); // Show landing page
  }

  // Handle subdomain logic
  if (isSubdomain) {
    // Validate subdomain using the correct API path
    try {
      const subdomainValidationResponse = await fetch(`${request.nextUrl.origin}/api/v1/domains/${encodeURIComponent(currentHost)}`);
      console.log('EncodeURI:', encodeURIComponent(currentHost))

      if (!subdomainValidationResponse.ok) {
        console.log('sudDomain not found in subcheck')
        return NextResponse.rewrite(new URL('/404', request.url));
      }

      // Subdomain exists, check authentication
      if (!token && !isLoginPage) {
        console.log('subdomain exists, no token found');
        return NextResponse.redirect(new URL(`/login`, request.url));
      }

      if (isLoginPage || token) {
        return NextResponse.next();
      }

      // Authenticated or accessing login page, allow access
      return NextResponse.rewrite(new URL(`/${request.nextUrl.pathname}`, request.url));
    } catch (error) {
      console.error('Error validating subdomain:', error);
      return NextResponse.rewrite(new URL('/404', request.url));
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