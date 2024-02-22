import MyAvatar from "../../UI/MyAvatar";
import AccordionCard from "../../UI/accordionCard";
import {
  iconPhone as Phone,
  iconEmail as Email,
  iconAddress as Address,
  iconTravel as Travel,
  iconBook as ReadingBook,
  iconCooking as Cooking,
} from "../../UI/Icons";
import classes from "./About.module.less";
import { motion } from "framer-motion";

const controlContentAnimation = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
  transition: { type: "spring", duration: 0.5, bounce: 0 },
};

const About = () => {
  return (
    <main className={classes.about}>
      <div className={classes.accordions}>
        <AccordionCard title="About me" default="1">
          <motion.div
            variants={controlContentAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition="transition"
          >
            <p>
              A Frontend developer with over 5 years in e-commerce website,
              built landing pages and promotion pages, can work with designers
              team, proficient in HTML, CSS, Javascript, and basic ReactJS. Good
              teamwork and sociable.
            </p>
            <ul className={`${classes["list-item"]} ${classes["type-icon"]}`}>
              <li>
                <a href="tel:0493341674">
                  <Phone></Phone>0493341674
                </a>
              </li>
              <li>
                <a href="mailto:anhnph.us@gmail.com">
                  <Email></Email>anhnph.us@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://goo.gl/maps/H36Fe5WcaUtub9Xg9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Address></Address>6/33 Ahern St, Labrador, QLD 4215
                </a>
              </li>
            </ul>
          </motion.div>
        </AccordionCard>
        <AccordionCard title="Education">
          <motion.div
            className={classes.cols}
            variants={controlContentAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition="transition"
          >
            <p>
              <strong>Ho Chi Minh City University of Science – HCMUS </strong>
              <br></br>Bachelor of Information Technology Engineer.
            </p>
            <p>09/2014</p>
          </motion.div>
        </AccordionCard>
        <AccordionCard title="Skills">
          <motion.ul
            className={classes["list-item"]}
            variants={controlContentAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition="transition"
          >
            <li>
              Highly proficient creating HTML5 and CSS3, Responsive Web Designs
            </li>
            <li>Ability to use JQuery, Javascript</li>
            <li>Navicat tool (database management & design)</li>
            <li>Basic ReactJS, Tailwindcss, Typescript</li>
            <li>GIT</li>
            <li>Agile environment</li>
            <li>Jira</li>
          </motion.ul>
        </AccordionCard>
        <AccordionCard title="Languages">
          <motion.div
            className={classes.cols}
            variants={controlContentAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition="transition"
          >
            <p>English</p>
            <p>Vietnamese - Native</p>
          </motion.div>
        </AccordionCard>
        <AccordionCard title="Hobbies">
          <motion.ul
            className={`${classes["list-item"]} ${classes["type-icon"]}`}
            variants={controlContentAnimation}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition="transition"
          >
            <li>
              <Travel></Travel>Traveling
            </li>
            <li>
              <ReadingBook></ReadingBook>Reading book
            </li>
            <li>
              <Cooking></Cooking>Cooking
            </li>
          </motion.ul>
        </AccordionCard>
      </div>
      <div className={classes.avatar}>
        <MyAvatar></MyAvatar>
      </div>
    </main>
  );
};

export default About;
