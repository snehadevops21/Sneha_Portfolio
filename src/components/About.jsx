import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section Label */}
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span />
          ABOUT ME
        </motion.div>


        {/* Main About Content */}
        <div className="about-heading">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            I LIKE TO TURN
            <br />

            <span>IDEAS INTO</span>

            <br />

            <strong>VISUAL EXPERIENCES.</strong>
          </motion.h2>


          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >

            <p>
              I'm a creative-focused IT professional who enjoys
              working where technology meets visual storytelling.
            </p>

            <p>
              My work moves between websites, graphic design,
              video editing, AI-generated video and content
              creation. I enjoy learning new tools and turning
              ideas into something people can actually see,
              interact with and remember.
            </p>

            <a
              href="https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="collection-link"
            >
              EXPLORE MY FULL WORK COLLECTION
              <span>↗</span>
            </a>

          </motion.div>

        </div>


        {/* Divider */}
        <div className="about-divider" />


        {/* Skills / What I Do */}
        <motion.div
          className="about-skills-list"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div className="about-skill web-skill">
            <div className="about-skill-image" aria-hidden="true" />
            <span>01</span>
            <p>Web Development</p>
          </div>

          <div className="about-skill">
            <span>02</span>
            <p>Graphic Design</p>
          </div>

          <div className="about-skill">
            <span>03</span>
            <p>Video Editing</p>
          </div>

          <div className="about-skill">
            <span>04</span>
            <p>AI Video Creation</p>
          </div>

          <div className="about-skill">
            <span>05</span>
            <p>Content Creation</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;