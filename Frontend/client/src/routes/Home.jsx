import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import profileImg from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

export default function Home() {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.title}>Hi, I’m Ari - Full-Stack Developer</h1>
        <section className={styles.about}>
          <p className={styles.aboutText}>
            I’m a Junior Full-Stack Developer focused on building clean,
            responsive web apps with React and Node.js.
            I enjoy solving problems, learning new technologies, and turning ideas into real
            products. I’m currently looking for a junior position where I can
            grow, contribute to a team, and keep improving.
          </p>
        </section>

        <div className={styles.socials}>
          <a
            className={styles.socialIcon}
            href="https://github.com/ARYoz"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            className={styles.socialIcon}
            href="https://www.linkedin.com/in/ari-oz"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            className={styles.socialIcon}
            href="https://wa.me/972586465251"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a className={styles.socialIcon} href="mailto:ozary1764@gmail.com">
            <FaEnvelope />
            Email
          </a>

          <a
            className={`${styles.socialIcon} ${styles.resume}`}
            href="/CV.pdf"
            target="_blank"
          >
            <FaFilePdf />
            Resume
          </a>
        </div>
      </div>
      <div className={styles.photoWrapper}>
        <img src={profileImg} alt="Ari Oz" className={styles.photo} />
      </div>
    </section>
  );
}
