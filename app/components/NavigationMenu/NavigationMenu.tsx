'use client';

import {Dispatch, JSX, SetStateAction, useState} from 'react';
import {classNameGenerator} from '@/app/utils/functions';
import styles from './NavigationMenu.module.css';
import NavigationItem from "@/app/components/NavigationItem/NavigationItem";


export default function NavigationMenu(): JSX.Element {
    return (
        <nav className={styles.navigationMenu}>
            <NavigationItem
                key={1}
                isActive={true}
                iconFileName={'dashboardIcon'}
                itemName={'dashboard'}/>
            <NavigationItem
                key={2}
                isActive={false}
                iconFileName={'teamIcon'}
                itemName={'team'}/>
            <NavigationItem
                key={3}
                isActive={false}
                iconFileName={'filesIcon'}
                itemName={'files'}/>
            <NavigationItem
                key={4}
                isActive={false}
                iconFileName={'gear'}
                itemName={'settings'}/>
        </nav>
    );
}