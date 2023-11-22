import {JSX} from 'react';
import styles from './LayoutHeader.module.css';
import HeaderUserCard from "@/app/components/decorativeComponents/HeaderUserCard/HeaderUserCard";

export default function LayoutHeader(): JSX.Element {
    return (
        <header className={styles.header}>
            <h1 className={styles.inHeaderTitle}>SmartTeam</h1>
            <HeaderUserCard />
        </header>
    );
}