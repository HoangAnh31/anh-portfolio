import { useEffect } from "react";
import { FacebookIcon, LinkedinIcon, GithubIcon } from "../../UI/Icons";
import classes from "./Home.module.less";
import { motion } from "framer-motion";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);
  return (
    <main className={classes.home}>
      <motion.p
        className={classes.title}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.25 }}
      >
        Hi, My name is
      </motion.p>
      <motion.h1
        className={classes.name}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        Pham Hoang Anh Nguyen
      </motion.h1>
      <motion.h2
        className={classes.role}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.75 }}
      >
        Frontend Developer
      </motion.h2>
      <motion.div className={classes["connect-me"]}>
        <motion.a
          href="https://www.facebook.com/profile.php?id=100010561541633"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0.5, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
        >
          <FacebookIcon></FacebookIcon>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/pham-hoang-anh-nguyen-8772a7a4/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0.5, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
        >
          <LinkedinIcon></LinkedinIcon>
        </motion.a>
        <motion.a
          href="https://github.com/HoangAnh31"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          initial={{ opacity: 0.5, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
        >
          <GithubIcon></GithubIcon>
        </motion.a>
      </motion.div>
      <div className={classes["download-cv"]}>
        <motion.a
          href="https://drive.google.com/file/d/1EWd3EFPh4HHVGAvC2Sx2el9wOsGaZb3m/view?usp=sharing"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Download CV
        </motion.a>
      </div>
    </main>
  );
};

export default Home;
