import styles from './page.module.css';
import {JSX} from 'react';

import NotificationSidebar from "@/app/components/NotificationSidebar/NotificationSidebar";
import AboutMemberInfoCard from "@/app/components/AboutMemberInfoCard/AboutMemberInfoCard";
import SmallMemberInfoCard from "@/app/components/SmallMemberInfoCard/SmallMemberInfoCard";
import MemberInfoList from "@/app/components/MemberInfoList/MemberInfoList";

import {listItemObjectType} from "@/app/utils/types/localUsedTypes";
import {classNameGenerator} from "@/app/utils/functions";
import CharacteristicsComponent from "@/app/components/CharacteristicsComponent/CharacteristicsComponent";
import MemberExperienceList from "@/app/components/MemberExperienceList/MemberExperienceList";

export default function Home(props: any): JSX.Element {
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
    const userText: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    const infoArray: Array<any> = [
        {
            iconName: "phoneIcon",
            info: "+374 94 00 00 00",
        },
        {
            iconName: "mailIcon",
            info: "julieta.s@smp.am",
        },
        {
            iconName: "locationIcon",
            info: "Yerevan, Armenia",
        },
        {
            iconName: "birthdayIcon",
            info: "12 / 01 / 1997",
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
            title: "Dancing",
            percent: 20,
            color: '#FFD6D6',
        },
        {
            title: "Reading",
            percent: 80,
            color: '#CBF3F0',
        },
        {
            title: "Painting",
            percent: 60,
            color: '#FBFFB9',
        },
        {
            title: "Listen music",
            percent: 100,
            color: '#D1F5BE',
        },
        {
            title: "Singing",
            percent: 40,
            color: '#FFF4E4',
        },
    ];
    const pointObjectArray2: Array<any> = [
        {
            title: "Dancing",
            percent: 60,
            color: null,
        },
        {
            title: "Reading",
            percent: 60,
            color: null,
        },
        {
            title: "Painting",
            percent: 60,
            color: null,
        },
        {
            title: "Listen music",
            percent: 60,
            color: null,
        },
        {
            title: "Singing",
            percent: 60,
            color: null,
        },
    ];



    return (
        <main className={classNameGenerator(styles.main, 'pageContentContainer')}>
            <div className={styles.memberInfoSection}>
                <AboutMemberInfoCard
                    firstName={"Narek"}
                    lastName={"Harutunyan"}
                    avatarImageFileName={'user.jpg'}
                    avatarColor={"#FABE7A"}
                    profession={"Backend developer"}
                    about={userText}
                    joinDate={new Date()}
                />

                <SmallMemberInfoCard cardTitle={'Basic information'}>
                    <MemberInfoList infoArray={infoArray}/>
                </SmallMemberInfoCard>

                <SmallMemberInfoCard cardTitle={'Work experience'}>
                    <MemberExperienceList experienceArray={experienceArray}/>
                </SmallMemberInfoCard>

                <SmallMemberInfoCard cardTitle={'My Interests'}>
                    <CharacteristicsComponent
                        pointObjectArray={pointObjectArray1}
                        mainCircleTitle={'interests'}
                    />
                </SmallMemberInfoCard>

                <SmallMemberInfoCard cardTitle={'Trait of character'}>
                    <CharacteristicsComponent
                        pointObjectArray={pointObjectArray2}
                        mainCircleTitle={'character'}
                    />
                </SmallMemberInfoCard>
            </div>
            <NotificationSidebar itemsList={itemsList}/>
        </main>
    );
}