import {JSX} from "react";
import styles from "./UserAvatar.module.css";
import Image from "next/image";
import {classNameGenerator} from "@/app/utils/functions";


export default function UserAvatar({firstName, lastName, avatarImageFileName, avatarColor}: any): JSX.Element {
    return (
        <div className={styles.avatarContainer} style={{backgroundColor: avatarColor}}>
            <span className={styles.userInitials}>{firstName[0]}{lastName[0]}</span>

            <Image className={classNameGenerator(styles.userImage, avatarImageFileName ? styles.hasImage : '')}
                   src={`/images/${avatarImageFileName}`}
                   alt={'user image'}
                   width={40}
                   height={40}
            />
        </div>
    );
}