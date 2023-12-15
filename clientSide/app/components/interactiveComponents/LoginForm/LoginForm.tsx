'use client';

import React from 'react';
import LoginFormType from './LoginFormType';
import Image from 'next/image';
import {classNameGenerator} from '@/app/utils/functions';

import styles from './LoginForm.module.css';

import mailIcon from '@/public/images/icons/mailIcon.svg';
import lockIcon from '@/public/images/icons/lockIcon.svg';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';


const LoginForm: React.FC<LoginFormType> = (): React.ReactElement => {

    const router: AppRouterInstance = useRouter();

    function loginButtonCLickHandler(eventObject: React.MouseEvent): void {
        eventObject.preventDefault();
        router.push('/dashboard');
    }

    return (
        <form className={styles.loginForm}>
            <div className={styles.formTitleContainer}>
                <h1 className={styles.formTitle}>Welcome <span className={styles.logoFont}>SmartTeam</span></h1>
                <h4 className={styles.formSubtitle}>Login into your account</h4>
            </div>

            <div className={styles.allInputsContainer}>
                <div className={classNameGenerator(styles.inputContainer, styles.mailInputContainer)}>
                    <label className={styles.inputLabel} htmlFor='mailInput'>Email</label>
                    <input className={styles.mailInput} type='email' id='mailInput' placeholder='example@smp.am'/>
                    <div className={styles.iconContainer}>
                        <Image
                            src={mailIcon}
                            alt='mail Icon'/>
                    </div>
                </div>
                <div className={classNameGenerator(styles.inputContainer, styles.passwordInputContainer)}>
                    <label className={styles.inputLabel} htmlFor='passwordInput'>Password</label>
                    <input className={styles.passwordInput} type='password' id='passwordInput' placeholder='Enter your password'/>
                    <div className={styles.iconContainer}>
                        <Image
                            src={lockIcon}
                            alt='locak Icon'/>
                    </div>
                </div>
            </div>
            <Link
                className={styles.forgotPassword}
                href={''}>
                Forgot Password?
            </Link>

            <div className={styles.buttonContainer}>
                <button className={styles.loginButton} onClick={loginButtonCLickHandler}>Login now</button>
            </div>
        </form>
    );
};

export default LoginForm;