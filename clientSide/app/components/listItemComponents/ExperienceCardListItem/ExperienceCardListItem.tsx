import React from 'react';
import ExperienceCardListItemType from './ExperienceCardListItemType';
import {dateToStringParser} from '@/app/utils/functions';

import styles from './ExperienceCardListItem.module.css';

const ExperienceCardListItem: React.FC<ExperienceCardListItemType> = (
    {workStartDate, workPlaceName, position}: ExperienceCardListItemType
): React.ReactElement => {
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
};

export default ExperienceCardListItem;