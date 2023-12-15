import React from 'react';
import TeamMembersType from './TeamMembersType';
import Link from 'next/link';

import styles from './TeamMembers.module.css';
import DashboardMemberComponent from '@/app/components/decorativeComponents/DashboardMemberComponent/DashboardMemberComponent';
import DashboardMemberComponentType
    from '@/app/components/decorativeComponents/DashboardMemberComponent/DashboardMemberComponentType';

const TeamMembers: React.FC<TeamMembersType> = (
    {membersCount, membersList, seeAllLink}: TeamMembersType
): React.ReactElement => {
    return (
        <div className={styles.teamMember}>
            <h3 className={styles.title}>Team Members</h3>
            <div className={styles.membersCard}>
                <div className={styles.inCardHeader}>
                    <h2 className={styles.cardTitle}>
                        <span className={styles.membersCount}>{membersCount}</span> Team Members
                    </h2>
                    <Link className={styles.seeAllLink} href={seeAllLink}>See All</Link>
                </div>
                <div className={styles.membersContainer}>
                    {
                        membersList
                            .map((member: DashboardMemberComponentType, index: number): JSX.Element => {
                                return (
                                    <DashboardMemberComponent key={index}
                                                              firstName={member.firstName}
                                                              lastName={member.lastName}
                                                              profession={member.profession}
                                                              avatarColor={member.avatarColor}
                                                              avatarImageFile={member.avatarImageFile}
                                                              memberLink={member.memberLink}
                                    />
                                );
                            })
                    }

                </div>
            </div>
        </div>
    );
};

export default TeamMembers;