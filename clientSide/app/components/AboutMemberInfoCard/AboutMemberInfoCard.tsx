import {JSX} from 'react';
import {dateToStringParser} from "@/app/utils/functions";
import UserAvatar from "@/app/components/UserAvatar/UserAvatar";
import styles from './AboutMemberInfoCard.module.css';
import {AboutMemberInfoCardType} from "@/app/utils/types/propsTypes";

export default function AboutMemberInfoCard(
    { firstName, lastName, avatarImageFileName, avatarColor, profession, about, joinDate }: AboutMemberInfoCardType
): JSX.Element {

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
}