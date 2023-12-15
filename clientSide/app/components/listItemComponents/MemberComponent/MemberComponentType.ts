import UserAvatarType from '@/app/components/decorativeComponents/UserAvatar/UserAvatarType';
import SocialLinkComponentType from '@/app/components/listItemComponents/SocialLinkComponent/SocialLinkComponentType';

type MemberComponentType = {
    firstName: string,
    lastName: string,
    profession: string,
    avatarInfo: UserAvatarType,
    memberLink: string,
    isOnline: boolean,
    socialsArray: Array<SocialLinkComponentType>,
    isListView: boolean,
}

export default MemberComponentType;