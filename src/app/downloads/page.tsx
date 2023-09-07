import styles from './page.module.scss';
import Link from 'next/link';
import BaseButton from '@/components/Button/Button';

import BlocksImg from '@/assets/images/blocks.png';
import Image from 'next/image';
import iosIcon from '@/assets/images/icons/devices/ios.svg';
import macIcon from '@/assets/images/icons/devices/macos.svg';
import androidIcon from '@/assets/images/icons/devices/android.svg';
import webIcon from '@/assets/images/icons/devices/desktop.svg';
import windowsIcon from '@/assets/images/icons/devices/windows.svg';
import DevicesLink from '@/components/DevicesLink/DevicesLink';
import Testimonials from '@/components/Testimonials/Testimonials';

const devices = [
  {
    icon: iosIcon,
    title: 'Solo for iOS',
    description: 'Mobile app',
  },
  {
    icon: macIcon,
    title: 'Solo for Mac',
    description: 'Desktop App',
  },
  {
    icon: androidIcon,
    title: 'Solo for Android',
    description: 'Mobile app',
  },
  {
    icon: webIcon,
    title: 'Solo on Web',
    description: 'Desktop App',
  },
  {
    icon: windowsIcon,
    title: 'Solo for Windows',
    description: 'Desktop App',
  },
];

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.heading}>
        <p className={styles.heading__title}>Ready to use solo?</p>
        <p className={styles.heading__mainTitle}>Download Solo</p>
        <p className={styles.heading__description}>
          By downloading Solo, you accept <Link href="#">Terms Of Use and Privacy</Link> &{' '}
          <Link href="#">Cookies</Link>
        </p>
        <div className={styles.heading__button}>
          <BaseButton isColored={true} link="#" color="white">
            Get Solo for Mac OS
          </BaseButton>
        </div>
      </section>
      <Image src={BlocksImg} alt="blocks" className={styles.blocksImage} />
      <section className={styles.devices}>
        <h3 className={styles.devices__heading}>Looking for another device?</h3>
        <ul className={styles.devices__list}>
          {devices.map((device) => (
            <DevicesLink
              icon={device.icon}
              title={device.title}
              description={device.description}
              key={device.title}
            />
          ))}
        </ul>
      </section>
      <Testimonials />
    </main>
  );
}
