import {JSX} from "react";
import {ItemsListType, ListItemType} from '@/app/utils/types/propsTypes';
import Image from "next/image";
import Link from "next/link";
import styles from "./ItemsList.module.css";
import ListItem from "@/app/components/ListItem/ListItem";
import {listItemObjectType} from "@/app/utils/types/localUsedTypes";

export default function ItemsList({itemsArray, iconFileName, title, itemBackgroundColor, withTime, seeAllLink}: ItemsListType): JSX.Element {
    const imageElement: JSX.Element = <Image className={styles.titleIcon}
                                             src={iconFileName}
                                             alt={'icon'}
                                             width={26}
                                             height={26}/>;
    const seeAllLinkElement: JSX.Element = <Link className={styles.seeAllLink}
                                                 href={seeAllLink}>See All</Link>
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
                {itemsArray.map((item: listItemObjectType, index: number): JSX.Element => {
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
}