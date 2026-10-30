import styles from "./UpdateCard.module.css";

type Props = {
  title: string;
  date: string;
  body: string;
  file?: string;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function UpdateCard({ title, date, body, file }: Props) {
  return (
    <article className={styles.card}>
      <time dateTime={date} className={styles.date}>
        {formatDate(date)}
      </time>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      {file && (
        <a href={file} target="_blank" rel="noopener noreferrer" className={styles.file}>
          Read the newsletter (PDF)
        </a>
      )}
    </article>
  );
}