import styles from "./BeyondCode.module.css";
import familyPhoto1 from "../assets/Gallery-images/family1.png";
import familyPhoto2 from "../assets/Gallery-images/family2.png";
import travelPhoto1 from "../assets/Gallery-images/travel1.png";
import museom from "../assets/Gallery-images/museom.png";

const hobbies = [
  {
    id: 1,
    title: "family moments",
    desc: "Family time is my anchor — it keeps me focused and motivated",
    img: familyPhoto1,
    tags: ["family"],
  },
  {
    id: 2,
    title: "Trail Moments",
    desc: "Nature keeps me grounded and energized",
    img: familyPhoto2,
    tags: ["nature"],
  },
  {
    id: 3,
    title: "Mountain Hiking",
    desc: "Hiking is my reset — fresh air, long trails, and clear thinking",
    img: travelPhoto1,
    tags: ["Hiking"],
  },
  {
    id: 4,
    title: "Football Museum",
    desc: "Big moments, great atmosphere, and unforgettable memories",
    img: museom,
    tags: ["museum"],
  },
];

export default function Gallery() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.h1}>Beyond Code</h1>
        <p className={styles.sub}>
          A little about my hobbies, family, and what inspires me.
        </p>
      </header>

      <div className={styles.grid}>
        {hobbies.map((h) => (
          <article className={styles.card}>
            <div className={styles.thumb}>
              {h.img ? (
                <>
                  <img
                    className={styles.thumbBg}
                    src={h.img}
                    alt=""
                    aria-hidden="true"
                  />
                  <img className={styles.thumbImg} src={h.img} alt={h.title} />
                </>
              ) : (
                <div className={styles.thumbPlaceholder}>Photo</div>
              )}
            </div>

            <div className={styles.body}>
              <h3 className={styles.title}>{h.title}</h3>
              <p className={styles.desc}>{h.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
