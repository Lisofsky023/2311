import Link from "next/link";
import styles from "./header.module.css";
import Image from 'next/image';
import img from '../../../public/images/1.png';

export default function TheHeader() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link href="./">
            <Image
              className={styles.logo__img}
              src={img}
              alt="Picture of the author"
              />
          </Link>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link className={styles.link} href="/login">Login</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/registration">Registration</Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} href="/cart">Cart</Link>
            </li>
          </ul>
          <p className={styles.code}>01001001 01110100 00100111 01110011 00100000 01101111 
          01101110 01101100 01111001 00100000 01100001 01100110 01110100 01100101 01110010 
          00100000 01111001 01101111 01110101 00100111 01110110 01100101 00100000 01101100 
          01101111 01110011 01110100 00100000 01100101 01110110 01100101 01110010 01111001 
          01110100 01101000 01101001 01101110 01100111 00100000 01110100 01101000 01100001 
          01110100 00100000 01111001 01101111 01110101 00100111 01110010 01100101 00100000 
          01100110 01110010 01100101 01100101 00100000 01110100 01101111 00100000 01100100 
          01101111 00100000 01100001 01101110 01111001 01110100 01101000 01101001 01101110 
          01100111</p>
        </div>
      </div>
    </header>
  );
};