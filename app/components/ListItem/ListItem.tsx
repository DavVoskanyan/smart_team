import {JSX} from "react";
import styles from "./ListItem.module.css";
import DateAndTime from "@/app/components/DateAndTime/DateAndTime";

export default function ListItem({withTime}: any): JSX.Element {
    const time: JSX.Element = <span className={styles.date}> 25/06 </span>
    return (
        <div className={styles.listItem}>
            <DateAndTime withTime={false} date={'25 September'} time={'15:00'}/>
            <div className={styles.separator} />
            <p className={styles.message}>
                Աղջիկներ, պետք է 15:00-ի համար սեղան պատրաստել
            </p>
        </div>
    );
}