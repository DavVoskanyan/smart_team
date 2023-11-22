'use client';

import {Dispatch, JSX, SetStateAction, useState} from 'react';
import {classNameGenerator} from '@/app/utils/functions';
import styles from './NavigationMenu.module.css';
import NavigationItem from "@/app/components/listItemComponents/NavigationItem/NavigationItem";

export default function NavigationMenu(): JSX.Element {

    type NavigationItemType = {
        itemName: string,
        iconFileName: string,
    }

    const navigationItems: Array<NavigationItemType> = [
        {
            itemName: 'dashboard',
            iconFileName: 'dashboardIcon',
        },
        {
            itemName: 'team',
            iconFileName: 'teamIcon',
        },
        {
            itemName: 'files',
            iconFileName: 'filesIcon',
        },
        {
            itemName: 'settings',
            iconFileName: 'gear',
        },
    ];

    const [activeItem, changeActiveItem]:[number, Dispatch<SetStateAction<number>>]
        = useState(0);

    return (
        <nav className={styles.navigationMenu}>
            {
                navigationItems.map((item: NavigationItemType, index: number): JSX.Element => {
                    return (
                        <NavigationItem
                            key={index}
                            index={index}
                            isActive={activeItem === index}
                            iconFileName={item.iconFileName}
                            itemName={item.itemName}
                            changeActiveElement={changeActiveItem}
                        />
                    );
                })
            }
        </nav>
    );
}