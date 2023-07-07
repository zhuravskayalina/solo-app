import styles from './LearnMore.module.scss';
import BaseButton from '@/components/Button/Button';
import Image from 'next/image';
import watchesImg from '@/assets/images/watches.png';

export default function LearnMore() {
  return (
    <article className={styles.main}>
      <section className={styles.info}>
        <h4 className={styles.info__title}>Easily find what you’re looking for</h4>
        <h2 className={styles.info__heading}>History you can see and search</h2>
        <p className={styles.info__description}>
          We&apos;re a growing family of 382,081 designers and makers from around the world
        </p>
        <div className={styles.info__button}>
          <BaseButton isColored={false} link="#" color="gray">
            Learn more
          </BaseButton>
        </div>
      </section>
      <Image src={watchesImg} alt="ladders and watches" className={styles.image} />
    </article>
  );
}
