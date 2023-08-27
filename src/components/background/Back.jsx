import Image from 'next/image';
import styles from './styles.module.css';
import mountains from '../../../public/images/22.png';

const BackgroundPage = () => (
  <div>
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </div>
  </div>
)

export default BackgroundPage;