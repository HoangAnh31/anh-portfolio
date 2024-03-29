import ProjectCard from "../../UI/projectCard";
import classes from "./Projects.module.less";
import myPortfolio from "../../images/myportfolio.png";
import { motion } from "framer-motion";

const INITIAL_PROJECT = [
  {
    image: myPortfolio,
    title: "My portfolio",
    description: `This is my first project while I'm studying a Reactjs course online. After I studied the basic part of Reactjs, I wanted to build a thing by myself, and this project came to me. I could build my own portfolio and practice what learned.`,
    skills: "HTML, Css, Reactjs, Framer Motion, Github, Figma",
    link: "/anh-portfolio",
  },
];

const Projects = () => {
  return (
    <div className={classes.projects}>
      {INITIAL_PROJECT.map((project, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.4, type: "spring" }}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              skills={project.skills}
              link={project.link}
            ></ProjectCard>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projects;
