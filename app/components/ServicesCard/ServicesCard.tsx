import styles from "./ServicesCard.module.css";

interface Props {
  title: string;
  description: string;
}

const ServicesCard = ({ title, description, }: Props) => {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;