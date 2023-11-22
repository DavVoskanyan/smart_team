import {JSX} from 'react';
import styles from './NotificationSidebar.module.css';
import ItemsList from "@/app/components/listComponents/ItemsList/ItemsList";
import ringIcon from "@/public/images/icons/ringIcon.svg";
import meetIcon from "@/public/images/icons/meetIcon.svg";
import {NotificationSidebarType} from "@/app/utils/types/propsTypes";

export default function NotificationSidebar({itemsList}: NotificationSidebarType): JSX.Element {
    return (
        <div className={styles.notificationSidebar}>

            <ItemsList itemsArray={itemsList}
                       iconFileName={ringIcon}
                       title={'notifications'}
                       itemBackgroundColor={'var(--application-background-color)'}
                       seeAllLink={''}
                       withTime={true}
            />

            <ItemsList itemsArray={itemsList}
                       iconFileName={meetIcon}
                       title={'notifications'}
                       itemBackgroundColor={'var(--application-background-color)'}
                       seeAllLink={''}
                       withTime={true}
            />

            <ItemsList itemsArray={itemsList}
                       iconFileName={null}
                       title={'notifications'}
                       itemBackgroundColor={'var(--application-background-color)'}
                       seeAllLink={''}
                       withTime={true}
            />

        </div>
    );
}