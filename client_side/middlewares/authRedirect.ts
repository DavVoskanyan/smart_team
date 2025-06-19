import { NextRequest, NextResponse } from 'next/server';

const allowedForms = ['login', 'signup', 'forgot'];

export function authRedirect(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (pathname === '/authentication') {
        const url = request.nextUrl.clone();
        url.pathname = '/authentication/login';
        return NextResponse.redirect(url);
    }

    if (pathname.startsWith('/authentication/')) {
        const form = pathname.split('/')[2];

        if (!allowedForms.includes(form)) {
            const url = request.nextUrl.clone();
            url.pathname = '/authentication/login';
            return NextResponse.redirect(url);
        }
    }

    return null;
}
