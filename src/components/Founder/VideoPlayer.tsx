"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./VideoPlayer.module.css";

type Props = {
  videoId: string;
  title: string;
  label: string;
};

export default function VideoPlayer({ videoId, title, label }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={`${styles.player} ${playing ? styles.playing : styles.collapsed}`}
    >
      {playing ? (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <Image
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 896px) 896px, 100vw"
            className={styles.thumbnail}
          />
          <button
            type="button"
            className={styles.overlay}
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            <span className={styles.playIcon} aria-hidden="true">
              ▶
            </span>
            <span className={styles.label}>{label}</span>
          </button>
        </>
      )}
    </div>
  );
}