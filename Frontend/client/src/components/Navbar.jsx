import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>ARYoz</div>

        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Home
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            Projects
          </NavLink>
          <NavLink to="/BeyondCode" className={({ isActive }) => (isActive ? styles.active : styles.link)}>
            BeyondCode
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

