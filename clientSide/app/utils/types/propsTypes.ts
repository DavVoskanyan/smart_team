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
    memberLink: string,
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
    itemBackgroundColor: string,
    message: string,
}

export type DateAndTimeType = {
    withTime: boolean,
    date: Date,
}

export type UserAvatarType = {
    firstName: string,
    lastName: string,
    avatarImageFileName: string | null,
    avatarColor: string,
}

export type NotificationSidebarType = {
    itemsList: Array<listItemObjectType>,
}

export type AboutMemberInfoCardType = {
    firstName: string,
    lastName: string,
    avatarImageFileName: string,
    avatarColor: string,
    profession: string,
    about: string,
    joinDate: Date,
}

export type InfoCardListItem = {
    iconName: string,
    info: string,
}