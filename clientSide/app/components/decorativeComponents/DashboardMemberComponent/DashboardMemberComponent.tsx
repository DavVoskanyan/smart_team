import React from 'react';
import Link from 'next/link';

import DashboardMemberComponentType from './DashboardMemberComponentType';
import UserAvatar from '@/app/components/decorativeComponents/UserAvatar/UserAvatar';

import styles from '@/app/components/decorativeComponents/DashboardMemberComponent/DashboardMemberComponent.module.css';

const DashboardMemberComponent: React.FC<DashboardMemberComponentType> = (
    {firstName, lastName, profession, avatarColor, avatarImageFile, memberLink}: DashboardMemberComponentType
): React.ReactElement => {
    return (
        <div className={styles.dashboardMemberContainer}>
            <div className={styles.avatarContainer}>
                <UserAvatar firstName={firstName}
                            lastName={lastName}
                            avatarImageFileName={avatarImageFile}
                            avatarColor={avatarColor}
                />
            </div>
            <div className={styles.textInfo}>
                <Link href={memberLink} className={styles.memberFullName}>{firstName} {lastName}</Link>
                <span className={styles.memberProfession}>{profession}</span>
            </div>
        </div>
    );
};

export default DashboardMemberComponent;