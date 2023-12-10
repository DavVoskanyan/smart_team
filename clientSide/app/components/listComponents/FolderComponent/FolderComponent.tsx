'use client';

import React, {JSX} from 'react';

import Image from 'next/image';
import folderIcon from '@/public/images/icons/folderIcon.svg';

import styles from './FolderComponent.module.css';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function FolderComponent({folderName, filesQuantity, folderUrlName}: any): JSX.Element {
    const router: AppRouterInstance = useRouter();
    function doubleClickHandler() { router.push(`/files/${folderUrlName}`); }

    return (
        <div className={styles.folderComponent} tabIndex={1} onDoubleClick={doubleClickHandler}>
            <Image className={styles.folderImage}
                   src={folderIcon}
                   alt={'folderIcon'} />
            <div className={styles.textInfoContainer}>
                <p className={styles.folderName}>{folderName}</p>
                <span className={styles.filesQuantity}>{filesQuantity} files</span>
            </div>
        </div>
    );
}