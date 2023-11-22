import {JSX} from 'react';
import {classNameGenerator} from "@/app/utils/functions";
import {ListItemType} from "@/app/utils/types/propsTypes";
import {listItemObjectType, dashboardMemberObjectType} from "@/app/utils/types/localUsedTypes";

import styles from './page.module.css';

import ringIcon from '@/public/images/icons/ringIcon.svg';
import meetIcon from '@/public/images/icons/meetIcon.svg';

import GreetingComponent from "@/app/components/decorativeComponents/GreetingComponent/GreetigComponent";
import Calendar from "@/app/components/decorativeComponents/Calendar/Calendar";
import NewMember from "@/app/components/decorativeComponents/NewMember/NewMember";
import TeamMembers from "@/app/components/listComponents/TeamMembers/TeamMembers";
import NewFiles from "@/app/components/decorativeComponents/NewFiles/NewFiles";
import HappyBirthday from "@/app/components/decorativeComponents/HappyBirthday/HappyBirthday";
import ItemsList from "@/app/components/listComponents/ItemsList/ItemsList";


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
    const membersList: Array<dashboardMemberObjectType> = [
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFileName: null,
            avatarColor: '#FF7675',
            memberLink: '',
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFileName: null,
            avatarColor: '#FF7675',
            memberLink: '',
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFileName: null,
            avatarColor: '#FF7675',
            memberLink: '',
        },
        {
            firstName: 'David',
            lastName: 'Voskanyan',
            profession: 'Web-Developer',
            avatarImageFileName: null,
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

            <ItemsList itemsArray={itemsList}
                       iconFileName={ringIcon}
                       title={'notifications'}
                       itemBackgroundColor={'var(--light-interacted)'}
                       seeAllLink={''}
                       withTime={true} />

            <ItemsList itemsArray={itemsList}
                       iconFileName={meetIcon}
                       title={'meetings'}
                       itemBackgroundColor={'var(--light-interacted)'}
                       seeAllLink={''}
                       withTime={true} />

            <HappyBirthday memberName={'David'} />

            <ItemsList itemsArray={itemsList}
                       iconFileName={null}
                       title={'upcoming birthdays'}
                       itemBackgroundColor={'var(--light-interacted)'}
                       seeAllLink={''}
                       withTime={false} />
        </main>
    )
}
