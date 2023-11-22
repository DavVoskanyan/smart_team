'use client';

import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function Home(): void {
  const router: AppRouterInstance = useRouter();
  router.push('/login');
}
