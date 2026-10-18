import Image from "next/image";
import styles from "./GalleryGrid.module.css";

type Photo = {
  src: string;
  alt: string;
};

type Props = {
  photos: Photo[];
};

export default function GalleryGrid({ photos }: Props) {
  return (
    <ul className={styles.grid}>
      {photos.map((photo) => (
        <li key={photo.src} className={styles.item}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className={styles.image}
          />
        </li>
      ))}
    </ul>
  );
}