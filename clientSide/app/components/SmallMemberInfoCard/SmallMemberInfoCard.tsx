import {JSX} from 'react';
import styles from './SmallMemberInfoCard.module.css';

export default function SmallMemberInfoCard({cardTitle, children}: any): JSX.Element {
    return (
        <div className={styles.smallMemberInfoCard}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <div className={styles.cardBody}>
                {children}
            </div>
        </div>
    );
}