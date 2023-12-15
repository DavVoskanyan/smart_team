import React from 'react';
import {dateToStringParser} from '@/app/utils/functions';
import UserAvatar from '@/app/components/decorativeComponents/UserAvatar/UserAvatar';
import styles from './AboutMemberInfoCard.module.css';
import AboutMemberInfoCardType from './AboutMemberInfoCardType';

const AboutMemberInfoCard: React.FC<AboutMemberInfoCardType> = (
    { firstName, lastName, avatarImageFileName, avatarColor, profession, about, joinDate }: AboutMemberInfoCardType
): React.ReactElement => {
    return (
        <div className={styles.aboutMemberInfoCard}>
            <div className={styles.avatarContainer}>
                <UserAvatar
                    firstName={firstName}
                    lastName={lastName}
                    avatarImageFileName={avatarImageFileName}
                    avatarColor={avatarColor}
                />
            </div>
            <div className={styles.textInfo}>
                <span className={styles.greeting}> Hi, I am</span>
                <h1 className={styles.fullName}>{firstName} {lastName}</h1>
                <span className={styles.profession}>{profession}</span>
                <p className={styles.aboutMemberBlock}>{about}</p>
                    <span className={styles.joinInfo}>
                    I have joined Smart Team
                    <span className={styles.joinDate}>
                        {` - ${dateToStringParser(joinDate, 'D / M / Y', ' / ')}`}
                    </span>
                </span>
            </div>
        </div>
    );
};

export default AboutMemberInfoCard;