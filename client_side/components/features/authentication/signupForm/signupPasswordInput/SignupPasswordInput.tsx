'use client';
import React, {useState} from 'react';
import {concatenateClasses} from '@/tools/uiTools';

import moduleStyles from './SignupPasswordInput.module.scss';

import EyeIcon from '@/components/common/icons/eye.svg';
import EyeSlashedIcon from '@/components/common/icons/eyeSlashed.svg';


const LoginEmailInput: React.FC = () => {
    const [isPasswordVisible, setPasswordVisibility]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

    const showPasswordButtonClickHandler = (
        eventObject: React.MouseEvent<HTMLButtonElement>
    ): void => {
        eventObject.preventDefault();
        setPasswordVisibility(!isPasswordVisible);
    };

    return (
        <div className={moduleStyles.filedContainer}>
            <span className={moduleStyles.fieldTitle}>Password</span>
            <label className={moduleStyles.passwordInputContainer}>
                <input type={isPasswordVisible ? 'text' : 'password'} tabIndex={1}/>
                <button
                  type='button'
                  onClick={showPasswordButtonClickHandler}
                  className={concatenateClasses(
                    moduleStyles.showPasswordButton,
                    isPasswordVisible ? moduleStyles.passwordVisible : moduleStyles.passwordHidden
                  )}
                >
                    <EyeIcon className={moduleStyles.eyeIcon}/>
                    <EyeSlashedIcon className={moduleStyles.eyeSlashedIcon}/>
                </button>
            </label>
        </div>
    );
};

export default LoginEmailInput;