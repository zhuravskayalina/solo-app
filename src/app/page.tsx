import styles from './page.module.scss';
import Image from 'next/image';
import playIcon from '@/assets/images/icons/play.svg';
import BaseButton from '@/components/Button/Button';
import trialImage from '@/assets/images/main.png';
import Demo from '@/components/DemoBlock/Demo';
import { partnersList } from '@/utils/partnersList';
import { setupSteps } from '@/utils/setupSteps';
import boxImage from '@/assets/images/box.png';
import Features from '@/components/Features/Features';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.trial}>
        <div className={styles.trial__info}>
          <p className={styles.trial__paragraph}>RISK-FREE 30 DAY TRIAL</p>
          <h2 className={styles.trial__heading}>The best way to organize your work.</h2>
          <p className={styles.trial__description}>
            Organize your tasks, lists and reminders in one app.
          </p>
          <div className={styles.trial__buttons}>
            <BaseButton isColored link="#" color="white">
              Try it free
            </BaseButton>
            <BaseButton isColored={false} link="#" color="gray">
              <Image src={playIcon} alt="play" />
              <span> Watch how it works</span>
            </BaseButton>
          </div>
        </div>
        <div className={styles.trial__image}>
          <Image src={trialImage} alt="trial" priority={true} className={styles.trial__image_img} />
        </div>
      </section>
      <section className={styles.partners}>
        <p className={styles.partners__title}>Thousands of teams worldwide are using Solo</p>
        <ul className={styles.partners__list}>
          {partnersList.map((partner) => (
            <li key={partner.alt}>
              <Image src={partner.img} alt={partner.alt} />
            </li>
          ))}
        </ul>
      </section>
      <Demo />
      <section className={styles.setup}>
        <h4 className={styles.setup__title}>Instant setup</h4>
        <h2 className={styles.setup__heading}>Fast, simple & effortless.</h2>
        <ul className={styles.setupList}>
          {setupSteps.map((item) => (
            <li key={item.step} className={styles.setupList__item}>
              <Image src={item.icon} alt={item.title} />
              <p className={styles.setupList__step}>Step {item.step}</p>
              <p className={styles.setupList__title}>{item.title}</p>
            </li>
          ))}
        </ul>
      </section>
      <Image src={boxImage} alt="box" className={styles.boxImage} />
      <Features />
    </main>
  );
}
