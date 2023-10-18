import {JSX} from 'react';
import {classNameGenerator} from "@/app/utils/functions";

import styles from "./DateAndTime.module.css"

export default function DateAndTime({withTime, date, time}: any) {

    return (
        <div className={classNameGenerator(styles.dateAndTime, withTime ? styles.withTime : styles.onlyDate)}>
            <span className={styles.date}>{date}</span>
            {withTime ? <span className={styles.time}>{date}</span> : ''}
        </div>
    );
}