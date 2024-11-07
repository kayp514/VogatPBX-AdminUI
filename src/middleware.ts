// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app';

export async function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const subdomain = host?.split('.')[0];
  const isSubdomain = subdomain && subdomain !== 'www' && (host?.includes('vgtpbx.dev') || host?.includes('localhost'));

  const token = request.cookies.get('auth_token')?.value;
  const isRootLoginPage = request.nextUrl.pathname === '/login';
  const isCallbackPage = request.nextUrl.pathname === '/login';
  const isLoginPage = request.nextUrl.pathname === '/login';

  if (isLoginPage) {
    return NextResponse.next();
  }

  // Handle subdomain logic
  if (isSubdomain) {
    const subdomainValidationResponse = await fetch(`${request.nextUrl.origin}/api/v1/domains/${subdomain}?isSubdomain=true`);
    
    if (!subdomainValidationResponse.ok) {
      // Subdomain doesn't exist, redirect to a 404 page or show an error
      return NextResponse.rewrite(new URL('/404', request.url));
    }

    if (!token) {
      // Redirect to domain login if not authenticated
      console.log('No token found in middleware, redirecting to domain login')
      return NextResponse.redirect(new URL(`/login`, request.url));
    }
  }


  if (!token) {
    console.log('No token found in middleware, redirecting to login');
    return NextResponse.redirect(new URL('/login', request.url));
  }

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

      if (!data.valid && !isRootLoginPage) {
        console.log('Invalid token, redirecting to login');
        return NextResponse.redirect(new URL('/login', request.url));
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
      if (!isRootLoginPage) {
        return NextResponse.redirect(new URL('/login', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};