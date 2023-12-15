import React from 'react';
import CharacteristicsComponentType from './CharacteristicsComponentType';
import styles from './CharacteristicsComponent.module.css';
import CharacteristicsCircle from '@/app/components/listItemComponents/CharacteristicsCircle/CharacteristicsCircle';
import CharacteristicsCircleType from '@/app/components/listItemComponents/CharacteristicsCircle/CharacteristicsCircleType';
const CharacteristicsComponent: React.FC<CharacteristicsComponentType> = (
    {mainCircleTitle, pointObjectArray}: CharacteristicsComponentType
): React.ReactElement => {
    return(
        <div className={styles.characteristicsComponent}>
            <div className={styles.titleCircle}>
                {mainCircleTitle}
            </div>
            {
                pointObjectArray.map((pointObject: CharacteristicsCircleType, index: number) => {
                    return (
                        <CharacteristicsCircle
                            key={index}
                            title={pointObject.title}
                            percent={pointObject.percent}
                            color={pointObject.color}
                        />
                    );
                })
            }
        </div>
    );
};

export default CharacteristicsComponent;