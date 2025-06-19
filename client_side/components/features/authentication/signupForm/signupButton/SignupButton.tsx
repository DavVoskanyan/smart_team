'use client';
import React from 'react';

// import stylesObject from './SignupButton.module.scss';
import {concatenateClasses} from '@/tools/uiTools';
import buttonStylesObject from '@/styles/components/buttons.module.scss';

const SignupButton: React.FC = () => {
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

export default SignupButton;