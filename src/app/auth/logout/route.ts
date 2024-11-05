import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const AUTH_APP_URL = process.env.NEXT_PUBLIC_AUTH_APP_URL || 'https://firebase-auth-data.vercel.app';

type LogoutResponse = {
  message: string;
  redirect?: string;
  error?: string;
}

// Handle both GET and POST methods for logout
export async function GET(request: NextRequest) {
  return handleLogout(request);
}

export async function POST(request: NextRequest) {
  return handleLogout(request);
}

async function handleLogout(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;

  try {
    if (token) {
      // Call the authentication service to invalidate the token
      const authResponse = await fetch(`${AUTH_APP_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });

      if (!authResponse.ok) {
        throw new Error(`Logout failed: ${authResponse.statusText}`);
      }
    }

    // Create response with cleared cookie
    const response = NextResponse.json(
      { 
        message: 'Logged out successfully',
        redirect: '/login'
      } as LogoutResponse,
      { 
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );

    // Clear the auth token cookie
    response.cookies.delete('auth_token');

    return response;

  } catch (error) {
    console.error('Error during logout:', error);

    // Create error response with cleared cookie
    const response = NextResponse.json(
      {
        message: 'Logout completed with warnings',
        redirect: '/login',
        error: error instanceof Error ? error.message : 'An unknown error occurred'
      } as LogoutResponse,
      {
        status: 200, // Still return 200 as the user is effectively logged out
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );

    // Clear the cookie even if there was an error
    response.cookies.delete('auth_token');

    return response;
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Max-Age': '86400',
    },
  });
}