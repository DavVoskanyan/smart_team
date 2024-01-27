import React from 'react';
import Image from 'next/image';
import HappyBirthdayType from './HappyBirthdayType';

import styles from '@/app/components/decorativeComponents/HappyBirthday/HappyBirthday.module.css';
import decoration1 from '@/public/images/decoration1.svg';
import decoration2 from '@/public/images/decoration2.svg';

const HappyBirthday: React.FC<HappyBirthdayType> = (
    {memberName}: HappyBirthdayType
): React.ReactElement => {
    return (
        <div className={styles.happyBirthday}>
            <h3 className={styles.title}>Birthday Today</h3>
            <div className={styles.birthdayCard}>
                <Image
                    className={styles.decoration1}
                    src={decoration1}
                    alt={'decoration 1'}
                />
                <h1 className={styles.congratulations}>
                    Happy Birthday {memberName}
                </h1>
                <Image
                    className={styles.decoration2}
                    src={decoration2}
                    alt={'decoration 2'}
                />
            </div>
        </div>
    );
};
export default HappyBirthday;