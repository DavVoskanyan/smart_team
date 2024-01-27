'use client';

import React, {Dispatch, SetStateAction, useState} from 'react';
import Image from 'next/image';
import HeaderUserCardType from './HeaderUserCardType';

import {classNameGenerator} from '@/app/utils/functions';

import styles from '@/app/components/decorativeComponents/HeaderUserCard/HeaderUserCard.module.css';
import UserAvatar from '@/app/components/decorativeComponents/UserAvatar/UserAvatar';

const HeaderUserCard: React.FC<HeaderUserCardType> = (
    {firstName, lastName, avatarColor, imageFileName}: HeaderUserCardType
): React.ReactElement => {

    const [isDark, changeToDark]: [boolean, Dispatch<SetStateAction<boolean>>]
        = useState(false);

    return (
        <div tabIndex={1} className={styles.headerUserCard}>
            <span className={styles.userName}>
                {firstName} {lastName}
            </span>

            <div className={styles.avatarContainer}>
                <UserAvatar firstName={firstName}
                            lastName={lastName}
                            avatarImageFileName={imageFileName}
                            avatarColor={avatarColor}
                />
            </div>

            <Image
                className={styles.dropdownChevron}
                src={'/images/icons/chevron.svg'}
                alt={'Chevron Dropdown'}
                width={16}
                height={9}/>
            <div className={styles.dropDownContainer}>

                <button className={styles.dropDownButton}>

                    <div className={styles.inButtonIconContainer}>
                        <Image
                            className={styles.dropdownIcon}
                            src={'/images/icons/gear.svg'}
                            alt={'Gear Icon'}
                            width={16}
                            height={16}/>
                    </div>
                    <span className={styles.dropDownButtonText}>Settings</span>

                </button>

                <button
                    className={classNameGenerator(styles.dropDownButton, isDark ? styles.isDark : '')}
                        onClick={() => changeToDark(!isDark)}>

                    <div className={styles.inButtonIconContainer}>
                        <div className={styles.themeSwitcher}>
                            <div className={styles.switcherPoint}>
                                <Image
                                    className={styles.switcherPointIcon}
                                    src={'/images/icons/sun.svg'}
                                    alt={'Sun Icon'}
                                    width={16}
                                    height={16}/>
                            </div>
                        </div>
                    </div>
                    <span className={styles.dropDownButtonText}>Dark Mode</span>

                </button>

                <button className={styles.dropDownButton}>

                    <div className={styles.inButtonIconContainer}>
                        <Image
                            className={styles.dropdownIcon}
                            src={'/images/icons/logOut.svg'}
                            alt={'Gear Icon'}
                            width={16}
                            height={16}/>
                    </div>
                    <span className={styles.dropDownButtonText}>Log Out</span>

                </button>
            </div>
        </div>
    );
};

export default HeaderUserCard;