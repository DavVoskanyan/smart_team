import React from 'react';
import styles from '@/app/components/layoutComponents/NotificationSidebar/NotificationSidebar.module.css';
import ItemsList from '@/app/components/listComponents/ItemsList/ItemsList';
import ringIcon from '@/public/images/icons/ringIcon.svg';
import meetIcon from '@/public/images/icons/meetIcon.svg';
import NotificationSidebarType from './NotificationSidebarType';

const NotificationSidebar: React.FC<NotificationSidebarType> = (
    {notificationsArray, meetingsArray, upcomingBirthdaysArray}: NotificationSidebarType
): React.ReactElement => {
    return (
        <div className={styles.notificationSidebar}>

            <ItemsList itemsArray={notificationsArray}
                       iconFileName={ringIcon}
                       title={'notifications'}
                       itemBackgroundColor={'var(--application-background-color)'}
                       seeAllLink={''}
                       withTime={true}
            />

            <ItemsList itemsArray={meetingsArray}
                       iconFileName={meetIcon}
                       title={'notifications'}
                       itemBackgroundColor={'var(--application-background-color)'}
                       seeAllLink={''}
                       withTime={true}
            />

            <ItemsList itemsArray={upcomingBirthdaysArray}
                       iconFileName={''}
                       title={'notifications'}
                       itemBackgroundColor={'var(--application-background-color)'}
                       seeAllLink={''}
                       withTime={true}
            />

        </div>
    );
};

export default NotificationSidebar;