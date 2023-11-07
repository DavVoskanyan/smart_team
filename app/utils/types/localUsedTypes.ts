export type listItemObjectType = {
    date: Date,
    message: string,
}

export type dashboardMemberObjectType = {
    firstName: string,
    lastName: string,
    profession: string,
    //@todo : change type any to the right type for imported SVG file
    avatarImageFileName: any,
    avatarColor: string,
    memberLink: string,
}

export type MemberObjectType = {
    firstName: string,
    lastName: string,
    profession: string,
    avatarInfo: AvatarInfoObjectType,
    memberLink: string,
    isOnline: boolean,
    socialsArray: Array<socialObjectType>,
}
export type AvatarInfoObjectType = {
    avatarImageFileName: any,
    avatarColor: string,
}
export type socialObjectType = {
    //@todo : change type any to the right type for imported SVG file
    linkIcon: any,
    link: string,
}