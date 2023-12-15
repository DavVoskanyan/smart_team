import React from 'react';
import AddMemberButtonType from './AddMemberButtonType';
import Image from 'next/image';

import styles from './AddMemberButton.module.css';
import plusIcon from '@/public/images/icons/plusIcon.svg';

const AddMemberButton: React.FC<AddMemberButtonType> = (): React.ReactElement => {
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
};

export default AddMemberButton;