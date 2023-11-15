import avatar from "../images/avatar.png";
import { motion } from "framer-motion";
const MyAvatar = () => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", duration: 1, bounce: 0 }}
    >
      <img src={avatar} alt="About me"></img>
    </motion.div>
  );
};

export default MyAvatar;
