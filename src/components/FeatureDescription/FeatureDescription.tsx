import styles from './FeatureDescription.module.scss';
import BaseButton from '@/components/Button/Button';

interface FeatureDescriptionProps {
  heading: string;
  title: { __html: string | TrustedHTML };
  description: { __html: string | TrustedHTML };
  buttonText: string;
}

export default function FeatureDescription({
  description,
  title,
  buttonText,
  heading,
}: FeatureDescriptionProps) {
  return (
    <div className={styles.info}>
      <h4 className={styles.info__title}>{heading}</h4>
      <h2 className={styles.info__heading} dangerouslySetInnerHTML={title} />
      <p className={styles.info__description} dangerouslySetInnerHTML={description} />
      <div className={styles.info__button}>
        <BaseButton isColored={false} link="#" color="gray">
          {buttonText}
        </BaseButton>
      </div>
    </div>
  );
}
