import {DAYS_OF_WEEK, MONTH_NAMES} from './constants';

/**
 * @param classes : Array<string> - Contains all arguments passed to function.
 *
 * @return string - Returns string that includes all arguments passed to function separated with ' '(space).
 *
 * @description Function creates and returns string that contains CSSClasses passed to function.
 *
 * @author David Voskanyan
 */
export function classNameGenerator(...classes: Array<string>): string {
    return classes.join(' ');
}

/**
 * @param date : Date - Date from which the string will be generated.
 * @param formatString : string - String that represents format by which the string will be generated. (example "D:M:Y")
 * @param separator : string - String that contains separator for formatString. (example ":")
 *
 * @return string - Representation of passed date as string.
 *
 * @description Function creates and returns string of date with different formats.
 *
 * @author David Voskanyan
 */
export function dateToStringParser(date: Date, formatString: string, separator: string): string {
    const formatObject: object = {
        'Y': date.getFullYear(),
        'M': date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        'MN': MONTH_NAMES[date.getMonth()],
        'D': date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        'DN': DAYS_OF_WEEK[date.getDay()],

        'h': date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        'm': date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        's': date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
    };
    return formatString
        .split(separator)
        .map((unit: string): string => formatObject[unit as keyof object] )
        .join(separator);
}