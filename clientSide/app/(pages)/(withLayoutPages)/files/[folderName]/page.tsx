import React from 'react';

import {classNameGenerator} from '@/app/utils/functions';
import FilesPageComponent from '@/app/components/pageContentComponent/FilesPageComponent/FilesPageComponent';
import NotificationSidebar from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar';

import styles from '@/app/(pages)/(withLayoutPages)/files/[folderName]/page.module.css';
import ListItemType from '@/app/components/listItemComponents/ListItem/ListItemType';
import FileComponentType from '@/app/components/listComponents/FileComponent/FileComponentType';


const Files = (): React.ReactElement => {
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

    const filesArray: Array<FileComponentType> = [
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

            <NotificationSidebar notificationsArray={notificationArray}
                                 meetingsArray={meetingsArray}
                                 upcomingBirthdaysArray={upcomingBirthdaysArray}
            />
        </main>
    );
};

export default Files;