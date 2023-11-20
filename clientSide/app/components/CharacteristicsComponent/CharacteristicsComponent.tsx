import {JSX} from 'react';
import styles from './CharacteristicsComponent.module.css';
import CharacteristicsCircle from "@/app/components/CharacteristicsCircle/CharacteristicsCircle";

export default function CharacteristicsComponent({mainCircleTitle, pointObjectArray}: any): JSX.Element {
    return(
        <div className={styles.characteristicsComponent}>
            <div className={styles.titleCircle}>
                {mainCircleTitle}
            </div>
            {
                pointObjectArray.map((pointObject: any, index: number) => {
                    return (
                        <CharacteristicsCircle
                            key={index}
                            index={index + 1}
                            title={pointObject.title}
                            percent={pointObject.percent}
                            color={pointObject.color}
                        />
                    );
                })
            }
        </div>
    );
}