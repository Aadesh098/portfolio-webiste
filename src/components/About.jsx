import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import resume from "../assets/Aadesh_Resume.pdf";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-icon" className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As a Pre-final Year Student at Thapar University, I have a strong
        foundation in Data Structures and Algorithms in C++. I have front-end
        development expertise in React and Next.js. I am comfortable working
        with Solidity, Backend Databases and have experience collaborating with
        teams. I possess excellent communication and interpersonal skills and am
        eager to contribute my technical knowledge and passion for programming
        to a challenging Software Developer role.
      </motion.p>
      <motion.div  variants={fadeIn("", "", 0.1, 1)}>
        <div className="flex space-x-4 items-center">
          <p className="text-gray-600 underline">
            <a href={resume} download="resume.pdf">
              Resume
            </a>
          </p>
          <a href="https://github.com/Aadesh098" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aadeshvir-singh-055427212/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
