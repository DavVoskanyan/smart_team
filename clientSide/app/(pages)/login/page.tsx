'use client';

import   React from 'react';

import styles from '@/app/(pages)/login/page.module.css';
import Image from 'next/image';
import loginSideImage from '@/public/images/loginSideImage.jpg';
import LoginForm from '@/app/components/interactiveComponents/LoginForm/LoginForm';

export default function Home() {
    return (
        <main className={styles.main}>
            <Image
                className={styles.sideImage}
                src={ loginSideImage }
                alt={ 'Side Image' }
                priority />
            <LoginForm />
        </main>
    );
}
