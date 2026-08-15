import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "WEB",
    skills: [
      "HTML / CSS",
      "JavaScript",
      "React",
      "Vite",
      "Responsive Design",
      "Vercel",
    ],
  },
  {
    number: "02",
    title: "DESIGN",
    skills: [
      "Graphic Design",
      "Visual Design",
      "Social Media Design",
      "Branding",
      "Layout Design",
      "Creative Concepts",
    ],
  },
  {
    number: "03",
    title: "VIDEO + AI",
    skills: [
      "Video Editing",
      "AI Video Creation",
      "AI-assisted Visuals",
      "Motion Concepts",
      "Visual Storytelling",
      "Creative Experimentation",
    ],
  },
  {
    number: "04",
    title: "CONTENT",
    skills: [
      "Content Creation",
      "Social Media Content",
      "Short-form Video",
      "Creative Writing",
      "Content Editing",
      "Digital Content",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* EYEBROW */}

        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span />
          SKILLS & TOOLS
        </motion.div>


        {/* HEADING */}

        <div className="skills-heading">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WHAT I
            <br />
            <span>WORK WITH.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            A mix of creative and technical skills I use to
            design, build, edit and create digital experiences.
          </motion.p>

        </div>


        {/* SKILL GROUPS */}

        <div className="skills-grid">

          {skillGroups.map((group, index) => (

            <motion.div
              className="skill-group"
              key={group.number}

              initial={{
                opacity: 0,
                y: 40,
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
                duration: 0.65,
                delay: index * 0.1,
              }}
            >

              <div className="skill-group-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-line" />

              </div>


              <h3>
                {group.title}
              </h3>


              <div className="skill-list">

                {group.skills.map((skill, skillIndex) => (

                  <div
                    className="skill-item"
                    key={skill}
                  >
                    <span>
                      {String(skillIndex + 1).padStart(2, "0")}
                    </span>

                    <p>
                      {skill}
                    </p>
                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;