import styles from './page.module.scss';
import Image from 'next/image';
import playIcon from '@/assets/images/icons/play.svg';
import BaseButton from '@/components/Button/Button';
import goldlinesIcon from '@/assets/images/partners/goldlines.svg';
import rotashowIcon from '@/assets/images/partners/rotashow.svg';
import travelersIcon from '@/assets/images/partners/travelers.svg';
import velocityIcon from '@/assets/images/partners/velocity.svg';
import wavesIcon from '@/assets/images/partners/waves.svg';
import trialImage from '@/assets/images/main.png';
import phoneImage from '@/assets/images/phone.png';
import LandingStatistics from '@/components/LandingStatistics/LandingStatistics';

export default function Home() {
  const partners = [
    {
      img: goldlinesIcon,
      alt: 'goldlines',
    },
    {
      img: rotashowIcon,
      alt: 'rotashow',
    },
    {
      img: travelersIcon,
      alt: 'travelers',
    },
    {
      img: velocityIcon,
      alt: 'velocity',
    },
    {
      img: wavesIcon,
      alt: 'waves',
    },
  ];

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
            <BaseButton isColored link="#" color="gray">
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
          {partners.map((partner) => (
            <li key={partner.alt}>
              <Image src={partner.img} alt={partner.alt} />
            </li>
          ))}
        </ul>
      </section>
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
    </main>
  );
}
