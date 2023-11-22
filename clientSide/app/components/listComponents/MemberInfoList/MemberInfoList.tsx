import {JSX} from 'react';
import styles from './MemberInfoList.module.css';

import InfoCardListItem from "@/app/components/listItemComponents/InfoCardListItem/InfoCardListItem";

export default function MemberInfoList({infoArray}: any): JSX.Element {

    return (
        <div className={styles.memberInfoList}>
            {
                infoArray.map((infoObject: any, index: number) => {
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
}