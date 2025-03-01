import React from 'react';
import Image from 'next/image';
import FilesPageComponentType from './FilesPageComponentType';

import FileComponent from '@/app/components/listComponents/FileComponent/FileComponent';

import coloredClipIcon from '@/public/images/icons/clipColoredIcon.svg';
import whiteClipIcon from '@/public/images/icons/clipWhiteIcon.svg';
import FilesFilterLine from '@/app/components/interactiveComponents/FilesFilterLine/FilesFilterLine';

import styles from '@/app/components/pageContentComponent/FilesPageComponent/FilesPageComponent.module.css';
import {classNameGenerator} from '@/app/utils/functions';
import FileComponentType from '@/app/components/listComponents/FileComponent/FileComponentType';

const FilesPageComponent: React.FC<FilesPageComponentType> = (
    {filesArray}: FilesPageComponentType
): React.ReactElement => {
    const hasTwoColumns: boolean = true;
    return (
        <div className={styles.filesPageComponent}>
            <div className={styles.headerContainer}>
                <h1 className={styles.pageTitle}>Files</h1>
                <button className={styles.uploadFileButton}>
                    <div className={styles.buttonIconContainer}>
                        <Image className={styles.whiteIcon} src={whiteClipIcon} alt={'whiteIcon'} />
                        <Image className={styles.coloredIcon} src={coloredClipIcon} alt={'coloredIcon'} />
                    </div>
                    <span className={styles.buttonText}>Upload</span>
                </button>
            </div>
            <FilesFilterLine folderName={'Corporate 30-12-2021'}/>
            <div className={classNameGenerator(styles.filesGrid, hasTwoColumns ? styles.twoColumnGrid : '')}>
                {
                    filesArray.map((file: FileComponentType, index: number): React.ReactElement => {
                        return (
                            <FileComponent key={index}
                                           fileName={file.fileName}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default FilesPageComponent;