import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set the paths that don't require the user to be signed in
const publicPaths = ['/login*', '/register*', '/']

const isPublic = (path: string) => {
  if (path === '/') return true
  return publicPaths.find((x) => path.match(new RegExp(`^${x}$`.replace('*$', '($|/)'))))
}

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()

  const session = request.cookies.get('session_id')

  if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') {
    if (session != null) return NextResponse.redirect(new URL('/', request.url))
  }

  if (isPublic(request.nextUrl.pathname) != null) {
    return res
  }

  if (session == null) return NextResponse.redirect(new URL('/login', request.url))

  const isAuthenticated = await fetch('http://127.0.0.1:5000/auth/session', {
    headers: { 'X-SESSION_ID': session.value }
  })
    .then((res) => {
      if (res.ok) return true
      return false
    })
    .catch(() => false)

  console.log({ isAuthenticated })

  if (!isAuthenticated) return NextResponse.redirect(new URL('/login', request.url))
}

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     */
    '/((?!static|.*\\..*|_next|favicon.ico|api).*)'
  ]
}
