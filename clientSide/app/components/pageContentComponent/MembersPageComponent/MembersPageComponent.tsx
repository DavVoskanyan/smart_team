import React, {JSX} from 'react';
import {classNameGenerator} from '@/app/utils/functions';
import AddMemberButton from '@/app/components/interactiveComponents/AddMemberButton/AddMemberButton';
import SearchInput from '@/app/components/interactiveComponents/SearchInput/SearchInput';
import MemberComponent from '@/app/components/listItemComponents/MemberComponent/MemberComponent';
import FilterLine from '@/app/components/interactiveComponents/FilterLine/FilterLine';

import styles from './MembersPageComponent.module.css';
import {MemberObjectType} from '@/app/utils/types/localUsedTypes';



export default function MembersPageComponent(): JSX.Element {
    const isAdmin: boolean = true;
    const isList: boolean = false;
    const membersArray: Array<MemberObjectType> = [
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'Narek',
            lastName: 'Harutunyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: false,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'Narek',
            lastName: 'Harutunyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: false,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'Narek',
            lastName: 'Harutunyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: false,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            avatarInfo: {
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    linkIcon: '',
                    link: ''
                }
            ]
        },
    ];

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
                        membersArray.map((memberObject: any, memberIndex: number) => {
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
}