import Image from 'next/image';
import styles from './page.module.scss';

import { partnersList } from '@/utils/partnersList';
import { setupSteps } from '@/utils/setupSteps';

import playIcon from '@/assets/images/icons/play.svg';
import trialImage from '@/assets/images/main.png';
import phoneImg from '@/assets/images/phone.png';
import cloudBlocks from '@/assets/images/blocks-with-cloud.png';
import bigCircleImg from '@/assets/images/big-circle.png';
import blocksImg from '@/assets/images/blocks.png';

import Features from '@/components/Features/Features';
import BaseButton from '@/components/Button/Button';
import Demo from '@/components/DemoBlock/Demo';
import LearnMore from '@/components/LearnMore/LearnMore';
import AppPros from '@/components/AppPros/AppPros';
import Integrations from '@/components/Integrations/Integrations';
import FeatureBlock from '@/components/FeatureBlock/FeatureBlock';
import FeatureDescription from '@/components/FeatureDescription/FeatureDescription';
import { productivityLandingItems } from '@/utils/productivityLandingItems';
import Testimonials from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
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
            <Image
              src={trialImage}
              alt="trial"
              priority={true}
              className={styles.trial__image_img}
            />
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
      <Features />
      <LearnMore />
      <AppPros />
      <Integrations />
      <FeatureBlock
        imageSide="left"
        img={phoneImg}
        title={{ __html: 'Your busy life <br> deserves this' }}
        description={{
          __html:
            'We are a growing family of 382,081 designers <br> and makers from around the world',
        }}
        buttonText="Launch Solo Desktop App"
      />
      <FeatureBlock
        imageSide="right"
        img={cloudBlocks}
        title={{ __html: 'Never forget <br> anything, <br> ever again' }}
        description={{
          __html:
            'We are a growing family of 382,081 designers <br> and makers from around the world',
        }}
        buttonText="Find out more"
      />
      <section className={styles.productivity}>
        <Image src={bigCircleImg} alt="big circle" className={styles.productivity__image} />
        <div className={styles.productivity__featureDescription}>
          <FeatureDescription
            title={{ __html: 'Increase <br> Productivity' }}
            description={{
              __html:
                'We are a growing family of 382,081 designers <br> and makers from around the world',
            }}
            buttonText="Sign up now"
            heading="Deep Focus & Multitasking"
          />
        </div>
        <ul className={styles.productivityList}>
          {productivityLandingItems.map((item) => (
            <li className={styles.productivityList__item} key={item.id}>
              <Image src={item.icon} alt="icon" className={styles.productivityList__icon} />
              <p className={styles.productivityList__title}>{item.title}</p>
              <p className={styles.productivityList__description}>
                We are a growing family of 382,081 designers and makers from around the world
              </p>
            </li>
          ))}
        </ul>
      </section>
      <Testimonials />
      <section className={styles.getStarted}>
        <Image
          src={blocksImg}
          alt="blocks with watches and cursor"
          className={styles.getStarted__img}
        />
        <div className={styles.getStarted__info}>
          <h3 className={styles.getStarted__heading}>Get started with Solo today</h3>
          <p className={styles.getStarted__title}>
            Just invite your team, Solo does all the heavy-lifting.
          </p>
          <div className={styles.getStarted__button}>
            <BaseButton isColored={true} color="white" link="#">
              Try it free
            </BaseButton>
          </div>
        </div>
      </section>
    </main>
  );
}
