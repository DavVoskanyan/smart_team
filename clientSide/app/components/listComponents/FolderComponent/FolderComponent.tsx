'use client';

import React from 'react';
import FolderComponentType from './FolderComponentType';
import Image from 'next/image';
import folderIcon from '@/public/images/icons/folderIcon.svg';

import styles from '@/app/components/listComponents/FolderComponent/FolderComponent.module.css';
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';

const FolderComponent: React.FC<FolderComponentType> = (
    {folderName, filesQuantity, folderUrlName}: FolderComponentType
): React.ReactElement => {
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
};

export default FolderComponent;