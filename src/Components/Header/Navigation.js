import { useEffect, useState } from "react";
import classes from "./Navigation.module.less";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = (props) => {
  const [setClassNavigator, isSetClassNavigator] = useState(classes.nav);

  useEffect(() => {
    isSetClassNavigator(
      props.showMenu ? `${classes.nav} ${classes.open}` : classes.nav
    );
  }, [props.showMenu]);

  const hideMenuHandler = () => {
    props.hideMenu();
  };

  return (
    <nav className={setClassNavigator}>
      <ul className={classes.navigator}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
            end
            onClick={hideMenuHandler}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={hideMenuHandler}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="experiences"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={hideMenuHandler}
          >
            Experiences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={hideMenuHandler}
          >
            Projects
          </NavLink>
        </li>
        <li className={classes["contact-nav"]}>
          <NavLink
            to="contact"
            className={({ isActive }) => (isActive ? classes.active : "")}
            onClick={hideMenuHandler}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
