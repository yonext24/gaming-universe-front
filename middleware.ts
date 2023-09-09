import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { endpoints } from './utils/endpoints'

// Set the paths that don't require the user to be signed in
const publicPaths = ['/login*', '/register*', '/forgot*', '/']

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  )
}

export async function middleware (request: NextRequest) {
  const res = NextResponse.next()

  let session

  if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register') {
    session = request.cookies.get('session_id')
    if (session != null) return NextResponse.redirect(new URL('/', request.url))
  }

  if (isPublic(request.nextUrl.pathname) != null) {
    return res
  }

  if (session == null) return NextResponse.redirect(new URL('/login', request.url))

  const isAuthenticated = await fetch(endpoints.AUTH.CHECK_SESSION.URL, { ...endpoints.AUTH.CHECK_SESSION.OPTIONS }
  ).then(res => {
    if (res.ok) return true
    return false
  })
    .catch(() => false)

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
