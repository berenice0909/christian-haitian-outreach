import { site } from "@/content/site";
import styles from "./Mission.module.css";
import Image from "next/image";

export default function Mission() {
  const { mission } = site;

  return (
    <section id="mission" className={styles.mission}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{mission.heading}</h2>
        <p className={styles.intro}>{mission.intro}</p>

        <div className={styles.columns}>
          <div className={styles.photo}>
            <Image
              src={mission.photo.src}
              alt={mission.photo.alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={styles.image}
            />
          </div>
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