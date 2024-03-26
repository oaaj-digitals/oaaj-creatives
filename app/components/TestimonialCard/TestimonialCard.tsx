import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './TestimonialCard.module.css';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

interface Props {
  testimony?: string,
  client?: { name: string, position: string; },
}

const TestimonialCard = ({ testimony, client }: Props) => {
  return (
    <div className={styles.testimonyBox}>
      <div className={styles.testimonyIcon}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>

      <p className={styles.testimony}>{testimony || "OAAJ truly understood our vision and went above and beyond tocreate a website that exceeded our expectations. We're not just impressed, we're delighted!"}</p>

      <div className={styles.clientInfo}>
        <h5 className={styles.client}>{client?.name || "John Doe"}</h5>
        <p>{client?.position || "CEO & Founder of Honesty"}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;