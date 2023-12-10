import React, {JSX} from 'react';

import FolderComponent from '@/app/components/listComponents/FolderComponent/FolderComponent';

import styles from './FoldersPageComponent.module.css';

export default function FoldersPageComponent({foldersArray}: {foldersArray: Array<object>}): JSX.Element {
    return (
        <div className={styles.foldersPageComponent}>
            <div className={styles.headerContainer}>
                <h1 className={styles.pageTitle}>Files</h1>
                <button className={styles.createFolderButton}>
                    + Create new folder
                </button>
            </div>
            <div className={styles.foldersGrid}>
                {
                    foldersArray.map((folder: any, index: number): JSX.Element => {
                        return (
                            <FolderComponent key={index}
                                             folderName={folder.folderName}
                                             filesQuantity={folder.filesQuantity}
                                             folderUrlName={folder.folderUrlName}/>
                        );
                    })
                }
            </div>
        </div>
    );
}