import {JSX} from 'react';
import {NewMemberType} from '@/app/utils/types/propsTypes';
import {classNameGenerator, dateToStringParser} from '@/app/utils/functions';
import Image from "next/image";
import styles from './NewMember.module.css';

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
                <div className={styles.avatarContainer} style={{backgroundColor: avatarColor}}>
                    <span className={styles.userInitials}>{firstName[0]}{lastName[0]}</span>
                    <Image
                        className={classNameGenerator(styles.userImage, avatarImageFileName ? styles.hasImage : '')}
                        src={`/images/${avatarImageFileName}`}
                        alt={'user image'}
                        width={40}
                        height={40}/>
                </div>
            </div>
        </div>
    );
}
