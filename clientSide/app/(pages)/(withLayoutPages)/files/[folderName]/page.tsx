import styles from "./page.module.css"
import {classNameGenerator} from "@/app/utils/functions";


export default function Home() {
    return (
        <main className={classNameGenerator('pageContentContainer')}>
            Hello Javascript
        </main>
    )
}
