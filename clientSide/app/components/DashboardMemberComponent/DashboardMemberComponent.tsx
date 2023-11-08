import {JSX} from 'react';
import Image from "next/image";
import Link from "next/link";
import {DashboardMemberComponentType} from "@/app/utils/types/propsTypes";
import styles from './DashboardMemberComponent.module.css';
import UserAvatar from "@/app/components/UserAvatar/UserAvatar";

export default function DashboardMemberComponent({firstName, lastName, profession, avatarColor, avatarImageFile, memberLink}:
    DashboardMemberComponentType): JSX.Element {
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
}