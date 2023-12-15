import React from 'react';
import Image from 'next/image';

import styles from './SearchInput.module.css';
import searchIcon from '@/public/images/icons/searchIcon.svg';
import SearchInputType from '@/app/components/interactiveComponents/SearchInput/SearchInputType';

const SearchInput: React.FC<SearchInputType> = (): React.ReactElement => {
    return (
        <div className={styles.searchInputContainer}>
            <input className={styles.searchInput}
                   type={'text'}
                   placeholder={'Փնտրել'}
            />

            <Image className={styles.searchIcon}
                   src={searchIcon}
                   alt={'searchIcon'}
            />
        </div>
    );
};

export default SearchInput;