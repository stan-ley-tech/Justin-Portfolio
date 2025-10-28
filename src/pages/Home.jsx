import styles from "./Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <Navbar />

      {/* Hero Section */}
      <main className={styles.hero}>
        <h1>Justin Atoyebi</h1>
        <h2>Creative Visionary | Film & TV Producer | Entrepreneur</h2>
        
      </main>

      {/* About Section */}
      <section className={styles.about}>
        <p>
          With a passion for storytelling and visual artistry, I fuse creativity,
          leadership, and innovation to deliver world-class film and television
          experiences.
        </p>

        <div className={styles.aboutImages}>
          <img src="/images/studio 💽.jpeg" alt="Studio creative work" />
          <img
            src="/images/fe8ffaf9-f80d-489a-8a00-1717ef77ea77.jpeg"
            alt="Behind the scenes film shot"
          />
          <img
            src="/images/c5117801-bca9-4f50-b258-0a62fe19e92a.jpeg"
            alt="Production setup"
          />
          <img
            src="/images/Are you sabotaging your music career_ These 10….jpeg"
            alt="Music career production insight"
          />
        </div>

        <Link to="/about" className={styles.learnMoreBtn}>
          Learn More
        </Link>
      </section>

      {/* Featured Projects */}
      <section className={styles.featured}>
        <h3>Featured Projects</h3>

        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <img src="/images/_w_.jpeg" alt="Open Case Short Film" />
            <div className={styles.projectCardContent}>
              <h4>Open Case Short Film</h4>
              <span>Director | Editor | Producer</span>
              <p>
                A suspense-driven short exploring the depths of human emotion
                and perception.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <img
              src="/images/cea04ee2-706d-4099-8fde-b398865687ce.jpeg"
              alt="Daymare Promo"
            />
            <div className={styles.projectCardContent}>
              <h4>Daymare Promo</h4>
              <span>Creative Director | Producer</span>
              <p>
                A gripping visual concept blending creativity and cinematic
                storytelling.
              </p>
            </div>
          </div>

          <div className={styles.projectCard}>
            <img
              src="/images/621659ad-b865-4215-b288-8b6af547110b.jpeg"
              alt="Creative Direction Reel"
            />
            <div className={styles.projectCardContent}>
              <h4>Creative Direction Reel</h4>
              <span>Director | Editor</span>
              <p>
                A visual showcase of artistic mastery and unique storytelling
                vision.
              </p>
            </div>
          </div>
        </div>

        <Link to="/portfolio" className={styles.viewAllBtn}>
          View Full Portfolio
        </Link>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <blockquote>
          “Every frame tells a story my mission is to make each one unforgettable.”
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
