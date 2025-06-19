'use client';

import React from 'react';
import Image from 'next/image';

import styleClasses from './page.module.scss';
import LoginForm from '@/components/features/authentication/loginForm/LoginForm';
import SignupForm from '@/components/features/authentication/signupForm/SignupForm';
import ForgotPasswordForm from '@/components/features/authentication/forgotPasswordForm/ForgotPasswordForm';


const Home: React.FC = ({ params }: never) => {
  const formsMap = new Map([
    ['signup', <SignupForm key={'signup'}/>],
    ['login', <LoginForm key={'login'}/>],
    ['forgot', <ForgotPasswordForm key={'forgot'}/>]
  ]);
  const segments: any = React.use(params);



  return (
        <main className={styleClasses.main}>
            <div className={styleClasses.loginContainer}>
              <Image
                className={styleClasses.loginImagePlaceholder}
                src="/images/login_page_placeholder.png"
                width={720}
                height={892}
                alt=""
              />
              <div className={styleClasses.formContainer}>
                {formsMap.get(segments.form)}
              </div>
            </div>
        </main>
    );
};


export default Home;