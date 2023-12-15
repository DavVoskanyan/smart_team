import DashboardMemberComponentType
    from '@/app/components/decorativeComponents/DashboardMemberComponent/DashboardMemberComponentType';

type TeamMembersType = {
    membersCount: number,
    membersList: Array<DashboardMemberComponentType>,
    seeAllLink: string,
}

export default TeamMembersType;