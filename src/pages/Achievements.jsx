import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Achievements.module.css";

function Achievements() {
  const achievements = [
    {
      title: "Founded Daymare (2024)",
      detail:
        "A creative media company dedicated to elevating emerging artists through visual storytelling, production, and brand identity.",
    },
    {
      title: "Produced 'Open Case' Album",
      detail:
        "Led full creative direction, sound design, and visual rollout of debut album blending film and music in narrative form.",
    },
    {
      title: "Collaborations",
      detail:
        "Worked with Mello Buckzz, Juwon, OG Stevo, and other top Chicago artists on film and music projects.",
    },
    {
      title: "International Experience",
      detail:
        "Contributed to global events including the Kuliang Festival in China through Next Showcase USA partnership.",
    },
    {
      title: "Film/TV Direction",
      detail:
        "Directed and produced short films and visual campaigns blending emotional storytelling with high-end production.",
    },
  ];

  return (
    <div className={styles.achievementsPage}>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Achievements</h1>

        <p className={styles.subtitle}>
          A journey of creativity, leadership, and storytelling built through
          collaboration and relentless vision.
        </p>

        <div className={styles.grid}>
          {/* Loop through main achievements */}
          {achievements.map((a, i) => (
            <div key={i} className={styles.card}>
              <h3 className={styles.cardTitle}>{a.title}</h3>
              <p className={styles.cardDetail}>{a.detail}</p>
            </div>
          ))}

          {/* ✅ Sixth Card: Portfolio Redirect */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Explore My Portfolio</h3>
            <p className={styles.cardDetail}>
              See my full creative work — film, TV, music, and media projects that define my creative journey.
            </p>
            <Link to="/portfolio" className={styles.ctaBtn}>
              Go to Portfolio →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Achievements;
