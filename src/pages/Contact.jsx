import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Contact.module.css";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Connect backend later)");
  };

  return (
    <div className={styles.contactPage}>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          Have a collaboration, partnership, or opportunity in mind?  
          I’d love to hear from you. Let’s bring your vision to life.
        </p>

        <div className={styles.contactCard}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {/* Section 1: Name + Email */}
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            {/* Section 2: Message */}
            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* Section 3: Submit */}
            <div className={styles.buttonSection}>
              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </div>

            {/* Section 4: Contact Info */}
            <div className={styles.infoSection}>
              <div className={styles.contactRow}>
                <p><HiOutlineMail size={20}/> <a href="mailto:justinatoyebi5@gmail.com">justinatoyebi5@gmail.com</a></p>
                <p><HiOutlinePhone size={20}/> <a href="tel:7733193251">(773) 319-3251</a></p>
              </div>
              <p className={styles.contactLocation}><HiOutlineLocationMarker size={20}/> Nashville, Tennessee</p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
