import React from 'react';
import {classNameGenerator, dateToStringParser} from '@/app/utils/functions';
import DateAndTimeType from './DateAndTimeType';

import styles from './DateAndTime.module.css';

const DateAndTime: React.FC<DateAndTimeType> = (
    {withTime, date}: DateAndTimeType
): React.ReactElement => {
    const dateFormat: string = withTime ? 'M/D' : 'D MN';
    const formatSeparator: string = withTime ? '/' : ' ';
    return (
        <div className={classNameGenerator(styles.dateAndTime, withTime ? styles.withTime : styles.onlyDate)}>
            <span className={styles.date}>{ dateToStringParser(date, dateFormat, formatSeparator) }</span>
            {
                withTime
                ? <span className={styles.time}>{ dateToStringParser(date, 'h:m', ':') }</span>
                : ''
            }
        </div>
    );
};

export default DateAndTime;