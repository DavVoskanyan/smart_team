import {JSX} from 'react';

import styles from './MemberExperienceList.module.css';
import ExperienceCardListItem from "@/app/components/listItemComponents/ExperienceCardListItem/ExperienceCardListItem";

export default function MemberExperienceList({experienceArray}: any): JSX.Element {
    return (
        <div className={styles.emberExperienceList}>
            {
                experienceArray.map((experienceObject: any, index: number) => {
                    return <ExperienceCardListItem
                        key={index}
                        workStartDate={experienceObject.date}
                        workPlaceName={experienceObject.workPlaceName}
                        position={experienceObject.position}
                    />
                })
            }
        </div>
    );
}