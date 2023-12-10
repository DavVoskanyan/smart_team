import React, {JSX} from 'react';
import Image from 'next/image';

import FileComponent from '@/app/components/listComponents/FileComponent/FileComponent';

import coloredClipIcon from '@/public/images/icons/clipColoredIcon.svg';
import whiteClipIcon from '@/public/images/icons/clipWhiteIcon.svg';
import FilesFilterLine from '@/app/components/interactiveComponents/FilesFilterLine/FilesFilterLine';

import styles from './FilesPageComponent.module.css';
import {classNameGenerator} from '@/app/utils/functions';

export default function FilesPageComponent({filesArray}: {filesArray: Array<object>}): JSX.Element {
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
                    filesArray.map((file: any, index: number): JSX.Element => {
                        return (
                            <FileComponent key={index} fileName={file.fileName}/>
                        );
                    })
                }
            </div>
        </div>
    );
}