import styles from './Features.module.scss';
import { featuresList } from '@/utils/featuresList';
import FeatureItem from '@/components/FeatureItem/FeatureItem';
import boxImage from '@/assets/images/box.png';
import Image from 'next/image';

export default function Features() {
  return (
    <section className={styles.wrapper}>
      <Image src={boxImage} alt="box" className={styles.boxImage} />
      <section className={styles.features}>
        <h4 className={styles.features__title}>Amazing features</h4>
        <h2 className={styles.features__heading}>
          See what you can <br className={styles.br} /> do in one app
        </h2>
        <section className={styles.features__list}>
          {featuresList.map((feature) => (
            <FeatureItem item={feature} key={feature.id} />
          ))}
        </section>
      </section>
    </section>
  );
}
