import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./GalleryPreview.module.css";

export default function GalleryPreview() {
  const photos = site.gallery;
  // Two copies back to back, so the slide can loop without a jump
  const strip = [...photos, ...photos];

  return (
    <section className={styles.section} aria-labelledby="gallery-preview-heading">
      <h2 id="gallery-preview-heading" className={styles.heading}>
        Life at CHO
      </h2>

      <div className={styles.viewport}>
        <ul className={styles.track}>
          {strip.map((photo, i) => {
            const isCopy = i >= photos.length;
            return (
              <li
                key={`${i}-${photo.src}`}
                className={styles.slide}
                aria-hidden={isCopy || undefined}
              >
                <Image
                  src={photo.src}
                  alt={isCopy ? "" : photo.alt}
                  fill
                  sizes="320px"
                  className={styles.image}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.actions}>
        <Link href="/gallery" className={styles.button}>
          View all photos
        </Link>
      </div>
    </section>
  );
}
