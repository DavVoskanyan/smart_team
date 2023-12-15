import React from 'react';
import MemberInfoPageComponentType from './MemberInfoPageComponentType';
import styles from  './MemberInfoPageComponent.module.css';

import AboutMemberInfoCard from '@/app/components/containerComponents/AboutMemberInfoCard/AboutMemberInfoCard';
import SmallMemberInfoCard from '@/app/components/containerComponents/SmallMemberInfoCard/SmallMemberInfoCard';
import MemberInfoList from '@/app/components/listComponents/MemberInfoList/MemberInfoList';
import MemberExperienceList from '@/app/components/listComponents/MemberExperienceList/MemberExperienceList';
import CharacteristicsComponent from '@/app/components/listComponents/CharacteristicsComponent/CharacteristicsComponent';

const MemberInfoPageComponent: React.FC<MemberInfoPageComponentType> = (
    { userDescription, infoArray, experienceArray, pointObjectArray1, pointObjectArray2 }: MemberInfoPageComponentType
): React.ReactElement => {

    return (
        <div className={styles.memberInfoPageComponent}>
            <AboutMemberInfoCard
                firstName={'Narek'}
                lastName={'Harutunyan'}
                avatarImageFileName={'user.jpg'}
                avatarColor={'#FABE7A'}
                profession={'Backend developer'}
                about={userDescription}
                joinDate={new Date()}
            />

            <SmallMemberInfoCard cardTitle={'Basic information'}>
                <MemberInfoList infoArray={infoArray}/>
            </SmallMemberInfoCard>

            <SmallMemberInfoCard cardTitle={'Work experience'}>
                <MemberExperienceList experienceArray={experienceArray}/>
            </SmallMemberInfoCard>

            <SmallMemberInfoCard cardTitle={'My Interests'}>
                <CharacteristicsComponent
                    pointObjectArray={pointObjectArray1}
                    mainCircleTitle={'interests'}
                />
            </SmallMemberInfoCard>

            <SmallMemberInfoCard cardTitle={'Trait of character'}>
                <CharacteristicsComponent
                    pointObjectArray={pointObjectArray2}
                    mainCircleTitle={'character'}
                />
            </SmallMemberInfoCard>
        </div>
    );
};

export default MemberInfoPageComponent;