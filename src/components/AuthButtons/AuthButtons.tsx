import styles from './AuthButtons.module.scss';
import Link from 'next/link';
import clsx from 'clsx';

export default function AuthButtons() {
  return (
    <div className={styles.auth}>
      <Link href="#" className={styles.auth__button}>
        Login
      </Link>
      <Link href="#" className={clsx(styles.auth__button, styles.auth__button_colored)}>
        Sign up
      </Link>
    </div>
  );
}
