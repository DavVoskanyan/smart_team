import {JSX} from 'react';
import Image from "next/image";
import styles from './TeamMembers.module.css';

export default function TeamMembers(): JSX.Element {
    return (
        <div className={styles.teamMember}>
            <h3 className={styles.title}>Team Members</h3>
            <div className={styles.membersCard}></div>
        </div>
    );
}
