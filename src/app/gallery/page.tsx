import type { Metadata } from "next";
import { site } from "@/content/site";
import GalleryGrid from "@/components/Gallery/GalleryGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Photo Gallery | Christian Haitian Outreach",
  description:
    "Photos of the children, staff, and daily life at Christian Haitian Outreach in Haiti.",
};

export default function GalleryPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Photo Gallery</h1>
        <p className={styles.intro}>
          A glimpse into daily life with the children of CHO.
        </p>
        <GalleryGrid photos={site.gallery} />
      </div>
    </main>
  );
}