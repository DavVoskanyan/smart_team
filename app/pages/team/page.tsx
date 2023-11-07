import styles from './page.module.css';
import {classNameGenerator} from "@/app/utils/functions";
import NotificationSidebar from "@/app/components/NotificationSidebar/NotificationSidebar";
import MembersPageComponent from "@/app/components/MembersPageComponent/MembersPageComponent";
import {listItemObjectType} from "@/app/utils/types/localUsedTypes";

export default function Home() {
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
            <div className={styles.teamMembersSection}>
                <MembersPageComponent />
            </div>
            <NotificationSidebar itemsList={itemsList}/>
        </main>
    )
}
