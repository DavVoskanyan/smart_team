import React, {JSX} from 'react';

import styles from './page.module.css';
import {classNameGenerator} from '@/app/utils/functions';
import NotificationSidebar from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar';
import FilesPageComponent from '@/app/components/pageContentComponent/FilesPageComponent/FilesPageComponent';
import {listItemObjectType} from '@/app/utils/types/localUsedTypes';


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
    const foldersArray: Array<object> = [
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
            <FilesPageComponent foldersArray={foldersArray}/>
            <NotificationSidebar itemsList={itemsList}/>
        </main>
    );
}
