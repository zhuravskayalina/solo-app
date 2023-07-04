import styles from './Features.module.scss';
import { featuresList } from '@/utils/featuresList';
import FeatureItem from '@/components/FeatureItem/FeatureItem';

export default function Features() {
  return (
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
  );
}
