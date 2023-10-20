import {listItemObjectType, dashboardMemberObjectType} from "@/app/utils/types/localUsedTypes";

export type NewMemberType = {
    firstName: string,
    lastName: string,
    avatarImageFileName: string|null,
    avatarColor: string,
    profession: string,
    joinDate: Date,
}

export type TeamMembersType = {
    membersCount: number,
    membersList: Array<dashboardMemberObjectType>,
    seeAllLink: string,
}

export type DashboardMemberComponentType = {
    firstName: string,
    lastName: string,
    profession: string,
    avatarColor: string,
    //@todo : change type any to the right type for imported SVG file
    avatarImageFile: any,
}

export type NewFilesType = {
    photosQuantity: number,
    documentsQuantity: number,
}

export type HappyBirthdayType = {
    memberName: string,
}

export type ItemsListType = {
    itemsArray: Array<listItemObjectType>,
    //@todo : change type any to the right type for imported SVG file
    iconFileName: any,
    title: string,
    itemBackgroundColor: string,
    seeAllLink: string,
    withTime: boolean,
}

export type ListItemType = {
    withTime: boolean,
    date: Date,
    message: string,
}

export type DateAndTimeType = {
    withTime: boolean,
    date: Date,
}
