import InfoCardListItemType from '@/app/components/listItemComponents/InfoCardListItem/InfoCardListItemType';
import ExperienceCardListItemType from '@/app/components/listItemComponents/ExperienceCardListItem/ExperienceCardListItemType';
import CharacteristicsCircleType
    from '@/app/components/listItemComponents/CharacteristicsCircle/CharacteristicsCircleType';

type MemberInfoPageComponentType = {
    userDescription: string,
    infoArray: Array<InfoCardListItemType>,
    experienceArray: Array<ExperienceCardListItemType>,
    pointObjectArray1: Array<CharacteristicsCircleType>,
    pointObjectArray2: Array<CharacteristicsCircleType>,
}

export default MemberInfoPageComponentType;