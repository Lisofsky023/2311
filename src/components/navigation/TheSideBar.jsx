import styles from "./sidebar.module.css";
import Link from "next/link";

export default function SideBar() {
  return(
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.link} href="/computers">c0mputers</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} href="/art">@rt</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} href="">t0ys</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} href="">cl0uthes</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} href="">???????</Link>
      </li>
      <li className={styles.item}>
        <Link className={styles.link} href="">tr@sh</Link>
      </li>
    </ul>
  )
}