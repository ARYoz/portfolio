import styles from "./ProjectCard.module.css";
import { FaGithub, FaYoutube } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const {
    title,
    description,
    techStack = [],
    image,
    githubLink,
    youtubeUrl,
  } = project;

  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className={styles.thumbPlaceholder}>Preview</div>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        {description ? (
          <p className={styles.desc}>{description}</p>
        ) : (
          <p className={styles.descMuted}>
            Short description will be added soon.
          </p>
        )}

        <div className={styles.tags}>
          {techStack.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {githubLink ? (
            <a
              className={styles.linkBtn}
              href={githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          ) : (
            <button className={`${styles.linkBtn} ${styles.disabled}`} disabled>
              <FaGithub /> GitHub
            </button>
          )}

          {youtubeUrl ? (
            <a
              className={styles.linkBtn}
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube /> YouTube
            </a>
          ) : (
            <button className={`${styles.linkBtn} ${styles.disabled}`} disabled>
              <FaYoutube /> YouTube Soon
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
