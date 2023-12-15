import React from 'react';
import MemberExperienceListType from './MemberExperienceListType';

import styles from './MemberExperienceList.module.css';
import ExperienceCardListItem from '@/app/components/listItemComponents/ExperienceCardListItem/ExperienceCardListItem';
import ExperienceCardListItemType
    from '@/app/components/listItemComponents/ExperienceCardListItem/ExperienceCardListItemType';


const MemberExperienceList: React.FC<MemberExperienceListType> = (
    {experienceArray}: MemberExperienceListType
): React.ReactElement => {
    return (
        <div className={styles.emberExperienceList}>
            {
                experienceArray.map((experienceObject: ExperienceCardListItemType, index: number) => {
                    return (
                        <ExperienceCardListItem key={index}
                                                workStartDate={experienceObject.workStartDate}
                                                workPlaceName={experienceObject.workPlaceName}
                                                position={experienceObject.position}
                        />
                    );
                })
            }
        </div>
    );
};

export default MemberExperienceList;