import React from 'react';
import styles from './page.module.css';

import NotificationSidebar from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar';
import MemberInfoPageComponent from '@/app/components/pageContentComponent/MemberInfoPageComponent/MemberInfoPageComponent';

import {classNameGenerator} from '@/app/utils/functions';
import ListItemType from '@/app/components/listItemComponents/ListItem/ListItemType';
import InfoCardListItemType from '@/app/components/listItemComponents/InfoCardListItem/InfoCardListItemType';
import ExperienceCardListItemType from '@/app/components/listItemComponents/ExperienceCardListItem/ExperienceCardListItemType';
import CharacteristicsCircleType from '@/app/components/listItemComponents/CharacteristicsCircle/CharacteristicsCircleType';

const Member = (): React.ReactElement => {
    const userDescription: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    const infoArray: Array<InfoCardListItemType> = [
        {
            iconName: 'phoneIcon',
            info: '+374 94 00 00 00',
        },
        {
            iconName: 'mailIcon',
            info: 'julieta.s@smp.am',
        },
        {
            iconName: 'locationIcon',
            info: 'Yerevan, Armenia',
        },
        {
            iconName: 'birthdayIcon',
            info: '12 / 01 / 1997',
        }
    ];
    const experienceArray: Array<ExperienceCardListItemType> = [
        {
            workStartDate: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
        {
            workStartDate: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
        {
            workStartDate: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
        {
            workStartDate: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
    ];
    const pointObjectArray1: Array<CharacteristicsCircleType> = [
        {
            title: 'Dancing',
            percent: 20,
            color: '#FFD6D6',
        },
        {
            title: 'Reading',
            percent: 80,
            color: '#CBF3F0',
        },
        {
            title: 'Painting',
            percent: 60,
            color: '#FBFFB9',
        },
        {
            title: 'Listen music',
            percent: 100,
            color: '#D1F5BE',
        },
        {
            title: 'Singing',
            percent: 40,
            color: '#FFF4E4',
        },
    ];
    const pointObjectArray2: Array<CharacteristicsCircleType> = [
        {
            title: 'Dancing',
            percent: 60,
            color: '',
        },
        {
            title: 'Reading',
            percent: 60,
            color: '',
        },
        {
            title: 'Painting',
            percent: 60,
            color: '',
        },
        {
            title: 'Listen music',
            percent: 60,
            color: '',
        },
        {
            title: 'Singing',
            percent: 60,
            color: '',
        },
    ];

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




    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>

            <MemberInfoPageComponent userDescription={userDescription}
                                     infoArray={infoArray}
                                     experienceArray={experienceArray}
                                     pointObjectArray1={pointObjectArray1}
                                     pointObjectArray2={pointObjectArray2} />


            <NotificationSidebar notificationsArray={notificationArray}
                                 meetingsArray={meetingsArray}
                                 upcomingBirthdaysArray={upcomingBirthdaysArray}
            />
        </main>
    );
};

export default Member;