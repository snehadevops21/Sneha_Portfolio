import { motion } from "framer-motion";

const featuredWork = [
  {
    number: "01",
    category: "WEB DEVELOPMENT",
    title: "Web Experiences",
    description:
      "Responsive websites and digital experiences built with modern web technologies.",
    link: "https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/?category=websites",
  },
  {
    number: "02",
    category: "GRAPHIC DESIGN",
    title: "Visual Design",
    description:
      "Creative graphics, layouts, branding visuals and digital design work.",
    link: "https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/?category=graphic-design",
  },
  {
    number: "03",
    category: "AI VIDEO",
    title: "AI Video",
    description:
      "AI-assisted visual storytelling, creative concepts and experimental video work.",
    link: "https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/?category=ai-video",
  },
  {
    number: "04",
    category: "CONTENT CREATION",
    title: "Content",
    description:
      "Social content, video editing and creative content made for digital platforms.",
    link: "https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/?category=my-content",
  },
];

function SelectedWork() {
  return (
    <section className="work-section" id="work">
      <div className="work-container">

        {/* HEADER */}

        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span />
          SELECTED WORK
        </motion.div>


        <div className="work-heading">

          <motion.div
            className="work-title-wrap"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              A FEW THINGS
              <br />
              <span>I&apos;VE CREATED.</span>
            </h2>
          </motion.div>


          <motion.div
            className="work-intro"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="work-intro-line" />

            <p>
              A selection of work across web development,
              design, AI video and content creation.
            </p>

            <span className="work-intro-small">
              EXPLORE MY CREATIVE WORK
            </span>
          </motion.div>

        </div>


        {/* WORK GRID */}

        <div className="work-grid">

          {featuredWork.map((work, index) => (

            <motion.a
              key={work.number}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"

              initial={{
                opacity: 0,
                y: 45,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.65,
                delay: index * 0.08,
              }}
            >

              {/* CARD BACKGROUND NUMBER */}

              <span className="work-card-bg-number">
                {work.number}
              </span>


              {/* TOP */}

              <div className="work-card-top">

                <span className="work-number">
                  {work.number}
                </span>

                <span className="work-category">
                  {work.category}
                </span>

              </div>


              {/* CENTER */}

              <div className="work-card-content">

                <span className="work-card-index">
                  / {work.number}
                </span>

                <h3>
                  {work.title}
                </h3>

                <p>
                  {work.description}
                </p>

              </div>


              {/* BOTTOM */}

              <div className="work-card-bottom">

                <span className="work-view">
                  VIEW PROJECT
                </span>

                <span className="work-arrow">
                  ↗
                </span>

              </div>


              {/* DECORATION */}

              <div className="work-card-glow" />

              <div className="work-card-corner" />

            </motion.a>

          ))}

        </div>


        {/* FULL COLLECTION */}

        <motion.div
          className="work-collection-link"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <div>
            <span className="collection-label">
              FULL COLLECTION
            </span>

            <p>
              Want to see everything I&apos;ve created?
            </p>
          </div>


          <a
            href="https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW ALL WORK
            <span>↗</span>
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default SelectedWork;