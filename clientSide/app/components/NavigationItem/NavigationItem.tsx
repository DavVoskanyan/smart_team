'use client';

import {JSX} from 'react';
import Image from "next/image";
import Link from "next/link";
import {classNameGenerator} from '@/app/utils/functions';
import styles from './NavigationItem.module.css';

export default function NavigationItem(props: any): JSX.Element {
    return (
        <Link
            className={classNameGenerator(styles.navigationItem, props['isActive'] ? styles.active : '')}
            href={`/${props.itemName}`}
            onClick={() => props.changeActiveElement(props.index)}>

            <Image
                className={styles.navigationItemIcon}
                src={`/images/icons/${props['iconFileName']}.svg`}
                alt={'menu item icon'}
                width={24}
                height={24}/>
            <span className={styles.navigationItemText}>
                {props['itemName']}
            </span>

        </Link>
    );
}