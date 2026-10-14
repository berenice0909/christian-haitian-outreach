import { site } from "@/content/site";
import styles from "./Mission.module.css";

export default function Mission() {
  const { mission } = site;

  return (
    <section id="mission" className={styles.mission}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{mission.heading}</h2>
        <p className={styles.intro}>{mission.intro}</p>

        <div className={styles.columns}>
          <div className={styles.photo} aria-hidden="true" />

          <ul className={styles.list}>
            {mission.points.map((point) => (
              <li key={point} className={styles.point}>
                <span className={styles.marker} aria-hidden="true">
                  ▸
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}