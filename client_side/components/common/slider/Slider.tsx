import React, {ReactNode} from 'react';
import {concatenateClasses} from '@/tools/uiTools';

import styles from './Slider.module.scss';
import Slide from '@/components/common/slider/slide/Slide';


const Slider: React.FC = (props) => {
    let imageLinks: Array<string> = ['/images/slide3.jpg', '/images/slide2.jpg', '/images/slide1.jpg'];
    return (
        <div className={styles.slider}>
            {
                imageLinks.map((imageSrc: string, index: number): ReactNode => {
                    return <Slide key={index} imageLink={imageSrc}/>
                })
            }
        </div>
    );
}

export default Slider;