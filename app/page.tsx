import styles from './page.module.css'
import LayoutHeader from "@/app/components/LayoutHeader/LayoutHeader";
import NavigationItem from "@/app/components/NavigationItem/NavigationItem";
import NavigationMenu from "@/app/components/NavigationMenu/NavigationMenu";

export default function Home() {
  return (
    <main className={styles.main}>
      <LayoutHeader />
      <NavigationMenu />
    </main>
  )
}
