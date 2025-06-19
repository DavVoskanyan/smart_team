import React from 'react';
import ForgotEmailInput from '@/components/features/authentication/forgotPasswordForm/forgotEmailInput/ForgotEmailInput';
import SendVerificationMailButton from '@/components/features/authentication/forgotPasswordForm/sendVerificationMailButton/SendVerificationMailButton';

const ForgotPasswordForm: React.FC = () => {
  return (
    <form>
      <ForgotEmailInput />
      <SendVerificationMailButton />
    </form>
  );
};

export default ForgotPasswordForm;