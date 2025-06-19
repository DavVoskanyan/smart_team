import React from 'react';
import {concatenateClasses} from '@/tools/uiTools';

import styles from './Slide.module.scss';
import Image from 'next/image';

type TypeSlideProps = {
    imageLink: string,
}

const Slide: React.FC<TypeSlideProps> = (props: TypeSlideProps) => {
    return (
        <div className={styles.slide}>
            <Image
                className={styles.slideImage}
                src={props.imageLink}
                width={1920}
                height={1080}
                alt={''}
            />
        </div>
    );
};

export default Slide;