import React from 'react';
import FoldersPageComponentType from './FoldersPageComponentType';

import FolderComponent from '@/app/components/listComponents/FolderComponent/FolderComponent';

import styles from './FoldersPageComponent.module.css';
import FolderComponentType from '@/app/components/listComponents/FolderComponent/FolderComponentType';

const FoldersPageComponent: React.FC<FoldersPageComponentType> = (
    {foldersArray}: FoldersPageComponentType
): React.ReactElement => {
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
                    foldersArray.map((folder: FolderComponentType, index: number): React.ReactElement => {
                        return (
                            <FolderComponent key={index}
                                             folderName={folder.folderName}
                                             filesQuantity={folder.filesQuantity}
                                             folderUrlName={folder.folderUrlName}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default FoldersPageComponent;