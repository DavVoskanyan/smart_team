import React from 'react';
import FileComponentType from './FileComponentType';
import Image from 'next/image';

import styles from './FileComponent.module.css';

const FileComponent: React.FC<FileComponentType> = (
    {fileName}: FileComponentType
): React.ReactElement => {
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
};

export default FileComponent;