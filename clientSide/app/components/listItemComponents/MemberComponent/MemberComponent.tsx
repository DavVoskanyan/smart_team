import React from 'react';
import {classNameGenerator} from '@/app/utils/functions';
import styles from '@/app/components/listItemComponents/MemberComponent/MemberComponent.module.css';

import Link from 'next/link';
import UserAvatar from '@/app/components/decorativeComponents/UserAvatar/UserAvatar';

import MemberComponentType from '@/app/components/listItemComponents/MemberComponent/MemberComponentType';
import SocialLinkComponent from '@/app/components/listItemComponents/SocialLinkComponent/SocialLinkComponent';
import SocialLinkComponentType from '@/app/components/listItemComponents/SocialLinkComponent/SocialLinkComponentType';

const MemberComponent: React.FC<MemberComponentType> = (
    {firstName, lastName, profession, avatarInfo, memberLink, isOnline, socialsArray, isListView}: MemberComponentType
): React.ReactElement => {
    return (
        <div className={classNameGenerator(styles.memberComponent, isListView ? styles.listViewComponent : '') }>
            <span className={classNameGenerator(styles.presenceIndicator, isOnline ? styles.online : '')} />
            <div className={styles.avatarContainer}>
                <UserAvatar firstName={firstName}
                            lastName={lastName}
                            avatarColor={avatarInfo.avatarColor}
                            avatarImageFileName={'user.jpg'}
                />
            </div>

            <div className={styles.textInfo}>
                <Link className={styles.memberName} href={memberLink}>{firstName} {lastName}</Link>
                <p className={styles.memberProfession}>{profession}</p>
            </div>

            <div className={styles.socialsContainer}>
                {
                    socialsArray.map((socialObject: SocialLinkComponentType, socialIndex: number) => {
                        return (
                            <SocialLinkComponent key={socialIndex}
                                                 link={socialObject.link}
                                                 activeIconFileName={socialObject.activeIconFileName}
                                                 iconFileName={socialObject.iconFileName}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default MemberComponent;