import {JSX} from 'react';
import Image from "next/image";
import styles from './NewMember.module.css';

export default function NewMember(): JSX.Element {
    return (
        <div className={styles.newMember}>
            <h3 className={styles.title}>New Member</h3>
            <div className={styles.memberCard}>
                <div className={styles.textInfo}>
                    <span className={styles.memberName}>David Voskanyan</span>
                    <span className={styles.memberPosition}>Web Developer</span>
                    <span className={styles.joinDate}>Joined Us - 28.07.2021</span>
                </div>
                <div className={styles.avatarContainer}>
                    <span className={styles.userInitials}>DV</span>
                    <Image
                        className={styles.userImage}
                        src={'/images/user.jpg'}
                        alt={'user image'}
                        width={40}
                        height={40}/>
                </div>
            </div>
        </div>
    );
}
