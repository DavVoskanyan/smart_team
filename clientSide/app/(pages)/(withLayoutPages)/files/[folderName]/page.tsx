import React, {JSX} from 'react';

import {classNameGenerator} from '@/app/utils/functions';
import FilesPageComponent from '@/app/components/pageContentComponent/FilesPageComponent/FilesPageComponent';
import NotificationSidebar from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar';
import {listItemObjectType} from '@/app/utils/types/localUsedTypes';

import styles from './page.module.css';


export default function Home(): JSX.Element {
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
    const filesArray: Array<object> = [
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
        {
            fileName: 'testImage.jpeg',
        },
    ];


    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>
            <FilesPageComponent filesArray={filesArray}/>
            <NotificationSidebar itemsList={itemsList}/>
        </main>
    );
}
