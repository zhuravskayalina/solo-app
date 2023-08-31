import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.scss';

import LogoImg from '@/assets/images/logo.svg';
import googlePlay from '@/assets/images/googlePlay.png';
import appStore from '@/assets/images/appStore.png';
import fbIcon from '@/assets/images/icons/fb.svg';
import twIcon from '@/assets/images/icons/tw.svg';
import igIcon from '@/assets/images/icons/ig.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={LogoImg} alt="logo" className={styles.logo} />
      <p className={styles.title}>
        Join millions of people who organize work and life with Solo App.
      </p>
      <div className={styles.downloadLinks}>
        <Link href="https://googleplay.com" className={styles.downloadLinks__link}>
          <Image src={googlePlay} alt="Download at Google Play" />
        </Link>
        <Link href="https://appstore.com" className={styles.downloadLinks__link}>
          <Image src={appStore} alt="Download at App Store" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li>
            <Link href="#" className={styles.nav__link}>
              Download
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.nav__link}>
              Pricing
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.nav__link}>
              Features
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.nav__link}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" className={styles.nav__link}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.copyright}>
        <p>&copy; Solo Inc. Designed by UI8 Team</p>
        <ul className={styles.socials}>
          <li>
            <Link href="#">
              <Image src={fbIcon} alt="Facebook link" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={twIcon} alt="Twitter link" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={igIcon} alt="Instagram link" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
