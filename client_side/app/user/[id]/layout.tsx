import React from 'react';

import '@/styles/main.scss';
import '@/styles/variables.scss';
import {Metadata} from 'next';
import Header from "@/components/common/layout/header/Header";
import Sidebar from "@/components/common/layout/sidebar/Sidebar";
import Footer from "@/components/common/layout/footer/Footer";

export const metadata: Metadata = {
  title: 'Project O',
  description: 'You and only you',
  icons: '/favicon.svg'
};

const RootLayout = (
    { children }: { children: React.ReactNode }
) => {
  return (
    <html lang="en">
    <body className={'dark'} suppressHydrationWarning>
<Header />
<Sidebar />
    <main>{children}</main>
<Footer />
    </body>
    </html>
  );
};

export default RootLayout;
