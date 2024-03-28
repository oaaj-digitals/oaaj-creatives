import styles from "./Testimonials.module.css";
import ScrollBtn from '../ScrollBtn';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = () => {
  return (
    <>
      <div className={`${styles.testimonials}`} id="Testimonials">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className={styles.scrollBtn}>
        <ScrollBtn scrollableElementId="Testimonials" btnType="tertiaryBtn" key="2" />
      </div>
    </>
  );
};

export default Testimonials;