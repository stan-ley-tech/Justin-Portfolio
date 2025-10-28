import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Portfolio.module.css";

// Convert YouTube URLs to embed + thumbnail
function getVideoData(url) {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";
    if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
      videoId = parsedUrl.searchParams.get("v");
    } else if (parsedUrl.pathname.startsWith("/shorts/")) {
      videoId = parsedUrl.pathname.split("/")[2];
    }
    return {
      embed: `https://www.youtube.com/embed/${videoId}`,
      thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    };
  } catch {
    console.error("Invalid URL:", url);
    return { embed: url, thumbnail: "" };
  }
}

function Portfolio() {
  const videos = [
    {
      id: 1,
      title: "Open Case Short Film",
      url: "https://www.youtube.com/watch?v=sR-3QKoKs2k",
      role: "Director | Editor | Producer",
      description: "A cinematic short film exploring human emotion and suspense.",
    },
    {
      id: 2,
      title: "Daymare Promo",
      url: "https://youtube.com/shorts/2bqXbE_-MEM?si=WHyoUb9So2oVMhW9",
      role: "Creative Director | Producer",
      description: "Promotional teaser capturing the essence and creative direction of Daymare.",
    },
    {
      id: 3,
      title: "Creative Direction Reel",
      url: "https://youtube.com/shorts/xdfQ48koCHU?si=B2P1-x-hIgQ6WKQz",
      role: "Director | Cinematographer",
      description: "Highlights of diverse creative works showcasing visual storytelling.",
    },
    {
      id: 4,
      title: "Behind the Scenes Music Production",
      url: "https://youtube.com/shorts/JRoam571b58?si=Gm9kH8m3oQaZerlx",
      role: "Sound Engineer | Director",
      description: "A behind-the-scenes look at the artistry and process in studio production.",
    },
    {
      id: 5,
      title: "Film/TV Project Highlight",
      url: "https://youtube.com/shorts/s3IAHXP1dfs?si=lXV-lZ9IsEGAH702",
      role: "Director | Producer",
      description: "Showcasing visual storytelling and direction for film and TV production.",
    },
    {
      id: 6,
      title: "Animation Showcase",
      url: "https://youtube.com/shorts/9ORWF5RkdO0?si=_uFY4d_Ij_IPa3q5",
      role: "Animator | Storyboard Artist",
      description: "A creative mix of motion design and storytelling through animation.",
    },
    {
      id: 7,
      title: "Cinematography Reel",
      url: "https://youtube.com/shorts/LQtkl3auvv8?si=zFdCWIjy4MruR8yN",
      role: "Cinematographer | Director",
      description: "Compilation reel showcasing visual framing, lighting, and storytelling.",
    },
    {
      id: 8,
      title: "Music Video Project",
      url: "https://youtube.com/shorts/GodmYPfMaio?si=GBcetOji_5Q69SD5",
      role: "Director | Editor | Producer",
      description: "Creative music video emphasizing emotion, rhythm, and performance.",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <div className={styles.portfolioPage}>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.subtitle}>
          Explore my selected works across film, direction, and creative storytelling.
        </p>

        <div className={styles.grid}>
          {videos.map((video) => {
            const { embed, thumbnail } = getVideoData(video.url);
            return (
              <div
                key={video.id}
                className={styles.card}
                onClick={() => setSelectedVideo(video)}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Default thumbnail, play on hover */}
                {hoveredVideo === video.id ? (
                  <iframe
                    src={`${embed}?autoplay=1&mute=1`}
                    title={video.title}
                    className={styles.previewVideo}
                    allow="autoplay; muted"
                  ></iframe>
                ) : (
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className={styles.thumbnail}
                  />
                )}

                {/* Play overlay */}
                <div className={styles.overlay}>
                  <div className={styles.playButton}>▶ Play</div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{video.title}</h3>
                  <p className={styles.cardRole}>{video.role}</p>
                  <p className={styles.cardDesc}>{video.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {selectedVideo && (
          <div className={styles.modalOverlay} onClick={() => setSelectedVideo(null)}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedVideo(null)} className={styles.closeBtn}>
                ✕ Close
              </button>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`${getVideoData(selectedVideo.url).embed}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.iframe}
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Portfolio;
