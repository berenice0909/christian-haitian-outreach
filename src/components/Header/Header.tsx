"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/cho-logo.png"
            alt=""
            width={40}
            height={40}
            priority
            className={styles.logoImage}
          />
          {site.name}
        </Link>

        <nav className={styles.desktopNav}>
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
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
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={styles.link}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.donateUrl}
            onClick={() => setOpen(false)}
            className={styles.donate}
          >
            Donate
          </a>
        </nav>
      )}
    </header>
  );
}