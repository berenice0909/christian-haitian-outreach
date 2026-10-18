"use client";

import { useState } from "react";
import styles from "./CopyNumber.module.css";

type Props = {
  number: string;
};

export default function CopyNumber({ number }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      // Copy digits only, e.g. "3054581098", since bank apps accept that best
      await navigator.clipboard.writeText(number.replace(/\D/g, ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (rare): the number is still visible to copy by hand
    }
  }

  return (
    <div className={styles.wrapper}>
      <p className={styles.number}>{number}</p>
      <button type="button" onClick={handleCopy} className={styles.button}>
        <span aria-live="polite">{copied ? "Copied!" : "Copy number"}</span>
      </button>
    </div>
  );
}