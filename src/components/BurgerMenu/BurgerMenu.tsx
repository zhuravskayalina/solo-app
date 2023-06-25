import Navigation from '@/components/Navigation/Navigation';
import Image from 'next/image';
import trialImage from '@/assets/images/main.png';
import styles from './BurgerMenu.module.scss';
import AuthButtons from '@/components/AuthButtons/AuthButtons';

export default function BurgerMenu() {
  return (
    <section className={styles.burger}>
      <div className={styles.menu}>
        <Navigation isTablet />
        <Image src={trialImage} alt="trial" className={styles.image} />
      </div>
      <div className={styles.auth}>
        <AuthButtons />
      </div>
    </section>
  );
}
