import {JSX} from 'react';
import {classNameGenerator} from "@/app/utils/functions";

import styles from './page.module.css';

import ringIcon from '@/public/images/icons/ringIcon.svg';
import meetIcon from '@/public/images/icons/meetIcon.svg';

import GreetingComponent from "@/app/components/GreetingComponent/GreetigComponent";
import Calendar from "@/app/components/Calendar/Calendar";
import NewMember from "@/app/components/NewMember/NewMember";
import TeamMembers from "@/app/components/TeamMembers/TeamMembers";
import NewFiles from "@/app/components/NewFiles/NewFiles";
import HappyBirthday from "@/app/components/HappyBirthday/HappyBirthday";
import ItemsList from "@/app/components/ItemsList/ItemsList";


export default function Home(): JSX.Element {
    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>
            <GreetingComponent userName={'David'}/>
            <Calendar date={new Date()}/>
            <NewMember />
            <TeamMembers />
            <NewFiles />
            <ItemsList
                iconFileName={ringIcon}
                title={'notifications'}
                itemBackgroundColor={'var(--light-interacted)'}
                seeAllLink={''}
                withTime={true}/>
            <ItemsList
                iconFileName={meetIcon}
                title={'meetings'}
                itemBackgroundColor={'var(--light-interacted)'}
                seeAllLink={''}
                withTime={true}/>
            <HappyBirthday />
            <ItemsList
                title={'upcoming birthdays'}
                itemBackgroundColor={'var(--light-interacted)'}
                seeAllLink={''}
                withTime={false}/>
        </main>
    )
}
