import {JSX} from 'react';
import Image from 'next/image';

import styles from './AddMemberButton.module.css';
import plusIcon from '@/public/images/icons/plusIcon.svg';

export default function AddMemberButton(): JSX.Element {
    return(
        <div className={styles.addMemberButtonContainer}>
            <button className={styles.addMemberButton}>

                <Image className={styles.inButtonPlusIcon}
                       src={plusIcon}
                       alt={'plusIcon'}
                />
                
            </button>
            <span className={styles.buttonText}>նոր անդամ</span>
        </div>
    );
}