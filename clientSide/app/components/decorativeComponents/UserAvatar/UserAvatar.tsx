import React from 'react';
import Image from 'next/image';
import UserAvatarType from './UserAvatarType';

import styles from '@/app/components/decorativeComponents/UserAvatar/UserAvatar.module.css';


const UserAvatar: React.FC<UserAvatarType> = (
    {firstName, lastName, avatarImageFileName, avatarColor}: UserAvatarType
): React.ReactElement => {
    return (
        <div className={styles.avatarContainer} style={{backgroundColor: avatarColor}}>
            <span className={styles.userInitials}>{firstName[0]}{lastName[0]}</span>

            {avatarImageFileName
                ? <Image className={styles.userImage}
                         src={`/images/${avatarImageFileName}`}
                         alt={'user image'}
                         width={500}
                         height={500}
                />
                : ''
            }
        </div>
    );
};

export default UserAvatar;