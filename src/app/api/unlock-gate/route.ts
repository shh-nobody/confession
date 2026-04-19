import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    // Required password is "tia"
    if (password && password.toLowerCase() === 'tia') {
      const response = NextResponse.json({ success: true });
      
      // Set a cookie that middleware will use to protect routes
      response.cookies.set({
        name: 'auth-token',
        value: 'unlocked',
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      });
      
      return response;
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
