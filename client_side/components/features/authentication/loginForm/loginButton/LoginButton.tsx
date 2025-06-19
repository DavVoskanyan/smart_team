'use client';
import React from 'react';

// import stylesObject from './LoginButton.module.scss';
import buttonStylesObject from '@/styles/components/buttons.module.scss';
import {concatenateClasses} from '@/tools/uiTools';

const LoginButton: React.FC = () => {
  const loginButtonClickHandler = (eventObject: React.MouseEvent<HTMLButtonElement>): void => {
    eventObject.preventDefault();
  };

    return (
        <button
          onClick={loginButtonClickHandler}
          className={concatenateClasses(buttonStylesObject.mainColorButton, buttonStylesObject.fullLengthFormButton)}
          type="submit"
        >
            Login
        </button>
    );
};

export default LoginButton;