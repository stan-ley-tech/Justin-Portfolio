import styles from "./Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />

      {/* ==============================
          HERO + ABOUT SECTION (Shared Background)
      =============================== */}
      <section className={styles.heroAboutWrapper}>
        <div className={styles.heroAboutInner}>
          {/* Left Side - Hero Content */}
          <main className={styles.hero}>
            <h1>Justin Atoyebi</h1>
            <h2>Artist | Producer | Entrepreneur</h2>
            <p>
              Capturing stories that move audiences and inspire culture.
              Explore my work in film, television, and creative media production.
            </p>
          </main>

          {/* Right Side - About Card */}
          <div className={styles.aboutCard}>
            <img src="/images/Image1.jpeg" alt="Studio creative work" />
            <div className={styles.aboutText}>
             
              <p>
                Justin Atoyebi is a passionate film and TV producer who brings 
                stories to life with creativity, emotion, and purpose. His work 
                bridges art and entrepreneurship, shaping narratives that inspire 
                and connect audiences globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          FEATURED PROJECTS
      =============================== */}
      <section className={styles.featured}>
        <h3>Featured Projects</h3>

        <div className={styles.projectGrid}>
          {/* Card 1 */}
          <div className={styles.projectCard}>
            <img src="/images/Image2.jpeg" alt="Open Case Short Film" />
            <div className={styles.projectCardContent}>
              <h4>Fame</h4>
              <p>
                A masterpiece made to showcase the effects of fame in celebreties.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.projectCard}>
            <img src="/images/Image6.jpeg" alt="Daymare Promo" />
            <div className={styles.projectCardContent}>
              <h4>Daymare Perfomance series</h4>
              <p>
                A gripping visual concept blending creativity and cinematic
                storytelling.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.projectCard}>
            <img src="/images/Image7.jpeg" alt="Creative Direction Reel" />
            <div className={styles.projectCardContent}>
              <h4>Christmas Tree</h4>
              <p>
                A visual showcase of artistic mastery and unique storytelling
                vision.
              </p>
            </div>
          </div>

          {/* Card 4 - Blurred Portfolio Box */}
          <div className={`${styles.projectCard} ${styles.portfolioCard}`}>
            <div className={styles.portfolioOverlay}>
              <Link to="/portfolio" className={styles.portfolioLink}>
                View Full Portfolio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          PHILOSOPHY SECTION
      =============================== */}
      <section className={styles.philosophy}>
        <div className={styles.philosophyMainCard}>
          <div className={styles.philosophyOverlayCard}>
            <blockquote>
              “Every frame tells a story — my mission is to make each one
              unforgettable.”
            </blockquote>

            <Link to="/about" className={styles.philosophyLink}>
              Learn more →
            </Link>
          </div>

          <div className={styles.philosophyImageWrap}>
            <img
              src="/images/Image1.jpeg"
              alt="Philosophy visual"
              className={styles.philosophyImage}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
