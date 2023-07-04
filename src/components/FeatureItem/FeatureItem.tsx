import Image from 'next/image';
import styles from './FeatureItem.module.scss';
import BaseButton from '@/components/Button/Button';
import { FeatureBlock } from '@/utils/featuresList';
import clsx from 'clsx';

interface FeatureItemProps {
  item: FeatureBlock;
}

export default function FeatureItem({
  item: { id, icon, buttonTitle, title, image, description, buttonLink },
}: FeatureItemProps) {
  return (
    <div className={clsx(styles.feature)}>
      <Image src={image} alt={title} priority={true} className={styles.mainImage} />
      <div className={styles.info}>
        <Image src={icon} alt="icon" className={styles.icon} />
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.button}>
          <BaseButton isColored={false} link={buttonLink} color="gray">
            {buttonTitle}
          </BaseButton>
        </div>
      </div>
      <div className={styles.circles}>
        <span className={clsx(styles.circles__item, id === 1 && styles.circles__item_primary)} />
        <span className={clsx(styles.circles__item, id === 2 && styles.circles__item_primary)} />
        <span className={clsx(styles.circles__item, id === 3 && styles.circles__item_primary)} />
      </div>
    </div>
  );
}
