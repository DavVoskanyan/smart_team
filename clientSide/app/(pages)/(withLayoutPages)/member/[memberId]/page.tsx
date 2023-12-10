import React from 'react';
import styles from './page.module.css';
import {JSX} from 'react';

import NotificationSidebar from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar';
import MemberInfoPageComponent from '@/app/components/pageContentComponent/MemberInfoPageComponent/MemberInfoPageComponent';

import {listItemObjectType} from '@/app/utils/types/localUsedTypes';
import {classNameGenerator} from '@/app/utils/functions';

export default function Home(): JSX.Element {
    const userDescription: string = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
    const infoArray: Array<any> = [
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
    const experienceArray: Array<any> = [
        {
            date: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
        {
            date: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
        {
            date: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
        {
            date: new Date(),
            workPlaceName: 'Work place name',
            position: 'position',
        },
    ];
    const pointObjectArray1: Array<any> = [
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
    const pointObjectArray2: Array<any> = [
        {
            title: 'Dancing',
            percent: 60,
            color: null,
        },
        {
            title: 'Reading',
            percent: 60,
            color: null,
        },
        {
            title: 'Painting',
            percent: 60,
            color: null,
        },
        {
            title: 'Listen music',
            percent: 60,
            color: null,
        },
        {
            title: 'Singing',
            percent: 60,
            color: null,
        },
    ];

    const currentDate: Date = new Date();
    const itemsList: Array<listItemObjectType> = [
        {
            date: currentDate,
            message: 'Աղջիկներ պետք է 15:00-ի համար սեղան պատրաստել'
        },
        {
            date: currentDate,
            message: 'Hello World'
        }
    ];



    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>

            <MemberInfoPageComponent userDescription={userDescription}
                                     infoArray={infoArray}
                                     experienceArray={experienceArray}
                                     pointObjectArray1={pointObjectArray1}
                                     pointObjectArray2={pointObjectArray2} />

            <NotificationSidebar itemsList={itemsList}/>
        </main>
    );
}