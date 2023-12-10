import React, {JSX} from 'react';
import Image from 'next/image';
import styles from './FileComponent.module.css';

export default function FileComponent({fileName}: {fileName: string}): JSX.Element {
    return (
        <div className={styles.fileComponent}>
            <Image className={styles.filePreview}
                   src={`/images/${fileName}`}
                   alt={'filePreview'}
                   width={1280}
                   height={720}
            />
            <span className={styles.fileName}>{fileName}</span>
        </div>
    );
}