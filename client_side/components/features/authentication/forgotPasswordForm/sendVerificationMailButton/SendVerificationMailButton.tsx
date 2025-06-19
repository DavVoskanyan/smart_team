'use client';
import React from 'react';

// import stylesObject from './SendVerificationMailButton.module.scss';
import buttonStylesObject from '@/styles/components/buttons.module.scss';
import {concatenateClasses} from '@/tools/uiTools';

const SendVerificationMailButton: React.FC = () => {
  const loginButtonClickHandler = (eventObject: React.MouseEvent<HTMLButtonElement>): void => {
    eventObject.preventDefault();
  };

    return (
        <button
          onClick={loginButtonClickHandler}
          className={concatenateClasses(buttonStylesObject.mainColorButton, buttonStylesObject.fullLengthFormButton)}
          type="submit"
        >
            Send Verification Mail
        </button>
    );
};

export default SendVerificationMailButton;