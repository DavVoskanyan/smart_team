import {JSX} from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ItemsList.module.css";
import ListItem from "@/app/components/ListItem/ListItem";

export default function ItemsList({iconFileName, title, itemBackgroundColor, withTime, seeAllLink}: any): JSX.Element {
    const imageElement: JSX.Element = <Image
        className={styles.titleIcon}
        src={iconFileName}
        alt={'icon'}
        width={26}
        height={26}/>;
    const seeAllLinkElement: JSX.Element = <Link
        className={styles.seeAllLink}
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
                <ListItem withTime={withTime}/>
                <ListItem withTime={withTime}/>
            </div>
        </div>
    );
}