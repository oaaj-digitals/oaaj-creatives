import Image from "next/image";
import styles from "./styles.module.css";
import PagesHeroSection from "../components/PagesHeroSection/PagesHeroSection";
import testImage from "@/public/milad-fakurian-2sICkGsJRQY-unsplash.jpg";
import CoreValue from "../components/CoreValue/CoreValue";
import Testimonials from "../components/Testimonials/Testimonials";
import Link from "next/link";
import Button from "../components/Button/Button";

export default function Home() {
  return (
    <main>
      <PagesHeroSection title="We're passionate creatives crafting exceptional digital experiences." subTitle="Meet the Team Behind the Magic." />

      <section className={styles.section}>
        <h2 className={styles.title}>
          <span className={styles.titleMain}>Crafting Captivating Digital Experiences:</span>
          <br />
          <span className={styles.titleSub}>From Idea to Reality</span>
        </h2>

        <div className={styles.introDiv}>
          <Image src={testImage} alt="testImage" className={styles.image} />
          <p className={styles.text}>
            It all began with a spark: the idea to bridge the gap between imagination and reality in the digital world. OAAJ was born as a place where exceptional digital experiences could be realized, no matter the starting point.
            <br />

            Today, we thrive as a collaborative environment, attracting passionate individuals who share our dedication to transforming ideas into engaging digital realities. We each bring unique expertise to the table, from web development and design to content creation, working seamlessly to fulfill your client vision.
          </p>
        </div>

        <div className={styles.introDiv}>
          <p className={styles.text}>
            OAAJ is a creative agency fueled by a shared passion for crafting exceptional digital experiences. Born from a desire to bridge the gap between imagination and reality, our team of experienced designers, developers, and strategists collaborate to transform your brand vision into a unique and engaging online presence. We believe in building long-lasting relationships with our clients, becoming an extension of their team and guiding them through every step of the journey.
          </p>

          <Image src={testImage} alt="testImage" className={styles.image} />
        </div>
      </section>

      <section className={`${styles.section} ${styles.coreValues}`}>
        <CoreValue heading="Creativity" number="01">We believe in pushing boundaries and exploring innovative solutions to bring your brand vision to life.</CoreValue>

        <CoreValue heading="Collaboration" number="02">We work closely with our clients, fostering open communication and building strong partnerships to achieve shared success.</CoreValue>

        <CoreValue heading="Excellence" number="03">We are committed to exceeding expectations and delivering exceptional results in every project we undertake.</CoreValue>

        <CoreValue heading="Integrity" number="04">We conduct business with honesty and transparency, building trust and lasting relationships with our clients.</CoreValue>

        <div className={`${styles.coreValuesBg} noSelect bgText`} aria-hidden>Core Values</div>

      </section>

      <section className={`${styles.section} ${styles.missionVision}`}>
        <div className={styles.mvDiv}>
          <div className={styles.mvTextBox}>
            <h3 className={styles.mvHeading}>Vision</h3>
            <p className={styles.mvText}>
              To be a leading force in crafting exceptional digital experiences that bridge the gap between imagination and reality.
            </p>
          </div>
          <Image src={testImage} alt="" className={styles.image} />
        </div>
        <div className={styles.mvDiv}>
          <Image src={testImage} alt="" className={styles.image} />
          <div className={styles.mvTextBox}>
            <h3 className={styles.mvHeading}>Mission</h3>
            <p className={styles.mvText}>
              Through collaboration and innovation, we transform ideas into captivating digital realities that empower our clients to achieve their digital aspirations and unlock their brand&apos;s full potential.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>
          <span className={styles.titleMain}>Bridging the Gap with Passion:</span>
          <br />
          <span className={styles.titleSub}>What Makes OAAJ Different</span>
        </h2>
        <p className={styles.testimonialIntro}>At OAAJ, we believe the journey from vision to reality shouldn&apos;t be a one-way street. That&apos;s why we go beyond simply translating your ideas; we partner with you to refine, iterate, and elevate them.</p>
        <Testimonials />
      </section>

      <section className={`${styles.section} `}>
        <div className={styles.faq}>
          <h3 className={styles.faqQuestion}>What services do you offer?</h3>
          <p className={styles.faqAnswer}>We offer a range of services to help you achieve your digital goals, including web development, design (logo, UI, graphic), and content writing.</p>
        </div>

        <div className={styles.faq}>
          <h3 className={styles.faqQuestion}>What makes OAAJ different?</h3>
          <p className={styles.faqAnswer}>We go beyond simply translating your ideas. We partner with you to refine, iterate, and elevate them, ensuring your vision becomes a reality through creativity, collaboration, and integrity.</p>
        </div>

        <div className={styles.faq}>
          <h3 className={styles.faqQuestion}>Do you offer free consultations?</h3>
          <p className={styles.faqAnswer}>Yes, we do! Schedule a free consultation today to discuss your project and see how we can help, <Link className="link" href="/contact_us">contact us today.</Link></p>
        </div>

        <Button to="/faq" type="primaryBtn" direction="diagonal" styles={{ alignSelf: 'center' }}>Get More Answers</Button>

        <div className={`${styles.faqBg} noSelect bgText`} aria-hidden>F.A.Q</div>
      </section>
    </main >
  );
}