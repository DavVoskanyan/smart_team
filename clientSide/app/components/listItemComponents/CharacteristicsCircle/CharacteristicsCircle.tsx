import React from 'react';
import CharacteristicsCircleType from './CharacteristicsCircleType';
import {classNameGenerator} from '@/app/utils/functions';

import styles from './CharacteristicsCircle.module.css';

const CharacteristicsCircle: React.FC<CharacteristicsCircleType> = (
    {title, percent, color}: CharacteristicsCircleType
): React.ReactElement => {
    return (
        <div style={{ backgroundColor: color, }}
             className={classNameGenerator(
                    styles.characteristicsCircle,
                    styles[`size${percent}`],
                    !color ? styles.uncolored : ''
             )}
             title={title}
        >
            {title}
        </div>
    );
};

export default CharacteristicsCircle;