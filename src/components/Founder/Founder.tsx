import { site } from "@/content/site";
import VideoPlayer from "./VideoPlayer";
import styles from "./Founder.module.css";

export default function Founder() {
  const { founder } = site;
  const videoId = founder.videoUrl.split("/").pop() ?? "";

  return (
    <section id="founder" className={styles.founder}>
      <div className={styles.inner}>
        <p className={styles.heading}>{founder.heading}</p>
        <h2 className={styles.name}>{founder.name}</h2>

        <VideoPlayer
          videoId={videoId}
          title={`Video about ${founder.name}`}
          label="Watch Her Story"
        />

        <p className={styles.excerpt}>{founder.excerpt}</p>

        <details className={styles.readMore}>
          <summary className={styles.summary}>
            <span className={styles.moreText}>Read her full story</span>
            <span className={styles.lessText}>Show less</span>
            <span className={styles.arrow} aria-hidden="true">
              ▸
            </span>
          </summary>

          {founder.paragraphs.map((text) => (
            <p key={text} className={styles.paragraph}>
              {text}
            </p>
          ))}
        </details>
      </div>
    </section>
  );
}