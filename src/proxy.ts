import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const token = request.cookies.get('auth-token');

  // If there's no auth token, redirect to the gate page (root)
  if (!token || token.value !== 'unlocked') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Otherwise continue
  return NextResponse.next();
}

export const config = {
  // Protect these routes
  matcher: ['/story', '/wrapped', '/confession'],
};
