import React from 'react';

import styles from '@/app/(pages)/(withLayoutPages)/files/page.module.css';
import {classNameGenerator} from '@/app/utils/functions';
import NotificationSidebar from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar';
import FoldersPageComponent from '@/app/components/pageContentComponent/FoldersPageComponent/FoldersPageComponent';
import ListItemType from '@/app/components/listItemComponents/ListItem/ListItemType';
import FolderComponentType from '@/app/components/listComponents/FolderComponent/FolderComponentType';


const Folders = (): React.ReactElement => {
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

    const foldersArray: Array<FolderComponentType> = [
        {
            folderName: 'Documents',
            filesQuantity: 120,
            folderUrlName: 'documents',
        },
        {
            folderName: 'Documents',
            filesQuantity: 10,
            folderUrlName: 'documents',
        },
        {
            folderName: 'Documents',
            filesQuantity: 8,
            folderUrlName: 'documents',
        },
        {
            folderName: 'Documents',
            filesQuantity: 105,
            folderUrlName: 'documents',
        },
        {
            folderName: 'Documents',
            filesQuantity: 2041,
            folderUrlName: 'documents',
        },
    ];

    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>
            <FoldersPageComponent foldersArray={foldersArray}/>

            <NotificationSidebar notificationsArray={notificationArray}
                                 meetingsArray={meetingsArray}
                                 upcomingBirthdaysArray={upcomingBirthdaysArray}
            />
        </main>
    );
};

export default Folders;