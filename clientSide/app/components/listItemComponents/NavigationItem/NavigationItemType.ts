import {Dispatch, SetStateAction} from 'react';

type NavigationItemType = {
    itemName: string,
    iconFileName: string,
    changeActiveElement: Dispatch<SetStateAction<number>>,
    index: number,
    isActive: boolean,
}

export default NavigationItemType;