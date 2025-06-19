import React from 'react';

import moduleStyles from './SignupFirstNameInput.module.scss';


const SignupFirstNameInput: React.FC = () => {
  return (
    <div className={moduleStyles.fieldContainer}>
      <span className={moduleStyles.fieldTitle}>First Name</span>
      <label className={moduleStyles.firstNameInputContainer}>
        <input type="text" tabIndex={1}/>
      </label>
    </div>
  );
};


export default SignupFirstNameInput;