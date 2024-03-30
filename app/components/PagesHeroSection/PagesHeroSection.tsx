import Image from "next/image";
import HeroBtmLn from "../HeroSectionLn/HeroBtmLn";
import styles from "./PagesHeroSection.module.css";

interface Props {
  title: string;
  subTitle: string;
  heroImage?: string;
}

const PagesHeroSection = ({ title, subTitle, heroImage, }: Props) => {
  return (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>

        {heroImage && <Image src={heroImage} alt={``} className={styles.heroImage} />}

      </section>

      <HeroBtmLn />
    </>
  );
};

export default PagesHeroSection;