import React from 'react';
import Link from 'next/link';

import LoginEmailInput from '@/components/features/authentication/loginForm/loginEmailInput/LoginEmailInput';
import LoginPasswordInput from '@/components/features/authentication/loginForm/loginPasswordInput/LoginPasswordInput';
import LoginButton from '@/components/features/authentication/loginForm/loginButton/LoginButton';

import moduleStyles from './LoginForm.module.scss';


const LoginForm: React.FC = () => {

    fetch(`${process.env.NEXT_PUBLIC_SERVERSIDE_URL}/hello`);

  return (
    <form id={moduleStyles.loginForm}>
      <LoginEmailInput/>
      <LoginPasswordInput/>
      <LoginButton/>
      <Link className={moduleStyles.forgotPasswordLink} href={'/forgotPassword'}>Forgot password?</Link>
    </form>
  );
};

export default LoginForm;