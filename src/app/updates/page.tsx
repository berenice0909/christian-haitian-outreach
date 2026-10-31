import type { Metadata } from "next";
import { site } from "@/content/site";
import UpdateCard from "@/components/Updates/UpdateCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Updates | Christian Haitian Outreach",
  description: "News and updates from Christian Haitian Outreach in Haiti.",
};

export default function UpdatesPage() {
  const updates = [...site.updates].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main id="main" className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Updates</h1>
        <p className={styles.intro}>The latest news from CHO.</p>
        <ul className={styles.list}>
          {updates.map((update) => (
            <li key={update.date + update.title}>
              <UpdateCard {...update} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}