import React from 'react';

import moduleStyles from './LoginEmailInput.module.scss';
import filedStylesObject from '@/styles/components/fields.module.scss';


const LoginEmailInput: React.FC = () => {
    return (
        <div className={moduleStyles.filedContainer}>
            <span className={moduleStyles.fieldTitle}>Email or Username</span>
            <label className={filedStylesObject.fullLengthFormInput}>
                <input type="text" tabIndex={1}/>
            </label>
        </div>
    );
};

export default LoginEmailInput;