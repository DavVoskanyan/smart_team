import {JSX} from "react";
import {ListItemType} from "@/app/utils/types/propsTypes"
import styles from "./ListItem.module.css";
import DateAndTime from "@/app/components/DateAndTime/DateAndTime";

export default function ListItem({withTime, date, message}: ListItemType): JSX.Element {
    return (
        <div className={styles.listItem}>
            <DateAndTime withTime={withTime} date={date}/>
            <div className={styles.separator} />
            <p className={styles.message}>
                {message}
            </p>
        </div>
    );
}