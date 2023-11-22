import {JSX} from 'react';
import {classNameGenerator} from "@/app/utils/functions";
import styles from './CharacteristicsCircle.module.css';

export default function CharacteristicsCircle({index, title, percent, color}: any): JSX.Element {
    return (
        <div style={{
                backgroundColor: color,
             }}
             className={classNameGenerator(
                    styles.characteristicsCircle,
                    styles[`size${percent}`],
                    styles[`point${index}`],
                    !color ? styles.uncolored : ''
             )}
             title={title}
        >
            {title}
        </div>
    );
}