import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span />
          GET IN TOUCH
        </motion.div>

        <div className="contact-main">

          <motion.div
            className="contact-heading"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              LET'S MAKE
              <br />
              <span>SOMETHING.</span>
            </h2>
          </motion.div>

          <motion.div
            className="contact-copy"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              Have a project, idea or opportunity in mind?
              I'd love to hear about it.
            </p>

            <a
              href="mailto:p.snehapnp@gmail.com"
              className="contact-email"
            >
              p.snehapnp@gmail.com
              <span>↗</span>
            </a>
          </motion.div>

        </div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          {/* EMAIL */}

          <a href="mailto:p.snehapnp@gmail.com">
            <span className="contact-link-number">01</span>

            <span>EMAIL</span>

            <span className="contact-arrow">↗</span>
          </a>


          {/* PHONE */}

          <a href="tel:+9779868730735">
            <span className="contact-link-number">02</span>

            <span>+977 9868730735</span>

            <span className="contact-arrow">↗</span>
          </a>


          {/* WORK COLLECTION */}

          <a
            href="https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-number">03</span>

            <span>WORK COLLECTION</span>

            <span className="contact-arrow">↗</span>
          </a>

        </motion.div>


        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span>
            AVAILABLE FOR CREATIVE OPPORTUNITIES
          </span>

          <span>
            WEB · DESIGN · AI VIDEO · CONTENT
          </span>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;