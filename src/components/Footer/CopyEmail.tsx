"use client";

import { useState } from "react";
import styles from "./Footer.module.css";

type Props = {
  email: string;
};

// Email link plus a Copy button, for people whose computer has no mail app set up
export default function CopyEmail({ email }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (rare): the email is still visible to copy by hand
    }
  }

  return (
    <p className={styles.emailRow}>
      <a href={`mailto:${email}`} className={styles.link}>
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className={styles.copy}
        aria-label={copied ? "Email copied" : "Copy email"}
        title={copied ? "Copied!" : "Copy email"}
      >
        {copied ? (
          // Check mark
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        ) : (
          // Two overlapping pages
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.icon}>
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
          </svg>
        )}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied" : ""}
      </span>
    </p>
  );
}
