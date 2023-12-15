import React from 'react';
import styles from './page.module.css';
import {classNameGenerator} from '@/app/utils/functions';
import NotificationSidebar from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar';
import MembersPageComponent from '@/app/components/pageContentComponent/MembersPageComponent/MembersPageComponent';
import MemberComponentType from '@/app/components/listItemComponents/MemberComponent/MemberComponentType';
import ListItemType from '@/app/components/listItemComponents/ListItem/ListItemType';

const Team: React.FC = (): React.ReactElement => {
    const currentDate: Date = new Date();
    const notificationArray: Array<ListItemType> = [
        {
            date: currentDate,
            message: 'Աղջիկներ պետք է 15:00-ի համար սեղան պատրաստել',
            withTime: true,
            itemBackgroundColor: 'var(--application-background-color)',
        },
        {
            date: currentDate,
            message: 'Hello World',
            withTime: true,
            itemBackgroundColor: 'var(--application-background-color)',
        },
    ];
    const meetingsArray:  Array<ListItemType> = [
        {
            date: currentDate,
            message: 'Training with clients',
            withTime: true,
            itemBackgroundColor: 'var(--application-background-color)',
        },
        {
            date: currentDate,
            message: 'Hello World',
            withTime: true,
            itemBackgroundColor: 'var(--application-background-color)',
        },
    ];
    const upcomingBirthdaysArray:  Array<ListItemType> = [
        {
            date: currentDate,
            message: 'Training with clients',
            withTime: false,
            itemBackgroundColor: 'var(--application-background-color)',
        },
        {
            date: currentDate,
            message: 'Hello World',
            withTime: false,
            itemBackgroundColor: 'var(--application-background-color)',
        },
    ];

    const isAdmin: boolean = true;
    const isList: boolean = false;

    const membersArray: Array<MemberComponentType> = [
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'Narek',
            lastName: 'Harutunyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: false,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'Narek',
            lastName: 'Harutunyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: false,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'Narek',
            lastName: 'Harutunyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: false,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web Developer',
            isListView: isList,
            avatarInfo: {
                firstName: 'David',
                lastName: 'Voskanyan',
                avatarImageFileName: '',
                avatarColor: '#FF7675',
            },
            memberLink: '',
            isOnline: true,
            socialsArray: [
                {
                    activeIconFileName: 'linkedInActive.svg',
                    iconFileName: 'linkedIn.svg',
                    link: '#'
                }
            ]
        },
    ];
    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>
            <div className={styles.teamMembersSection}>
                <MembersPageComponent isAdmin={isAdmin}
                                      isList={isList}
                                      membersArray={membersArray}
                />
            </div>
            <NotificationSidebar notificationsArray={notificationArray}
                                 meetingsArray={meetingsArray}
                                 upcomingBirthdaysArray={upcomingBirthdaysArray}
            />
        </main>
    );
};

export default Team;
