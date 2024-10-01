import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { publicRoutes } from './constant'
import axios from 'axios'


export async function middleware(request: NextRequest) {
  
  const path = request.nextUrl.pathname
  
  const publicPaths = publicRoutes;
  
  const isPublicPath = publicPaths.has(path);
  
  const token = request.cookies.get('token')?.value;
  console.log("I'm middileware", token)

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};