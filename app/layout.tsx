import type { Metadata } from "next";
import { Sora, Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import logo from '@/public/imgs/logo.svg';
import headerStyles from "./Header.module.css";
import footerStyle from "./Footer.module.css";
import Link from "next/link";

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


const sora = Sora({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-sora",
  display: "block",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-outfit",
  display: "block",
});

export const metadata: Metadata = {
  title: {
    default: "OAAJ Creative Labs",
    template: 'OAAJ | %s'
  },
  description: "OAAJ is a creative agency fueled by a shared passion for crafting exceptional digital experiences. Born from a desire to bridge the gap between imagination and reality, our team of experienced designers,developers, and strategists collaborate to transform your brand vision into aunique and engaging online presence. We believe in building long-lastingrelationships with our clients, becoming an extension of their team and guidingthem through every step of the journey.",
  openGraph: {
    title: {
      default: "OAAJ Creative Labs",
      template: 'OAAJ | %s'
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${outfit.variable}`}>
      <body>
        <header className={headerStyles.header} >
          <Link href={""}><Image src={logo} alt="OAAJ Creative Lab Logo" height={`${30}`} /></Link>
          <nav className={"nav " + headerStyles.nav}>
            <Link href={""} className={".active"}>Home</Link>
            <Link href={""}>Services</Link>
            <Link href={""}>Work</Link>
            <Link href={""}>About Us</Link>
            <Link href={""} className={headerStyles.contact}>Let&lsquo;s Talk</Link>
          </nav>
        </header>

        <>{children}</>

        <footer className={footerStyle.footer}>
          <svg viewBox="0 0 1920 614" fill="none" xmlns="http://www.w3.org/2000/svg" className={footerStyle.footerBg}>
            <defs>
              <clipPath id="footerClipPath" clipPathUnits="objectBoundingBox">
                <path d="M0,0.062 H0.148 C0.153,0.062,0.159,0.056,0.163,0.046 L0.175,0.017 C0.18,0.007,0.185,0.001,0.191,0.001 H0.809 C0.815,0.001,0.82,0.007,0.825,0.017 L0.837,0.046 C0.841,0.056,0.847,0.062,0.852,0.062 H1 V1 H0 V0.062" fill="url(#paint0_linear_73_4)" />
              </clipPath>
              <linearGradient id="paint0_linear_73_4" x1="960" y1="0.682129" x2="960" y2="614" gradientUnits="userSpaceOnUse">
                <stop stopColor="#343C60" />
                <stop offset="1" stopColor="#343C60" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className={footerStyle.topDiv}>
            <div className={footerStyle.logoSloganBox}>
              <Link href={""}><Image src={logo} height={35} alt="OAAJ Creative Labs Logo" /></Link>
              <p className={footerStyle.slogan}>From Thought to Reality.</p>
            </div>

            <nav className={"nav " + footerStyle.nav}>
              <div>
                <p className={footerStyle.navTitle}>What we do</p>
                <div className={footerStyle.linkList}>
                  <Link href="/">Home</Link>
                  <Link href="">Work</Link>
                  <Link href="">Services</Link>
                  <Link href="/contact_us">Contact Us</Link>
                </div>
              </div>

              <div>
                <p className={footerStyle.navTitle}>Who we are</p>
                <div className={footerStyle.linkList}>
                  <Link href="/about_us">About Us</Link>
                  <Link href="">FAQ</Link>
                </div>
              </div>

              <div>
                <p className={footerStyle.navTitle}>Connect with Us</p>
                <div className={footerStyle.linkList}>
                  <Link href="https://github.com/oaaj-digitals" target="_blank" >Github</Link>
                  <Link href="https://www.behance.net/oaaj_digital" target="_blank" >Behance</Link>
                  <Link href="https://twitter.com/oaaj_digital" target="_blank" >Twitter</Link>
                  <Link href="https://www.instagram.com/oaaj_digital/" target="_blank" >Instagram</Link>
                </div>
              </div>

              <div>
                <p className={footerStyle.navTitle}>Contact Us</p>
                <div className={footerStyle.linkList}>
                  <Link href="tel:+2348170806890" target="_blank">+234(0) 817 080 6890</Link>
                  <Link href="mailto:info@oaajcreatives.com" target="_blank">info@oaajcreatives.com</Link>
                </div>
              </div>
            </nav>
          </div>

          <div className={footerStyle.hr}></div>

          <div className={footerStyle.copyrightBox}>
            <p>OAAJ Creative Lab &copy; All Right Reserved.</p>
          </div>
        </footer>
      </body>
    </html >
  );
}
