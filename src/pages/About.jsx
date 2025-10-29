import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./About.module.css";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation

function About() {
  return (
    <div className={styles.about}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.card}>
          {/* -------- Bio -------- */}
          <div className={styles.bio}>
            <p className={styles.point}>
              Passionate about crafting cinematic experiences that connect deeply with audiences.
            </p>
            <p className={styles.point}>
              Founder of <strong>Daymare</strong>, shaping creative direction and visual identities.
            </p>
            <p className={styles.point}>
              Skilled in audio engineering, directing, and production management.
            </p>
            <p className={styles.point}>
              Believes storytelling inspires movement, bridges communities, and redefines modern media representation.
            </p>
          </div>

          {/* -------- Creative Philosophy -------- */}
          <div className={styles.philosophy}>
            <div className={styles.quoteBlock}>
              <blockquote>
                “Art is not created — it’s revealed through light, rhythm, and truth.”
              </blockquote>
            </div>
            <div className={styles.quoteBlock}>
              <blockquote>
                “Cinema is poetry in motion, translating emotion into visual form.”
              </blockquote>
            </div>
          </div>

          {/* -------- Signature Quote -------- */}
          <div className={styles.quote}>
            “Every story deserves to be told beautifully with honesty, rhythm, and vision.”
          </div>

          {/* -------- CTA -------- */}
          <div className={styles.cta}>
            <Link to="/portfolio" className={styles.ctaBtn}>
              Explore My Work
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
