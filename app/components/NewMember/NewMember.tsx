import {JSX} from 'react';
import {NewMemberType} from '@/app/utils/types/propsTypes';
import {classNameGenerator, dateToStringParser} from '@/app/utils/functions';
import Image from "next/image";
import styles from './NewMember.module.css';
import UserAvatar from "@/app/components/UserAvatar/UserAvatar";

export default function NewMember({firstName, lastName, profession, avatarImageFileName, avatarColor, joinDate}: NewMemberType): JSX.Element {
    return (
        <div className={styles.newMember}>
            <h3 className={styles.title}>New Member</h3>
            <div className={styles.memberCard}>
                <div className={styles.textInfo}>
                    <span className={styles.memberName}>{firstName} {lastName}</span>
                    <span className={styles.memberPosition}>{profession}</span>
                    <span className={styles.joinDate}>Joined Us - {dateToStringParser(joinDate, "D.M.Y", ".")}</span>
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
}
