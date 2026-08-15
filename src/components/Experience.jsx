import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    year: "May 2026",
    role: "E-Commerce Intern",
    company: "OZInfo Tech",
    location: "Kausaltar, Kathmandu",
    description:
      "Worked with e-commerce product listings, branded content, social media content, AI-assisted creative workflows and digital marketing activities.",
  },
  {
    number: "02",
    year: "Dec 2025 — May 2026",
    role: "Admission Officer",
    company: "Dynamic Universe Education",
    location: "Putalisadak, Kathmandu",
    description:
      "Managed student applications, documentation, records, communication and admission processes.",
  },
  {
    number: "03",
    year: "Jun 2025 — Oct 2025",
    role: "Front Desk & Documentation Trainee",
    company: "Vision & Value Educational Consultancy",
    location: "Bagbazar, Kathmandu",
    description:
      "Supported front desk operations, documentation and client communication.",
  },
  {
    number: "04",
    year: "Feb 2024 — Jan 2025",
    role: "Lab Assistant",
    company: "HPPCL",
    location: "Jadibuti, Kathmandu",
    description:
      "Maintained laboratory documentation, inventory and supported equipment workflows.",
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        {/* EYEBROW */}

        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span />
          EXPERIENCE
        </motion.div>


        {/* HEADING */}

        <div className="experience-heading">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            WHERE I'VE
            <br />
            <span>WORKED.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            A look at the professional experiences that have
            shaped the way I work, communicate and create.
          </motion.p>

        </div>


        {/* TIMELINE */}

        <div className="experience-timeline">

          <div className="experience-line" />

          {experiences.map((experience, index) => (

            <motion.article
              className="experience-item"
              key={experience.number}

              initial={{
                opacity: 0,
                y: 50,
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
                delay: index * 0.12,
              }}
            >

              {/* YEAR */}

              <div className="experience-year">
                {experience.year}
              </div>


              {/* TIMELINE DOT */}

              <div className="experience-dot">
                <span />
              </div>


              {/* CONTENT */}

              <div className="experience-content">

                <div className="experience-top">

                  <span className="experience-number">
                    {experience.number}
                  </span>

                  <span className="experience-location">
                    {experience.location}
                  </span>

                </div>


                <h3>
                  {experience.role}
                </h3>


                <h4>
                  {experience.company}
                </h4>


                <p>
                  {experience.description}
                </p>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;