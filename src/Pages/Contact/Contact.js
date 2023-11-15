import classes from "./Contact.module.less";
import Form from "./Form";
import imgContact from "../../images/contact.png";

const Contact = () => {
  return (
    <div className={classes["contact-page"]}>
      <div className={classes["general"]}>
        <img src={imgContact} alt="Contact me"></img>
        <h3>Let’s get started</h3>
        <p>
          Now that you know a lot about me, let me know if you are interested to
          work with me
        </p>
      </div>
      <Form></Form>
    </div>
  );
};

export default Contact;
