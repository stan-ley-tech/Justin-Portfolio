import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Portfolio.module.css";

// Convert YouTube or Apple Music URLs to embed + thumbnail
function getVideoData(url) {
  try {
    const parsedUrl = new URL(url);

    // Handle Apple Music embed
    if (parsedUrl.hostname.includes("music.apple.com")) {
      const embedUrl = url.replace("music.apple.com", "embed.music.apple.com");
      return {
        embed: embedUrl,
        thumbnail: "/images/Image3.jpeg", // You can change this to your album cover
      };
    }

    // Handle YouTube embed
    let videoId = "";
    if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
      videoId = parsedUrl.searchParams.get("v");
    } else if (parsedUrl.pathname.startsWith("/shorts/")) {
      videoId = parsedUrl.pathname.split("/")[2];
    } else if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.slice(1);
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
      title: "Fame",
      url: "https://youtu.be/TPCEjz9GFKU",
      role: "Director | Editor | Producer",
      description: "A masterpiece made to showcase the effects of fame in celebreties.",
    },
    {
      id: 2,
      title: "Creative Promo Video",
      url: "https://youtu.be/Smyi_BWGy50",
      role: "Video editor | Producer",
      description: "An engaging promotional video showcasing creativity and direction.",
    },
    {
      id: 3,
      title: "Daymare Performance series",
      url: "https://youtu.be/UzaVoXESC9Y?si=n7HVytAzweo4pD4b",
      role: "Director | Cinematographer",
      description: "A compilation highlighting visual storytelling and cinematic skills.",
    },
    {
      id: 4,
      title: "Daymare Performance series",
      url: "https://youtu.be/P9qMo0wHUgg?si=2xsOV27L4GIUBVh-",
      role: "Sound Engineer | Director",
      description: "Exclusive behind-the-scenes footage showing production and process.",
    },
    {
      id: 5,
      title: "Christmas tree",
      url: "https://youtu.be/2hOeuldPST8",
      role: "Producer | Director | ",
      description: "Creative music video emphasizing emotion, rhythm, and storytelling.",
    },
    {
      id: 6,
      title: "Open Case Album (Apple Music)",
      url: "https://music.apple.com/us/album/open-case/1784307867",
      role: "Artist Collaboration | Producer",
      description:
        "Experience the full 'Open Case' album directly here — a cinematic blend of sound and storytelling.",
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
            const isAppleMusic = video.url.includes("music.apple.com");

            return (
              <div
                key={video.id}
                className={styles.card}
                onClick={() => setSelectedVideo(video)}
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                {/* Hover preview */}
                {hoveredVideo === video.id ? (
                  <iframe
                    src={
                      isAppleMusic
                        ? embed
                        : `${embed}?autoplay=1&mute=1`
                    }
                    title={video.title}
                    className={styles.previewVideo}
                    allow="autoplay; encrypted-media"
                  ></iframe>
                ) : (
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className={styles.thumbnail}
                  />
                )}

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
          <div
            className={styles.modalOverlay}
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className={styles.closeBtn}
              >
                ✕ Close
              </button>

              <div className={styles.videoWrapper}>
                <iframe
                  src={
                    selectedVideo.url.includes("music.apple.com")
                      ? getVideoData(selectedVideo.url).embed
                      : `${getVideoData(selectedVideo.url).embed}?autoplay=1`
                  }
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
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
