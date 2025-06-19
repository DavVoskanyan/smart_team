import React from 'react';

import moduleStyles from './SignupLastNameInput.module.scss';


const SignupLastNameInput: React.FC = () => {
    return (
      <div className={moduleStyles.fieldContainer}>
          <span className={moduleStyles.fieldTitle}>First Name</span>
          <label className={moduleStyles.lastNameInputContainer}>
              <input type="text" tabIndex={1}/>
          </label>
      </div>
    );
};


export default SignupLastNameInput;