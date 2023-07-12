import Image from 'next/image';
import clsx from 'clsx';
import styles from './FeatureBlock.module.scss';
import BaseButton from '@/components/Button/Button';
import { FeatureBlockProps } from '@/components/FeatureBlock/types';

export default function FeatureBlock({
  imageSide,
  img,
  description,
  title,
  buttonText,
}: FeatureBlockProps) {
  return (
    <section className={clsx(styles.section, imageSide === 'right' && styles.section_reverted)}>
      <div className={styles.info}>
        <h4 className={styles.info__title}>Amazing feature</h4>
        <h2 className={styles.info__heading} dangerouslySetInnerHTML={title} />
        <p className={styles.info__description}>{description}</p>
        <div className={styles.info__button}>
          <BaseButton isColored={false} link="#" color="gray">
            {buttonText}
          </BaseButton>
        </div>
      </div>
      <Image src={img} alt="feature" className={styles.image__img} />
    </section>
  );
}
