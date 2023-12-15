import React from 'react';
import CalendarType from './CalendarType';
import Image from 'next/image';

import {classNameGenerator, dateToStringParser} from '@/app/utils/functions';
import {DAYS_OF_WEEK_SHORT} from '@/app/utils/constants';

import styles from './Calendar.module.css';
import winterImage from '@/public/images/winterCalendarImage.svg';

const Calendar: React.FC<CalendarType> = (
    {date}: CalendarType
): React.ReactElement => {
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
            <span className={styles.monthName}>{dateToStringParser(date, 'MN', ' ')}</span>
            <div className={styles.calendarBody}>
                {
                    DAYS_OF_WEEK_SHORT
                    .map((day: string, index: number): JSX.Element => <span className={styles.weekDayName} key={index}>{day}</span>)
                }

                {daysArray}
            </div>
            <Image className={styles.seasonImage} src={winterImage} alt={'winter'}/>
        </div>
    );
};

export default Calendar;