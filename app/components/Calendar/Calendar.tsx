import {JSX} from 'react';
import Image from "next/image";
import styles from './Calendar.module.css';

import {classNameGenerator} from "@/app/utils/functions";

import winterImage from "@/public/images/winterCalendarImage.svg";

export default function Calendar({date}: any): JSX.Element {
    const monthNamesArray: Array<string> = ["January","February","March","April","May","June","July", "August","September","October","November","December"]

    const lastMonthFinalDay: Date = new Date(date.getFullYear(), date.getMonth(), 0);
    const thisMonthFinalDay: Date = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const daysArray: Array<JSX.Element> = [];
    for(let i: number = 0; i < lastMonthFinalDay.getDay(); i++) {
        daysArray.push(
            <div key={daysArray.length + 1} className={classNameGenerator(styles.calendarDay, styles.notCurrentMonthDay)}>
                {lastMonthFinalDay.getDate() - (lastMonthFinalDay.getDay() - i - 1)}
            </div>
        );
    }
    for(let i: number = 0; i < thisMonthFinalDay.getDate(); i++) {
        daysArray.push(
            <div key={daysArray.length + 1} className={classNameGenerator(styles.calendarDay, i + 1 === date.getDate() ? styles.today : '')}>
                {i + 1}
            </div>
        );
    }
    for(let i: number = 0; i < 7; i++) {
        if(daysArray.length % 7 === 0) { break; }
        daysArray.push(
            <div key={daysArray.length + 1} className={classNameGenerator(styles.calendarDay, styles.notCurrentMonthDay)}>
                {i + 1}
            </div>
        );
    }

    return (
        <div className={styles.calendar}>
            <span className={styles.monthName}>{monthNamesArray[date.getMonth()]}</span>
            <div className={styles.calendarBody}>
                <span>MO</span>
                <span>TU</span>
                <span>WE</span>
                <span>TH</span>
                <span>FR</span>
                <span>SA</span>
                <span>SU</span>

                {daysArray}
            </div>
            <Image className={styles.seasonImage} src={winterImage} alt={'winter'}/>
        </div>
    );
}
