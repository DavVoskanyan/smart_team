import {JSX} from 'react';
import Image from 'next/image';
import styles from './InfoCardListItem.module.css';

import phoneIcon from '@/public/images/icons/coloredPhoneIcon.svg';
import mailIcon from '@/public/images/icons/coloredMailIcon.svg';
import birthdayIcon from '@/public/images/icons/coloredBirthdayIcon.svg';
import locationIcon from '@/public/images/icons/coloredLocationIcon.svg';
import {StaticImport} from "next/dist/shared/lib/get-img-props";



export default function InfoCardListItem({iconName, info}: any): JSX.Element {
    const iconsObject: Record<string, StaticImport> = {
        "phoneIcon": phoneIcon,
        "mailIcon": mailIcon,
        "birthdayIcon": birthdayIcon,
        "locationIcon": locationIcon
    };

    return (
        <div className={styles.infoCardListItem}>
            <Image className={styles.infoTypeIcon} src={iconsObject[iconName]} alt={'infoIcon'}/>
            <span className={styles.infoLine}>{info}</span>
        </div>
    );
}