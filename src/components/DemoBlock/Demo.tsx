import styles from './Demo.module.scss';
import Image from 'next/image';
import phoneImage from '@/assets/images/phone.png';
import BaseButton from '@/components/Button/Button';
import LandingStatistics from '@/components/LandingStatistics/LandingStatistics';

export default function Demo() {
  return (
    <section className={styles.demo}>
      <div className={styles.demo__schedule}>
        <div className={styles.demo__imgBox}>
          <Image src={phoneImage} alt="phone and ladders" className={styles.demo__image} />
        </div>
        <div className={styles.demo__info}>
          <h3 className={styles.demo__heading}>Keeping it all together</h3>
          <p className={styles.demo__title}>
            Just invite your team, Solo does all the heavy-lifting.
          </p>
          <BaseButton isColored={false} link="#" color="white">
            Schedule a demo
          </BaseButton>
        </div>
      </div>
      <LandingStatistics />
    </section>
  );
}
