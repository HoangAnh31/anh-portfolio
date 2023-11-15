import classes from "../UI/accordionCard.module.less";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionCard = (props) => {
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    if (props.default === "1") setIsToggle(true);
  }, []);

  const toogleHandler = () => {
    setIsToggle((preState) => !preState);
  };

  return (
    <div className={classes.item}>
      <div
        className={`${classes.title} ${isToggle ? classes.active : ""}`}
        onClick={toogleHandler}
      >
        {props.title}
      </div>
      <AnimatePresence>
        {isToggle && (
          <motion.div
            className={classes.content}
            initial={{ padding: 0, opacity: 0, visibility: "hidden" }}
            animate={{ padding: 20, opacity: 1, visibility: "visible" }}
            exit={{ padding: 0, opacity: 0, visibility: "hidden" }}
            transition={{ type: "spring", duration: 0.5, bounce: 0 }}
          >
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default AccordionCard;
