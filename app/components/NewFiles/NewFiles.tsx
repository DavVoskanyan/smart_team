import {JSX} from 'react';
import Image from "next/image";

import styles from './NewFiles.module.css';

import cameraIcon from '@/public/images/icons/cameraIcon.svg';
import filesIcon from '@/public/images/icons/filesIcon.svg';

export default function NewFiles(): JSX.Element {
    return (
        <div className={styles.newFiles}>
            <h3 className={styles.title}>New Files</h3>
            <div className={styles.filesCard}>
                <div className={styles.photosSection}>
                    <div className={styles.textInfo}>
                        <span className={styles.sectionTitle}>Photos</span>
                        <span className={styles.itemsCount}>124</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <Image
                            className={styles.sectionIcon}
                            src={cameraIcon}
                            alt={'Camera Icon'}/>
                    </div>
                </div>
                <div className={styles.documentsSection}>
                    <div className={styles.textInfo}>
                        <span className={styles.sectionTitle}>Docs</span>
                        <span className={styles.itemsCount}>14</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <Image
                            className={styles.sectionIcon}
                            src={filesIcon}
                            alt={'Files Icon'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
