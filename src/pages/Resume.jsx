import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Resume.module.css";

function Resume() {
  return (
    <div className={styles.resume}>
      <Navbar />

      <main className={styles.main}>
        <section className={styles.wrapper}>
          {/* ---------- Header Info ---------- */}
          <div className={styles.headerCard}>
            <h1 className={styles.name}>JUSTIN ATOYEBI</h1>
            <p className={styles.role}>
              Creative Visionary | Music Producer | Entrepreneur | Artist
            </p>
            <p className={styles.contact}>
              CHICAGO, US, 60409 • justinatoyebi5@gmail.com • 773-319-3251
            </p>
          </div>

          {/* ---------- Grid Layout ---------- */}
          <div className={styles.grid}>
            {/* ---------- Left Column ---------- */}
            <div className={styles.leftCol}>
              {/* Professional Summary */}
              <div className={styles.card}>
                <h2 className={styles.heading}>Professional Summary</h2>
                <p className={styles.text}>
                  Creative Visionary and Entrepreneur with 4+ years of
                  experience in music production and creative direction,
                  dedicated to elevating emerging artists through innovative
                  projects. Expertise in videography, audio engineering, and
                  networking, driving brand visibility and artist success.
                  Passionate about pushing creative boundaries and fostering
                  vibrant artistic communities.
                </p>
              </div>

              {/* Skills */}
              <div className={styles.card}>
                <h2 className={styles.heading}>Skills</h2>
                <ul className={styles.skillsList}>
                  <li>Music Production</li>
                  <li>Audio Engineering</li>
                  <li>Creative Direction</li>
                  <li>Film Post Production</li>
                  <li>Networking</li>
                  <li>Videography</li>
                </ul>
              </div>

              {/* Achievements */}
              <div className={styles.card}>
                <h2 className={styles.heading}>Achievements</h2>
                <ul className={styles.achievementsList}>
                  <li>
                    Released debut album <strong>Open Case (2024)</strong>,
                    managing every production phase – from concept to promotion.
                  </li>
                  <li>
                    Collaborated with artists including Mello Buckzz, Juwon, OG
                    Stevo, and others.
                  </li>
                </ul>
              </div>
            </div>

            {/* ---------- Right Column ---------- */}
            <div className={styles.rightCol}>
              <div className={styles.card}>
                <h2 className={styles.heading}>Experience</h2>
                <ul className={styles.experienceList}>
                  <li>
                    <div className={styles.jobRow}>
                      <span className={styles.jobTitle}>FOUNDER/CEO</span>
                      <span className={styles.years}>2024 - Present</span>
                    </div>
                    <p className={styles.text}>Daymare Chicago, IL</p>
                    <ul className={styles.subList}>
                      <li>
                        Created Daymare, an innovative media production company
                        focused on live performances and creative direction for
                        emerging artists.
                      </li>
                      <li>
                        Launched Daymare Mic Drop, giving artists a platform to
                        showcase their talent.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className={styles.jobRow}>
                      <span className={styles.jobTitle}>
                        FREELANCE MUSIC PRODUCER & CREATIVE DIRECTOR
                      </span>
                      <span className={styles.years}>2022 - Present</span>
                    </div>
                    <ul className={styles.subList}>
                      <li>
                        Produced multiple highly creative music videos and audio
                        projects.
                      </li>
                      <li>
                        Partnered with local artists to bring their visions to
                        life through creative direction.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className={styles.jobRow}>
                      <span className={styles.jobTitle}>
                        AUDIO/VIDEO PRODUCTION INTERN
                      </span>
                      <span className={styles.years}>2021 - Dec 2025</span>
                    </div>
                    <p className={styles.text}>
                      Tennessee State University, Nashville, TN
                    </p>
                    <ul className={styles.subList}>
                      <li>
                        Gained hands-on experience working with professional
                        equipment and software.
                      </li>
                      <li>
                        Collaborated with industry professionals on real-world
                        productions.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <div className={styles.jobRow}>
                      <span className={styles.jobTitle}>
                        MUSIC SHOWCASE INTERNSHIP
                      </span>
                      <span className={styles.years}>Apr 2025 - Present</span>
                    </div>
                    <p className={styles.text}>
                      Next Showcase USA, Chicago, IL
                    </p>
                    <ul className={styles.subList}>
                      <li>
                        Assisted with the production of monthly music showcases
                        at major venues.
                      </li>
                      <li>
                        Supported management during national and international
                        events including the Bond with Kuliang youth music
                        festival in China.
                      </li>
                      <li>
                        Managed and created social media content to increase
                        engagement and visibility.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Resume;
