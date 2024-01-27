import React from 'react';
import FilesFilterLineType from './FilesFilterLineType';
import {classNameGenerator} from '@/app/utils/functions';
import Image from 'next/image';
import Link from 'next/link';

import linkChevronIcon from '@/public/images/icons/linkChevron.svg';
import optionsIcon from '@/public/images/icons/optionsIcon.svg';
import deletionIcon from '@/public/images/icons/deletionIcon.svg';
import renameIcon from '@/public/images/icons/renameIcon.svg';
import downloadIcon from '@/public/images/icons/downloadIcon.svg';

import twoColumnGridIcon from '@/public/images/icons/twoColumnGridIcon.svg';
import twoColumnGridIconActive from '@/public/images/icons/twoColumnGridIconActive.svg';
import threeColumnGridIcon from '@/public/images/icons/threeColumnGridIcon.svg';
import threeColumnGridIconActive from '@/public/images/icons/threeColumnGridIconActive.svg';
import grayChevronIcon from '@/public/images/icons/grayChevronIcon.svg';

import styles from '@/app/components/interactiveComponents/FilesFilterLine/FilesFilterLine.module.css';

const FilesFilterLine: React.FC<FilesFilterLineType> = (
    {folderName}: FilesFilterLineType
): React.ReactElement => {
    return (
        <div className={styles.filesFilterLine}>
            <Link className={styles.linkToFoldersPage} href={'/files'}>
                <Image className={styles.inLinkChevron} src={linkChevronIcon} alt={'linkChevronIcon'}/>
                {folderName}
            </Link>
            <div className={styles.optionsContainer} tabIndex={1}>
                <Image className={styles.optionsIcon} src={optionsIcon} alt={'optionsIcon'}/>
                <div className={styles.optionsDropdown}>
                    <button className={styles.folderOptionsItem}>
                        <Image className={styles.folderOptionIcon} src={downloadIcon} alt={'folderOptionIcon'}/>
                        <span className={styles.folderOptionText}>download</span>
                    </button>
                    <button className={styles.folderOptionsItem}>
                        <Image className={styles.folderOptionIcon} src={renameIcon} alt={'folderOptionIcon'}/>
                        <span className={styles.folderOptionText}>rename</span>
                    </button>
                    <button className={styles.folderOptionsItem}>
                        <Image className={styles.folderOptionIcon} src={deletionIcon} alt={'folderOptionIcon'}/>
                        <span className={styles.folderOptionText}>delete</span>
                    </button>
                </div>
            </div>

            <div className={styles.sortByPropertyContainer} tabIndex={1}>
                <div className={styles.sortPropertyName}>
                    <span className={styles.propertyName}>By name</span>
                    <Image className={styles.chevronIcon} src={grayChevronIcon} alt={'chevronIcon'}/>
                </div>
                <div className={styles.sortByPropertyDropdown}>
                    <button className={styles.filterPropertyChanger}>name</button>
                    <button className={styles.filterPropertyChanger}>size</button>
                    <button className={styles.filterPropertyChanger}>type</button>
                    <button className={styles.filterPropertyChanger}>modification date</button>
                </div>
            </div>

            <div className={styles.gridChangersContainer}>
                <button className={classNameGenerator(styles.gridChanger, styles.active)}>
                    <Image className={styles.gridChangerActiveIcon}
                           src={twoColumnGridIconActive}
                           alt={'twoColumnGridIconActive'}
                    />
                    <Image className={styles.gridChangerIcon}
                           src={twoColumnGridIcon}
                           alt={'twoColumnGridIcon'}
                    />
                </button>
                <button className={styles.gridChanger}>
                    <Image className={styles.gridChangerActiveIcon}
                           src={threeColumnGridIconActive}
                           alt={'threeColumnGridIconActive'}
                    />
                    <Image className={styles.gridChangerIcon}
                           src={threeColumnGridIcon}
                           alt={'threeColumnGridIcon'}
                    />
                </button>
            </div>
        </div>
    );
};

export default FilesFilterLine;