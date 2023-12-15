import MemberComponentType from '@/app/components/listItemComponents/MemberComponent/MemberComponentType';

type MembersPageComponentType = {
    isAdmin: boolean,
    isList: boolean,
    membersArray: Array<MemberComponentType>,
}

export default MembersPageComponentType;