import styles from './LandingStatistics.module.scss';
import clsx from 'clsx';

export default function LandingStatistics() {
  return (
    <div className={styles.statistics}>
      <ul className={styles.statistics__list}>
        {statisticItems.map((item) => (
          <Item item={item} key={item.title} />
        ))}
      </ul>
    </div>
  );
}

interface StatisticItem {
  number: number;
  sign: string;
  title: string;
  signPosition: 'top' | 'bottom';
}

interface ItemProps {
  item: StatisticItem;
}

const statisticItems: StatisticItem[] = [
  {
    number: 100,
    sign: '+',
    title: 'Countries supported',
    signPosition: 'top',
  },
  {
    number: 28,
    sign: 'm',
    title: 'Downloads on App Store',
    signPosition: 'bottom',
  },
  {
    number: 16,
    sign: 'm',
    title: 'Verified Users',
    signPosition: 'bottom',
  },
];

const Item = ({ item: { sign, number, title, signPosition } }: ItemProps) => {
  const isTop = signPosition === 'top';

  return (
    <li className={styles.statistics__item}>
      <div className={styles.statistics__info}>
        <span className={styles.statistics__number}>{number}</span>
        <span className={clsx(styles.statistics__sign, isTop && styles.statistics__sign_top)}>
          {sign}
        </span>
      </div>
      <p className={styles.statistics__title}>{title}</p>
    </li>
  );
};
