import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useAppDispatch, useAppSelector } from './app/redux/store'
import axios from 'axios'
import { ApiUrl } from './constant'


export async function middleware(request: NextRequest) {
  console.log("I'm middileware")

  const path = request.nextUrl.pathname

  const publicPaths = new Set(['/login', '/signup', '/'])

  const isPublicPath = publicPaths.has(path);

  const token = request.cookies.get('token')?.value || ''
  // const token = localStorage.getItem('token')

  if (token) {
    
  }

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }

}