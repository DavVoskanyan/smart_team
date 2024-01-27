import React from 'react';
import ListItemType from './ListItemType';
import styles from '@/app/components/listItemComponents/ListItem/ListItem.module.css';
import DateAndTime from '@/app/components/listItemComponents/DateAndTime/DateAndTime';

const ListItem: React.FC<ListItemType> = (
    {withTime, date, message, itemBackgroundColor}: ListItemType
): React.ReactElement => {
    return (
        <div className={styles.listItem} style={{ backgroundColor: itemBackgroundColor }}>
            <DateAndTime withTime={withTime} date={date}/>
            <div className={styles.separator} />
            <p className={styles.message}>
                {message}
            </p>
        </div>
    );
};

export default ListItem;