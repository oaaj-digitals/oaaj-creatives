import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Home.module.css";
import Button from "./components/Button/Button";
import Link from "next/link";
import { faBehance, faGithubAlt, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import HeroBtmLn from "./components/HeroSectionLn/HeroBtmLn";
import logo from '@/public/imgs/logo.svg';

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.introBox}>
          <h1 className={styles.introText}>
            Craft Powerful Design Experiences. Delight Your Customers.
          </h1>

          <p className={styles.introSub}>OAAJ Creative Labs crafts delightful digital experiences.</p>

          <Button direction="diagonal" type="primaryBtn" textColor="orange" styles={{ marginTop: "2.5rem" }}>Connect with Us.</Button>
        </div>

        <div className={styles.socials}>
          <Link href="https://github.com/oaaj-digitals" target="_blank">
            <FontAwesomeIcon icon={faGithubAlt} />
          </Link>
          <Link href="https://www.behance.net/oaaj_digital" target="_blank">
            <FontAwesomeIcon icon={faBehance} />
          </Link>
          <Link href="https://www.instagram.com/oaaj_digital/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://twitter.com/oaaj_digital" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
        </div>

        <div className={`${styles.heroSectBgText} noSelect bgText`} aria-hidden>Development</div>

      </section>

      <HeroBtmLn />

      <section className={`overflow-x-hidden ${styles.aboutSection}`}>
        <h3 className={styles.heading}>Driven by passion, we&apos;re a team of friendly creatives who transform brand visions into unique digital experiences.</h3>
        <div className={styles.txtBox}>
          <p>OAAJ is a creative agency fueled by a shared passion for crafting exceptional digital experiences. Born from a desire to bridge the gap between imagination and reality, our team of experienced designers, developers, and strategists collaborate to transform your brand vision into aunique and engaging online presence. We believe in building long-lasting relationships with our clients, becoming an extension of their team and guiding them through every step of the journey.</p>
          <Button direction="diagonal" type="primaryBtn" textColor="orange" styles={{ marginTop: "2.5rem" }}>More</Button>
        </div>

        <div className={styles.coreValueBox}>
          <div className={`${styles.coreDiv} ${styles.webDev}`}>
            <h5 className={styles.coreTitle}>Web Development</h5>
            <p>We build modern, responsive websites that captivate your audience anddrive results.</p>
          </div>

          <div className={`${styles.coreDiv} ${styles.uiDesign}`}>
            <h5 className={styles.coreTitle}>UI Design</h5>
            <p>We design intuitive and engaging user interfaces that enhance your user experience.</p>
          </div>

          <Image src={logo} alt="OAAJ Creative Labs Logo" className={`${styles.logoImg} noSelect`} aria-hidden />

          <div className={`${styles.coreDiv} ${styles.logoDesign}`}>
            <h5 className={styles.coreTitle}>Logo Design</h5>
            <p>We create impactful logos that represent your brand and make a lasting impression.</p>
          </div>

          <div className={`${styles.coreDiv} ${styles.graphicsDesign}`}>
            <h5 className={styles.coreTitle}>Graphics Design</h5>
            <p>We create compelling graphic designs for all your needs, from infographics to marketing materials.</p>
          </div>
        </div>

        <div className={`${styles.aboutSectBgText} noSelect bgText`} aria-hidden>About Us</div>
      </section>
    </main>
  );
}
