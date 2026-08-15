import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "Web",
  "AI Video",
  "Design",
  "Editing",
  "Content",
];

const projects = [
  {
    title: "Web Project One",
    category: "Web",
    description: "A responsive web experience built with modern technologies.",
    number: "01",
    link: "#",
  },
  {
    title: "Web Project Two",
    category: "Web",
    description: "A deployed web project showcasing digital problem solving.",
    number: "02",
    link: "#",
  },
  {
    title: "AI Visual Stories",
    category: "AI Video",
    description: "AI-assisted visual storytelling and cinematic experimentation.",
    number: "03",
    link: "#",
  },
  {
    title: "Creative Design",
    category: "Design",
    description: "Graphic design and visual communication work.",
    number: "04",
    link: "#",
  },
  {
    title: "Video Editing",
    category: "Editing",
    description: "Short-form editing, pacing and visual storytelling.",
    number: "05",
    link: "#",
  },
  {
    title: "Content Creation",
    category: "Content",
    description: "Digital content created for social platforms and campaigns.",
    number: "06",
    link: "#",
  },
];

function Work() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section id="work" className="section work">
      <div className="section-heading">
        <span>02</span>
        <p>SELECTED WORK</p>
      </div>

      <div className="work-intro">
        <h2>
          Things I've
          <br />
          <span>made.</span>
        </h2>

        <p>
          A selection of my work across development, design,
          AI video, editing and content creation.
        </p>
      </div>

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={active === category ? "active" : ""}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.article
              key={project.title}
              className="project-card"
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-placeholder">
                <span>{project.category}</span>
                <div className="placeholder-symbol">✦</div>
              </div>

              <div className="project-content">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>

                <a href={project.link}>
                  View Project ↗
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="collection-link">
        <p>
          Want to explore more of my work?
        </p>

        <a
          href="https://myworkcollection-ugpbcbc5hw76bwqhulbggo.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          Open Full Work Collection ↗
        </a>
      </div>
    </section>
  );
}

export default Work;