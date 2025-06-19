import React from 'react';

import moduleStyles from './SignupEmailInput.module.scss';


const SignupEmailInput: React.FC = () => {
    return (
        <div className={moduleStyles.filedContainer}>
            <span className={moduleStyles.fieldTitle}>Email or Username</span>
            <label className={moduleStyles.emailInputContainer}>
                <input type="text" tabIndex={1}/>
            </label>
        </div>
    );
};

export default SignupEmailInput;