import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-label">
            <span></span>
            CREATIVE DESIGNER &amp; DIGITAL CREATOR
          </div>

          <h1>
            I CREATE
            <br />
            <span>DIGITAL</span>
            <br />
            <strong>EXPERIENCES.</strong>
          </h1>

          <p className="hero-description">
            Web development, graphic design, video editing,
            AI video creation and content - bringing ideas
            to life through technology and creativity.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-btn hero-btn-primary">
              VIEW MY WORK
              <span>↗</span>
            </a>

            <a href="#contact" className="hero-btn">
              LET'S TALK
              <span>↗</span>
            </a>
          </div>

          <div className="hero-bottom">
            <span className="hero-line"></span>
            SCROLL TO EXPLORE
          </div>
        </motion.div>


        {/* IMAGE */}

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <div className="hero-image-ring"></div>

          <motion.img
            src="/me.png"
            alt="Ishnu"
            className="hero-image"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, 0, -1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;