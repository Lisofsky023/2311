'use client'
import SideBar from "@/components/navigation/TheSideBar";
import DatabaseComponent from "@/components/dataPc/DatabaseComponent";
import styles from "./computers.module.css";
import Head from 'next/head';


// export const metadata = {
//   title: "Computers",
//   description: "pc"
// };


export default function Computers() {

  return (
    <>
      <Head>
        <title>Computers</title>
        <meta name="description" content="Описание страницы" />
        {/* Другие мета-теги */}
      </Head>
      {/* <SideBar /> */}
      <DatabaseComponent />
    </>
  );
}



