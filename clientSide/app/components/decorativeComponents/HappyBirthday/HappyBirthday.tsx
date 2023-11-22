import {JSX} from 'react';
import {HappyBirthdayType} from "@/app/utils/types/propsTypes";
import Image from "next/image";
import styles from './HappyBirthday.module.css';
import decoration1 from '@/public/images/decoration1.svg';
import decoration2 from '@/public/images/decoration2.svg';

export default function HappyBirthday({memberName}: HappyBirthdayType): JSX.Element {
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
}
