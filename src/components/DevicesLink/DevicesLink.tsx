import styles from './DevicesLink.module.scss';
import Image from 'next/image';

interface DevicesLinkProps {
  icon: string;
  title: string;
  description: string;
}

export default function DevicesLink({ title, description, icon }: DevicesLinkProps) {
  return (
    <li className={styles.device}>
      <Image src={icon} alt={title} className={styles.device__icon} />
      <p className={styles.device__title}>{title}</p>
      <p className={styles.device__decription}>{description}</p>
    </li>
  );
}
