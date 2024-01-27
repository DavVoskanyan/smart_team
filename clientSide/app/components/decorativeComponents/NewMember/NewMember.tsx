import React from 'react';
import NewMemberType from './NewMemberType';

import {dateToStringParser} from '@/app/utils/functions';

import styles from '@/app/components/decorativeComponents/NewMember/NewMember.module.css';
import UserAvatar from '@/app/components/decorativeComponents/UserAvatar/UserAvatar';

const NewMember: React.FC<NewMemberType> = (
    {firstName, lastName, profession, avatarImageFileName, avatarColor, joinDate}: NewMemberType
): React.ReactElement => {
    return (
        <div className={styles.newMember}>
            <h3 className={styles.title}>New Member</h3>
            <div className={styles.memberCard}>
                <div className={styles.textInfo}>
                    <span className={styles.memberName}>{firstName} {lastName}</span>
                    <span className={styles.memberPosition}>{profession}</span>
                    <span className={styles.joinDate}>Joined Us - {dateToStringParser(joinDate, 'D.M.Y', '.')}</span>
                </div>

                <div className={styles.userAvatarContainer}>
                    <UserAvatar firstName={firstName}
                                lastName={lastName}
                                avatarImageFileName={avatarImageFileName}
                                avatarColor={avatarColor}
                    />
                </div>

            </div>
        </div>
    );
};

export default NewMember;