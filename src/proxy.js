import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { auth } from './app/lib/auth'

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        return NextResponse.redirect(new URL('/register', request.url))
    }

}
export const config = {
    matcher: ['/profile' , '/all-books' , '/all-books/:path*'],
}