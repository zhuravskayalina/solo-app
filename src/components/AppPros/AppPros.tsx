import Image from 'next/image';

import styles from './AppPros.module.scss';

import lineIcon from '@/assets/images/icons/line.svg';
import { appPros } from '@/utils/AppProsData';

export default function AppPros() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {appPros.map((item) => (
          <li key={item.id} className={styles.item}>
            <Image src={item.icon} alt="icon" />
            <h5 dangerouslySetInnerHTML={item.title} className={styles.item__title} />
            <Image src={lineIcon} alt="line" className={styles.item__line} />
            <p className={styles.item__description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
