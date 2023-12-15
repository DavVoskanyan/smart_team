import React from 'react';
import Image from 'next/image';
import GreetingComponentType from './GreetingComponentType';

import styles from './GreetingComponent.module.css';
import smileImage from '@/public/images/smileImage.svg';

const GreetingComponent: React.FC<GreetingComponentType> = (
    {userName}: GreetingComponentType
): React.ReactElement => {
    return (
        <div className={styles.greetingComponent}>
            <div className={styles.textContainer}>
                <h1 className={styles.greetingTitle}>Good Morning {userName},</h1>
                <h3 className={styles.subTitle}>Have a nice day!</h3>
            </div>
            <Image
                src={smileImage}
                alt={'Smile Image'}
            />
        </div>
    );
};

export default GreetingComponent;