import {DAYS_OF_WEEK, MONTH_NAMES} from './constants';

export function classNameGenerator(...classes: Array<string>): string {
    return classes.join(' ');
}

export function dateToStringParser(date: Date, formatString: string, separator: string): string {
    const formatObject: {} = {
        "Y": date.getFullYear(),
        "M": date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        "MN": MONTH_NAMES[date.getMonth()],
        "D": date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        "DN": DAYS_OF_WEEK[date.getDay()],

        "h": date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        "m": date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        "s": date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
    }
    return formatString.split(separator).map((unit: string): string => formatObject[unit as keyof {}] ).join(separator);

}