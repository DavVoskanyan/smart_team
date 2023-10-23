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