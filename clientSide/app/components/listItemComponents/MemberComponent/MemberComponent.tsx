import {JSX} from 'react';
import {classNameGenerator} from "@/app/utils/functions";
import styles from './MemberComponent.module.css';

import Link from "next/link";
import Image from "next/image";
import UserAvatar from "@/app/components/decorativeComponents/UserAvatar/UserAvatar";

import linkedInLogo from '@/public/images/logos/linkedIn.svg';
import linkedInActiveLogo from '@/public/images/logos/linkedInActive.svg';

export default function MemberComponent({firstName, lastName, profession, avatarInfo, memberLink, isOnline, socialsArray, isListView}: any): JSX.Element {
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
                    socialsArray.map((socialObject: any, socialIndex: number) => {
                        return (
                            <Link className={styles.socialLink} key={socialIndex} href={socialObject.link}>
                                <Image className={styles.socialHoveredIcon} src={linkedInActiveLogo} alt={'socialLogoActive'}/>
                                <Image className={styles.socialIcon} src={linkedInLogo} alt={'socialLogo'}/>
                            </Link>
                        );
                    })
                }
            </div>
        </div>
    );
}