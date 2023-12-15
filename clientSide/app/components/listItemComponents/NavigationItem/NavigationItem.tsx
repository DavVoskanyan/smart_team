'use client';

import React from 'react';
import NavigationItemType from './NavigationItemType';
import Image from 'next/image';
import Link from 'next/link';
import {classNameGenerator} from '@/app/utils/functions';
import styles from './NavigationItem.module.css';

const NavigationItem = (
    {itemName, iconFileName, changeActiveElement, index, isActive}: NavigationItemType
): React.ReactElement => {
    return (
        <Link
            className={classNameGenerator(styles.navigationItem, isActive ? styles.active : '')}
            href={`/${itemName}`}
            onClick={() => changeActiveElement(index)}>

            <Image
                className={styles.navigationItemIcon}
                src={`/images/icons/${iconFileName}.svg`}
                alt={'menu item icon'}
                width={24}
                height={24}/>
            <span className={styles.navigationItemText}>
                {itemName}
            </span>

        </Link>
    );
};

export default NavigationItem;