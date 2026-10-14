"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="#home" className={styles.logo}>
          {site.name}
        </Link>

        <nav className={styles.desktopNav}>
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </a>
          ))}
          <a href={site.donateUrl} className={styles.donate}>
            Donate
          </a>
        </nav>

        <button
          className={styles.menuButton}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className={styles.mobileNav}>
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={styles.link}
            >
              {item.label}
            </a>
          ))}
          <a href={site.donateUrl} className={styles.donate}>
            Donate
          </a>
        </nav>
      )}
    </header>
  );
}