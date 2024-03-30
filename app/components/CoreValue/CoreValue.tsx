import { ReactNode } from "react";
import styles from "./CoreValue.module.css";

interface Props {
  heading: string;
  children: ReactNode;
  number: string;
}

const CoreValue = ({ heading, children, number }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>{number}</div>
      <div className={styles.textBox}>
        <h4 className={styles.heading}>{heading}</h4>
        <p className={styles.description}>{children}</p>
      </div>
    </div>
  );
};

export default CoreValue;