import classes from "../UI/projectCard.module.less";
import { motion } from "framer-motion";

const ProjectCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title}></img>
      </div>
      <div className={classes.container}>
        <h2>{props.title}</h2>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.skills}>
          <strong>Skills: </strong>
          {props.skills}
        </p>
      </div>
      <div className={classes["view-link"]}>
        <motion.a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          View page
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectCard;
