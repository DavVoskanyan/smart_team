export const concatenateClasses = (...classes: Array<string>): string => {
    return classes.filter((styleClass: string) => styleClass).join(' ');
};