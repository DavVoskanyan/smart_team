import React from 'react';
import MemberInfoListType from './MemberInfoListType';

import styles from '@/app/components/listComponents/MemberInfoList/MemberInfoList.module.css';
import InfoCardListItem from '@/app/components/listItemComponents/InfoCardListItem/InfoCardListItem';
import InfoCardListItemType from '@/app/components/listItemComponents/InfoCardListItem/InfoCardListItemType';

const MemberInfoList: React.FC<MemberInfoListType> = (
    {infoArray}: MemberInfoListType
): React.ReactElement => {
    return (
        <div className={styles.memberInfoList}>
            {
                infoArray.map((infoObject: InfoCardListItemType, index: number) => {
                    return (
                        <InfoCardListItem
                            key={index}
                            iconName={infoObject['iconName']}
                            info={infoObject['info']}
                        />
                    );
                })
            }
        </div>
    );
};

export default MemberInfoList;