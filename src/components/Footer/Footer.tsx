import { site } from "@/content/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const { contact } = site;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <h2 className={styles.heading}>Physical Address</h2>
          {contact.physicalAddress.map((line) => (
            <p key={line} className={styles.text}>
              {line}
            </p>
          ))}
        </div>

        <div>
          <h2 className={styles.heading}>Mailing Address</h2>
          {contact.mailingAddress.map((line) => (
            <p key={line} className={styles.text}>
              {line}
            </p>
          ))}
        </div>

        <div>
          <h2 className={styles.heading}>Get in Touch</h2>
          <p>
            <a href={`mailto:${contact.email}`} className={styles.link}>
              {contact.email}
            </a>
          </p>
          <p>
            <a href={`tel:${contact.phone}`} className={styles.link}>
              {contact.phone}
            </a>
          </p>
          <a href={site.donateUrl} className={styles.donate}>
            Donate
          </a>
        </div>
      </div>

      <p className={styles.bottom}>
        © {year} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}