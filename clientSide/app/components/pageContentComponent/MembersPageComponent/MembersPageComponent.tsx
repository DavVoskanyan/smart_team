import React from 'react';
import MembersPageComponentType from './MembersPageComponentType';

import {classNameGenerator} from '@/app/utils/functions';
import AddMemberButton from '@/app/components/interactiveComponents/AddMemberButton/AddMemberButton';
import SearchInput from '@/app/components/interactiveComponents/SearchInput/SearchInput';
import MemberComponent from '@/app/components/listItemComponents/MemberComponent/MemberComponent';
import FilterLine from '@/app/components/interactiveComponents/FilterLine/FilterLine';

import styles from '@/app/components/pageContentComponent/MembersPageComponent/MembersPageComponent.module.css';
import MemberComponentType from '@/app/components/listItemComponents/MemberComponent/MemberComponentType';



const MembersPageComponent: React.FC<MembersPageComponentType> = (
    {isAdmin, isList, membersArray}: MembersPageComponentType
): React.ReactElement => {

    return (
        <div className={styles.membersPageComponent}>
            <div className={styles.membersPageHeader}>
                {isAdmin ? <AddMemberButton /> : <div />}
                <SearchInput />
            </div>
            <div className={styles.filterContainer}>
                <FilterLine />
            </div>
            <div className={styles.membersPrimaryContainer}>
                <div className={classNameGenerator(styles.membersSecondaryContainer, isList ? styles.listView : '')}>
                    {
                        membersArray.map((memberObject: MemberComponentType, memberIndex: number) => {
                            return (
                                <MemberComponent key={memberIndex}
                                                 firstName={memberObject.firstName}
                                                 lastName={memberObject.lastName}
                                                 profession={memberObject.profession}
                                                 avatarInfo={memberObject.avatarInfo}
                                                 isOnline={memberObject.isOnline}
                                                 memberLink={memberObject.memberLink}
                                                 socialsArray={memberObject.socialsArray}
                                                 isListView={isList}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MembersPageComponent;