import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './pc.module.css'

const DatabaseComponent = () => {
  const [data, setData] = useState([]);
  const basePath = "https://remont-express.com";

  module.exports = {
    images: {
      domains: ['remont-express.com'],
    },
  }

  useEffect(() => {
    fetch('https://remont-express.com/get_data.php')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Ошибка получения данных:', error);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title__page}>Computers</h1>
      <ul className={styles.list}>
        {data.map((item) => (
          <li className={styles.item} key={item.id}>
            <Image className={styles.img} src={`${basePath}${item.img}`} alt="" width={360} height={260} />
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.price}>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DatabaseComponent;
