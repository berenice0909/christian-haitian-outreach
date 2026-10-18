import { site } from "@/content/site";
import styles from "./Donate.module.css";
import CopyNumber from "./CopyNumber";

export default function Donate() {
    const { donate } = site;

    return (
        <section id="donate" className={styles.donate}>
            <div className={styles.inner}>
                <h2 className={styles.heading}>{donate.heading}</h2>
                <p className={styles.intro}>{donate.intro}</p>

                <div className={styles.options}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Give Online</h3>
                        <p className={styles.cardText}>
                            Donate securely with PayPal, credit or debit card, or bank account.
                        </p>
                        <a
                            href={donate.paypalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.button}
                        >
                            Donate with PayPal
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Give with Zelle</h3>
                        <p className={styles.cardText}>
                            Send your donation through Zelle to:
                        </p>
                        {/* TODO: ask Dad for a Zelle QR code */}
                        <CopyNumber number={donate.zellePhone} />
                    </div>
                </div>
            </div>
        </section>
    );
}