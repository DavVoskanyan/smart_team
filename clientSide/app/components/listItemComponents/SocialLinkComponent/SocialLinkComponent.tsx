import React from 'react';
import SocialLinkComponentType from './SocialLinkComponentType';

import styles from './SocialLinkComponent.module.css';
import Link from 'next/link';
import Image from 'next/image';

const SocialLinkComponent: React.FC<SocialLinkComponentType> = (
    {link, iconFileName, activeIconFileName}: SocialLinkComponentType
): React.ReactElement => {
    return (
        <Link className={styles.socialLink} href={link}>
            <Image className={styles.socialIconActive}
                   src={`/images/logos/${activeIconFileName}`}
                   alt={'socialIcon'}
                   width={20}
                   height={18}
            />
            <Image className={styles.socialIcon}
                   src={`/images/logos/${iconFileName}`}
                   alt={'socialIcon'}
                   width={20}
                   height={18}
            />
        </Link>
    );
};

export default SocialLinkComponent;