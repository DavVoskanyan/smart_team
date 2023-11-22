import {JSX} from 'react';
import Image from 'next/image';

import styles from './SearchInput.module.css';
import searchIcon from '@/public/images/icons/searchIcon.svg';

export default function SearchInput(): JSX.Element {
    return (
        <div className={styles.searchInputContainer}>
            <input className={styles.searchInput}
                   type={"text"}
                   placeholder={'Փնտրել'}
            />

            <Image className={styles.searchIcon}
                   src={searchIcon}
                   alt={'searchIcon'}
            />
        </div>
    );
}