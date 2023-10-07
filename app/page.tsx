import styles from './page.module.css'
import LayoutHeader from "@/app/components/LayoutHeader/LayoutHeader";

export default function Home() {
  return (
    <main className={styles.main}>
      <LayoutHeader />
    </main>
  )
}
