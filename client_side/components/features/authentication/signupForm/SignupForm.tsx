import React from 'react';

import SignupFirstNameInput from '@/components/features/authentication/signupForm/signupFirstNameInput/SignupFirstNameInput';
import SignupLastNameInput from '@/components/features/authentication/signupForm/signupLastNameInput/SignupLastNameInput';
import SignupEmailInput from '@/components/features/authentication/signupForm/signupEmailInput/SignupEmailInput';
import SignupPasswordInput from '@/components/features/authentication/signupForm/signupPasswordInput/SignupPasswordInput';
import SignupButton from '@/components/features/authentication/signupForm/signupButton/SignupButton';
import Link from 'next/link';

import moduleStyles from './SignupForm.module.scss';

const SignupForm: React.FC = () => {
    return (
        <form id={moduleStyles.signupForm}>
          <SignupEmailInput/>
          <SignupFirstNameInput/>
          <SignupLastNameInput/>
          <SignupPasswordInput/>
          <SignupPasswordInput/>
          <SignupButton/>
          <Link className={moduleStyles.forgotPasswordLink} href={'/forgotPassword'}>Forgot password?</Link>
        </form>
    );
};

export default SignupForm;