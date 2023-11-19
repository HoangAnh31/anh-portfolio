import Navigation from "./Navigation";
import classes from "./Header.module.less";
import { Logo, MenuIcon, CloseMenu } from "../../UI/Icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [showMenu, isShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    isShowMenu((preState) => !preState);
  };

  const hideMenu = () => {
    isShowMenu((preState) => !preState);
  };
  return (
    <header>
      <motion.div
        className={classes["header-logo"]}
        initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <a href="/anh-portfolio" title="Anh's Portfolio">
          <Logo></Logo>
          <h2>Anh's Portfolio</h2>
        </a>
      </motion.div>
      <motion.div
        className={classes["header-nav"]}
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={classes.menu} onClick={toggleMenuHandler}>
          {showMenu ? <CloseMenu></CloseMenu> : <MenuIcon></MenuIcon>}
        </div>
        <Navigation showMenu={showMenu} hideMenu={hideMenu}></Navigation>
      </motion.div>
    </header>
  );
};

export default Header;
