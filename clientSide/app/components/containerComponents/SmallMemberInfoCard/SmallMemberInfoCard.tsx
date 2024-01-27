import React from 'react';
import SmallMemberInfoCardType from './SmallMemberInfoCardType';

import styles from '@/app/components/containerComponents/SmallMemberInfoCard/SmallMemberInfoCard.module.css';

const SmallMemberInfoCard: React.FC<SmallMemberInfoCardType> = (
    {cardTitle, children}: SmallMemberInfoCardType
): React.ReactElement => {
    return (
        <div className={styles.smallMemberInfoCard}>
            <h2 className={styles.cardTitle}>{cardTitle}</h2>
            <div className={styles.cardBody}>
                {children}
            </div>
        </div>
    );
};

export default SmallMemberInfoCard;