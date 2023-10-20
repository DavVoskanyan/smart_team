import {JSX} from 'react';
import Image from "next/image";
import Link from "next/link";
import {TeamMembersType} from "@/app/utils/types/propsTypes";

import styles from './TeamMembers.module.css';
import DashboardMemberComponent from "@/app/components/DashboardMemberComponent/DashboardMemberComponent";

export default function TeamMembers({membersCount, membersList, seeAllLink}: TeamMembersType): JSX.Element {
    return (
        <div className={styles.teamMember}>
            <h3 className={styles.title}>Team Members</h3>
            <div className={styles.membersCard}>
                <div className={styles.inCardHeader}>
                    <h2><span className={styles.membersCount}>{membersCount}</span> Team Members</h2>
                    <Link className={styles.seeAllLink} href={seeAllLink}>See All</Link>
                </div>
                <div className={styles.membersContainer}>
                    {
                        membersList
                            .map((member: any, index: number): JSX.Element => {
                                return (
                                    <DashboardMemberComponent key={index}
                                                              firstName={member.firstName}
                                                              lastName={member.lastName}
                                                              profession={member.profession}
                                                              avatarColor={member.avatarColor}
                                                              avatarImageFile={member.avatarImageFile}/>
                                )
                            })
                    }

                </div>
            </div>
        </div>
    );
}
