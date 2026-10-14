import { site } from "@/content/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.tagline}>{site.hero.tagline}</h1>
        <p className={styles.subtext}>{site.hero.subtext}</p>

        <div className={styles.actions}>
          <a href={site.donateUrl} className={styles.primary}>
            Donate
          </a>
          <a href="#about" className={styles.secondary}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}