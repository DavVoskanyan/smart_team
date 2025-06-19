import React from 'react';

import '@/styles/main.scss';
import '@/styles/variables.scss';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Project O',
  description: 'Find your dream job or work space',
  icons: '/favicon.svg'
};

const RootLayout = (
    { children}: { children: React.ReactNode }
) => {
  return (
    <html lang="en">
    <body className={'dark'} suppressHydrationWarning>{children}</body>
    </html>
  );
};

export default RootLayout;
