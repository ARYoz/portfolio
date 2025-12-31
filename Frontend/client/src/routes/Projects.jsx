import { useMemo, useState ,useEffect} from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Pagination from "../components/Pagination";
import styles from "./Projects.module.css";



export default function Projects() {
  const PAGE_SIZE = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PAGE_SIZE);

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return projects.slice(start, start + PAGE_SIZE);
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          A selection of projects I built (GitHub + short demo videos).
        </p>
      </header>

      <div className={styles.grid}>
        {pageItems.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </section>
  );
}
