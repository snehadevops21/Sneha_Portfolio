import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* TOP */}

        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="footer-brand">

            <a href="#top" className="footer-logo">
              SNEHA<span>.</span>
            </a>

            <p>
              Digital Creator · Designer · AI Video Creator. 
            </p>

          </div>


          <a
            href="mailto:p.snehanp@gmail.com"
            className="footer-talk"
          >
            LET'S TALK
            <span>↗</span>
          </a>

        </motion.div>


        {/* MIDDLE */}

        <motion.div
          className="footer-middle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >

          <div className="footer-services">
            WEB · DESIGN · AI VIDEO · CONTENT
          </div>


          <div className="footer-links">

            <a href="#about">
              ABOUT
            </a>

            <a href="#work">
              WORK
            </a>

            <a href="#skills">
              SKILLS
            </a>

            <a href="#contact">
              CONTACT
            </a>

          </div>

        </motion.div>


        {/* BOTTOM */}

        <div className="footer-bottom">
          <h2 className="footer-headline">Let's build something great together.</h2>

          <div className="footer-links">
            <a href="https://www.linkedin.com/in/sneha-pokharel-51a515412/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:p.snehanp@gmail.com">
              Email Me
            </a>

          </div>

          <span>
            © {currentYear} ISHNUUU. ALL RIGHTS RESERVED.
          </span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="back-to-top"
        >
          BACK TO TOP
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;