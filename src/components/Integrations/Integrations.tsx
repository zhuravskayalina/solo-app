import styles from './Integrations.module.scss';

import notionIcon from '@/assets/images/icons/notion.svg';
import figmaIcon from '@/assets/images/icons/figma-logo.svg';
import googleIcon from '@/assets/images/icons/google.svg';
import dribbleIcon from '@/assets/images/icons/dribbble.svg';
import diamondIcon from '@/assets/images/icons/diamond.svg';
import uiIcon from '@/assets/images/icons/ui.svg';
import atomIcon from '@/assets/images/icons/atom.svg';
import Image from 'next/image';
import clsx from 'clsx';

const icons = [
  {
    icon: notionIcon,
    description: 'Notion',
    className: styles.icons__notion,
  },
  {
    icon: figmaIcon,
    description: 'Figma',
    className: styles.icons__figma,
  },
  {
    icon: googleIcon,
    description: 'Google',
    className: styles.icons__google,
  },
  {
    icon: dribbleIcon,
    description: 'Dribble',
    className: styles.icons__dribble,
  },
  {
    icon: diamondIcon,
    description: 'diamond',
    className: styles.icons__diamond,
  },
  {
    icon: uiIcon,
    description: 'UI',
    className: styles.icons__ui,
  },
  {
    icon: atomIcon,
    description: 'Atom',
    className: styles.icons__atom,
  },
];

export default function Integrations() {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <h4 className={styles.info__title}>Amazing features</h4>
        <h2 className={styles.info__heading}>
          Powerful <br /> integrations
        </h2>
        <p className={styles.info__description}>
          We are a growing family of 382,081 designers and <br /> makers from around the world
        </p>
      </div>
      <ul className={styles.icons}>
        {icons.map((icon) => (
          <li key={icon.description} className={clsx(styles.icons__item, icon.className)}>
            <Image src={icon.icon} alt={icon.description} />
          </li>
        ))}
      </ul>
    </section>
  );
}
