import Image from 'next/image';
import clsx from 'clsx';
import styles from './FeatureBlock.module.scss';
import { FeatureBlockProps } from '@/components/FeatureBlock/types';
import FeatureDescription from '@/components/FeatureDescription/FeatureDescription';

export default function FeatureBlock({
  imageSide,
  img,
  description,
  title,
  buttonText,
}: FeatureBlockProps) {
  return (
    <section className={clsx(styles.section, imageSide === 'right' && styles.section_reverted)}>
      <FeatureDescription
        heading="Amazing feature"
        title={title}
        description={description}
        buttonText={buttonText}
      />
      <Image src={img} alt="feature" className={styles.image__img} />
    </section>
  );
}
