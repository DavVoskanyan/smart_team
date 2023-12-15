import React from 'react';
import {classNameGenerator} from '@/app/utils/functions';

import styles from './page.module.css';

import ringIcon from '@/public/images/icons/ringIcon.svg';
import meetIcon from '@/public/images/icons/meetIcon.svg';

import GreetingComponent from '@/app/components/decorativeComponents/GreetingComponent/GreetigComponent';
import Calendar from '@/app/components/decorativeComponents/Calendar/Calendar';
import NewMember from '@/app/components/decorativeComponents/NewMember/NewMember';
import TeamMembers from '@/app/components/listComponents/TeamMembers/TeamMembers';
import NewFiles from '@/app/components/decorativeComponents/NewFiles/NewFiles';
import HappyBirthday from '@/app/components/decorativeComponents/HappyBirthday/HappyBirthday';
import ItemsList from '@/app/components/listComponents/ItemsList/ItemsList';
import ListItemType from '@/app/components/listItemComponents/ListItem/ListItemType';
import DashboardMemberComponentType
    from '@/app/components/decorativeComponents/DashboardMemberComponent/DashboardMemberComponentType';


const Dashboard: React.FC = (): React.ReactElement => {
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
    const membersList: Array<DashboardMemberComponentType> = [
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFile: '',
            avatarColor: '#FF7675',
            memberLink: '',
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFile: '',
            avatarColor: '#FF7675',
            memberLink: '',
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFile: '',
            avatarColor: '#FF7675',
            memberLink: '',
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFile: '',
            avatarColor: '#FF7675',
            memberLink: '',
        },
    ];

    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>
            <GreetingComponent userName={'David'} />
            <Calendar date={currentDate} />
            <NewMember firstName={'David'}
                       lastName={'Voskanyan'}
                       avatarImageFileName={null}
                       avatarColor={'#FF7675'}
                       profession={'Web-Developer'}
                       joinDate={currentDate} />

            <TeamMembers membersCount={22} membersList={membersList} seeAllLink={''}/>

            <NewFiles photosQuantity={124}
                      documentsQuantity={10} />

            <ItemsList itemsArray={notificationArray}
                       iconFileName={ringIcon}
                       title={'notifications'}
                       itemBackgroundColor={'var(--light-interacted)'}
                       seeAllLink={''}
                       withTime={true} />

            <ItemsList itemsArray={meetingsArray}
                       iconFileName={meetIcon}
                       title={'meetings'}
                       itemBackgroundColor={'var(--light-interacted)'}
                       seeAllLink={''}
                       withTime={true} />

            <HappyBirthday memberName={'David'} />

            <ItemsList itemsArray={upcomingBirthdaysArray}
                       iconFileName={''}
                       title={'upcoming birthdays'}
                       itemBackgroundColor={'var(--light-interacted)'}
                       seeAllLink={''}
                       withTime={false} />
        </main>
    );
};


export default Dashboard;