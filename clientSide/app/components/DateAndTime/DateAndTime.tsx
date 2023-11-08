import {JSX} from 'react';
import {classNameGenerator, dateToStringParser} from "@/app/utils/functions";
import {DateAndTimeType} from "@/app/utils/types/propsTypes";

import styles from "./DateAndTime.module.css"

export default function DateAndTime({withTime, date}: DateAndTimeType): JSX.Element {
    const dateFormat: string = withTime ? "M/D" : "D MN";
    const formatSeparator: string = withTime ? "/" : " ";
    return (
        <div className={classNameGenerator(styles.dateAndTime, withTime ? styles.withTime : styles.onlyDate)}>
            <span className={styles.date}>{ dateToStringParser(date, dateFormat, formatSeparator) }</span>
            {
                withTime
                ? <span className={styles.time}>{ dateToStringParser(date, "h:m", ":") }</span>
                : ''
            }
        </div>
    );
}