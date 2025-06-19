'use client';

import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {useEffect} from 'react';

export default function Home(): void {
    const router: AppRouterInstance = useRouter();
    useEffect(() => {
        router.push('/authentication/login');
    });
}
