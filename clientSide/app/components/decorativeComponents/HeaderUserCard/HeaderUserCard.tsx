'use client';

import {Dispatch, JSX, SetStateAction, useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {classNameGenerator} from '@/app/utils/functions';
import styles from './HeaderUserCard.module.css';
import UserAvatar from "@/app/components/decorativeComponents/UserAvatar/UserAvatar";

export default function HeaderUserCard(): JSX.Element {

    const [isDark, changeToDark]: [boolean, Dispatch<SetStateAction<boolean>>]
        = useState(false);

    return (
        <div tabIndex={1} className={styles.headerUserCard}>
            <span className={styles.userName}>
                Ստեփանյան Ջուլիետա
            </span>

            <div className={styles.avatarContainer}>
                <UserAvatar firstName={'David'} lastName={'Voskanyan'} avatarImageFileName={null} avatarColor={'#FF7675'}/>
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
}