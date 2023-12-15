import ListItemType from '@/app/components/listItemComponents/ListItem/ListItemType';

type ItemsListType = {
    itemsArray: Array<ListItemType>,
    iconFileName: string,
    title: string,
    itemBackgroundColor: string,
    withTime: boolean,
    seeAllLink: string,
}

export default ItemsListType;