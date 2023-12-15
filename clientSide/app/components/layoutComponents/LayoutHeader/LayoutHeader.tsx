import React from 'react';
import LayoutHeaderType from './LayoutHeaderType';

import styles from './LayoutHeader.module.css';
import HeaderUserCard from '@/app/components/decorativeComponents/HeaderUserCard/HeaderUserCard';

const LayoutHeader: React.FC<LayoutHeaderType> = (
    {firstName, lastName, avatarColor, imageFileName}: LayoutHeaderType
): React.ReactElement => {
    return (
        <header className={styles.header}>
            <h1 className={styles.inHeaderTitle}>SmartTeam</h1>

            <HeaderUserCard firstName={firstName}
                            lastName={lastName}
                            avatarColor={avatarColor}
                            imageFileName={imageFileName}/>
        </header>
    );
};

export default LayoutHeader;