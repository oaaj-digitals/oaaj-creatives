import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from "./Home.module.css";
import Button from "./components/Button/Button";
import Link from "next/link";
import { faBehance, faGithubAlt, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { outfit } from "./layout";
import HeroBtmLn from "./components/HeroSectionLn/HeroBtmLn";

export default function Home() {
  return (
    <main>
      <section className={styles.heroSection}>
        <div className={styles.introBox}>
          <h1 className={styles.introText}>
            Craft Powerful Design Experiences. Delight Your Customers.
          </h1>

          <p className={styles.introSub}>OAAJ Creative Labs crafts delightful digital experiences.</p>

          <Button text={"Connect with Us."} direction="diagonal" type="primaryBtn" textColor="orange" styles={{ marginTop: "2.5rem" }} />
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

        <div className={`${styles.heroSectBgText} ${outfit.className}`}>Development</div>

      </section>

      <HeroBtmLn />
    </main>
  );
}
