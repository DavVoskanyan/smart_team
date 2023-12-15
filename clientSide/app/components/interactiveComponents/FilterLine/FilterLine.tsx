import React from 'react';
import FilterLineType from './FilterLineType';
import {classNameGenerator} from '@/app/utils/functions';
import Image from 'next/image';

import gridIcon from '@/public/images/icons/threeColumnGridIcon.svg';
import gridIconActive from '@/public/images/icons/threeColumnGridIconActive.svg';
import listIcon from '@/public/images/icons/listIcon.svg';
import listIconActive from '@/public/images/icons/listIconActive.svg';
import chevronIcon from '@/public/images/icons/chevron.svg';

import styles from './FilterLine.module.css';

const FilterLine: React.FC<FilterLineType> = (): React.ReactElement => {
    return (
        <div className={styles.filterLine}>
            <button className={classNameGenerator(styles.allMembersButton, styles.active)}>all members</button>

            <div tabIndex={1} className={styles.departmentsFilterContainer}>
                <div className={styles.filterTitle}>
                    by departments
                    <Image className={styles.chevronIcon} src={chevronIcon} alt={'chevronIcon'}/>
                </div>

                <div className={styles.departmentDropdown}>
                    <label className={styles.departmentContainer}>
                        <input className={styles.departmentCheckbox} type="checkbox"/>
                        <span>Development</span>
                    </label>
                    <label className={styles.departmentContainer}>
                        <input className={styles.departmentCheckbox} type="checkbox"/>
                        <span>Development</span>
                    </label>
                    <label className={styles.departmentContainer}>
                        <input className={styles.departmentCheckbox} type="checkbox"/>
                        <span>Development</span>
                    </label>
                </div>
            </div>

            <div className={styles.listViewsContainer}>
                <button className={classNameGenerator(styles.viewChangerButton, styles.gridContainer, styles.active)}>
                    <Image className={styles.listViewIcon} src={gridIcon} alt={'gridIcon'}/>
                    <Image className={styles.listViewIconActive} src={gridIconActive} alt={'gridActiveIcon'}/>
                </button>
                <button className={classNameGenerator(styles.viewChangerButton, styles.listContainer)}>
                    <Image className={styles.listViewIcon} src={listIcon} alt={'listIcon'}/>
                    <Image className={styles.listViewIconActive} src={listIconActive} alt={'listActiveIcon'}/>
                </button>
            </div>
        </div>
    );
};

export default FilterLine;