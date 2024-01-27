import React from 'react';
import ItemsListType from './ItemsListType';
import Image from 'next/image';
import Link from 'next/link';

import styles from '@/app/components/listComponents/ItemsList/ItemsList.module.css';
import ListItem from '@/app/components/listItemComponents/ListItem/ListItem';
import ListItemType from '@/app/components/listItemComponents/ListItem/ListItemType';

const ItemsList: React.FC<ItemsListType> = (
    {itemsArray, iconFileName, title, itemBackgroundColor, withTime, seeAllLink}: ItemsListType
): React.ReactElement => {
    const imageElement: React.ReactElement = <Image className={styles.titleIcon}
                                             src={iconFileName}
                                             alt={'icon'}
                                             width={26}
                                             height={26}/>;
    const seeAllLinkElement: React.ReactElement = <Link className={styles.seeAllLink}
                                                 href={seeAllLink}>See All</Link>;
    return (
        <div className={styles.itemsList}>
            <div className={styles.listHeader}>
                <h1 className={styles.title}>
                    {iconFileName ? imageElement : ''}
                    <span className={styles.titleText}>{title}</span>
                </h1>
                {seeAllLink ? seeAllLinkElement: '' }
            </div>
            <div className={styles.list}>
                {itemsArray.map((item: ListItemType, index: number): JSX.Element => {
                    return(
                        <ListItem key={index}
                                  itemBackgroundColor={itemBackgroundColor}
                                  withTime={withTime}
                                  date={item.date}
                                  message={item.message}/>
                    );
                })}
            </div>
        </div>
    );
};

export default ItemsList;