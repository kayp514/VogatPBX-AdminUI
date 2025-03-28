import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROD_ROOT_DOMAIN = 'vgtpbx.dev';
const DEV_ROOT_DOMAIN = 'localhost:3000';
const ROOT_DOMAIN = process.env.NODE_ENV === 'development' ? DEV_ROOT_DOMAIN : PROD_ROOT_DOMAIN;
const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://ternsecure.com';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

async function verifyToken(token: string): Promise<{ valid: boolean; userData?: any }> {
  try {
    const res = await fetch(`${AUTH_APP_URL}/api/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) {
      throw new Error('Token verification failed');
    }

    const data = await res.json();
    return { 
      valid: data.valid, 
      userData: data.valid ? data.uid : undefined
    };
  } catch (error) {
    console.error('Token verification error:', error);
    return { valid: false };
  }
}

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

  const token = request.cookies.get('_session_cookie')?.value;
  const isAuthCallback = request.nextUrl.pathname === '/auth/callback';
  const isLoginPage = request.nextUrl.pathname === '/sign-in';
  const isSignup = request.nextUrl.pathname === '/signup';
  const isRootPath = request.nextUrl.pathname === '/';

  // Allow access to auth callback without a token
  if (isAuthCallback) {
    return NextResponse.next();
  }

  // Handle root domain and localhost
  if (isRootDomain && isRootPath && isSignup) {
    return NextResponse.next(); // Show landing page
  }

  // Handle subdomain logic
  if (isSubdomain) {
    try {
      const subdomainValidationResponse = await fetch(`${request.nextUrl.protocol}//${ROOT_DOMAIN}/api/v1/domains/${encodeURIComponent(currentHost)}?isValid=true`,
    {
      headers: {
        'Cache-Control': 'no-store',
        'Host': ROOT_DOMAIN
      },
    }
    );
    console.log('Validation URL:', `${request.nextUrl.protocol}//${ROOT_DOMAIN}/api/v1/domains/${encodeURIComponent(currentHost)}?isValid=true`);
    console.log('Response status:', subdomainValidationResponse.status);
    console.log('EncodeURI:', encodeURIComponent(currentHost))

      if (!subdomainValidationResponse.ok) {
        console.log('Domain not found in subcheck')
        return NextResponse.rewrite(new URL('/404', request.url));
      }

      // Subdomain exists, check authentication

      if (isLoginPage) {
        return NextResponse.next();
      }

      if (!token) {
        console.log('subdomain exists, no token found');
        return NextResponse.redirect(new URL(`/sign-in`, request.url));
      }

        const { valid, userData } = await verifyToken(token);
        console.log('token verified:', valid)
        console.log('userData:', userData)

        if (!valid) {
          const response = NextResponse.redirect(new URL('/sign-in', request.url));
          response.cookies.delete('_session_cookie');
          return response;
        }

        const requestHeaders = new Headers(request.headers);
        requestHeaders.set('x-user-id', userData.id);

        return NextResponse.next({
          request: {
            headers: requestHeaders,
          },
        });
    } catch (error) {
      console.error('Error validating subdomain:', error);
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }

  // For authenticated routes on root domain, localhost, or subdomains
  if (!isRootPath && !token && !isLoginPage && !isSignup) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // Token verification for authenticated routes
  if (token) {
      const { valid, userData } = await verifyToken(token);
      console.log('token verified:', valid)
      console.log('userData:', userData)

      if (!valid) {
        const response = NextResponse.redirect(new URL('/sign-in', request.url));
        response.cookies.delete('_session_cookie');
        return response;
      }

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('x-user-id', userData.id);
  
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } 

  return NextResponse.next();
}