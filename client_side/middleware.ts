import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { authRedirect } from '@/middlewares/authRedirect';

export function middleware(request: NextRequest) {
    const redirectResponse = authRedirect(request);
    if (redirectResponse) return redirectResponse;


    return NextResponse.next();
}

export const config = {
    matcher: [
        '/authentication',
        '/authentication/:path*',
    ],
};
