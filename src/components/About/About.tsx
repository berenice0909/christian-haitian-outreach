import { site } from "@/content/site";
import styles from "./About.module.css";

export default function About() {
  const { about } = site;

  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{about.heading}</h2>
        {about.paragraphs.map((text) => (
          <p key={text} className={styles.paragraph}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}