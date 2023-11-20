import {JSX} from 'react';
import {dateToStringParser} from "@/app/utils/functions";

import styles from './ExperienceCardListItem.module.css';

export default function ExperienceCardListItem({workStartDate, workPlaceName, position}: any): JSX.Element {
    return (
        <div className={styles.experienceCardListItem}>
            <span className={styles.year}>{dateToStringParser(workStartDate, 'Y', '')}</span>
            <div className={styles.infoSeparator}></div>
            <div className={styles.infoContainer}>
                <p className={styles.workPlaceName}>{workPlaceName}</p>
                <p className={styles.position}>{position}</p>
            </div>
        </div>
    );
}