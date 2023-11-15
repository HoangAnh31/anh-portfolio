import classes from "../Contact/Form.module.less";
import useInput from "../../Hooks/use-input";
import emailjs from "@emailjs/browser";
import { EMAIL_TEMPLATE_ID, PUBLIC_KEY, SERVICE_ID } from "../../Helper/config";
import { useState } from "react";
import { motion } from "framer-motion";

const isEmpty = (val) => {
  return val.trim() === "";
};
const isEmail = (val) => {
  return !val.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const Form = () => {
  const [sent, isSent] = useState(false);
  const {
    enteredValue: enteredName,
    isValid: isValidName,
    isError: isErrorName,
    inputChangeHandler: changeHandlerName,
    inputBlurHandler: blurHandlerName,
    reset: resetName,
  } = useInput(isEmpty);

  const {
    enteredValue: enteredEmail,
    isValid: isValidEmail,
    isError: isErrorEmail,
    inputChangeHandler: changeHandlerEmail,
    inputBlurHandler: blurHandlerEmail,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    enteredValue: enteredMessage,
    isValid: isValidMessage,
    isError: isErrorMessage,
    inputChangeHandler: changeHandlerMessage,
    inputBlurHandler: blurHandlerMessage,
    reset: resetMessage,
  } = useInput(isEmpty);

  const sendMessage = (variables) => {
    return (
      emailjs
        .send(SERVICE_ID, EMAIL_TEMPLATE_ID, variables, PUBLIC_KEY)
        .then((res) => {
          isSent(true);
        })
        // Handle errors here however you like, or use a React error boundary
        .catch((err) =>
          console.error(
            "Oh well, you failed. Here some thoughts on the error that occured:",
            err
          )
        )
    );
  };

  const formIsValid = !isValidName && !isValidEmail && !isValidMessage;

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    sendMessage({
      message: enteredMessage,
      from_name: enteredName,
      reply_to: enteredEmail,
    });

    resetName();
    resetEmail();
    resetMessage();
  };

  return (
    <form className={classes["form-contact"]} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <motion.input
          type="text"
          id="name"
          name="name"
          onChange={changeHandlerName}
          onBlur={blurHandlerName}
          value={enteredName}
          whileFocus={{
            outlineColor: isErrorName ? "rgb(246, 67, 67)" : "#23120b",
          }}
        ></motion.input>
        {isErrorName && (
          <p className={classes.error}>Please input a valid name!</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <motion.input
          type="text"
          id="email"
          name="email"
          onChange={changeHandlerEmail}
          onBlur={blurHandlerEmail}
          value={enteredEmail}
          whileFocus={{
            outlineColor: isErrorEmail ? "rgb(246, 67, 67)" : "#23120b",
          }}
        ></motion.input>
        {isErrorEmail && (
          <p className={classes.error}>
            Please input a valid email. Ex: abc@gmail.com!
          </p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="message">Message</label>
        <motion.textarea
          id="message"
          name="message"
          rows="8"
          cols="50"
          onChange={changeHandlerMessage}
          onBlur={blurHandlerMessage}
          value={enteredMessage}
          whileFocus={{
            outlineColor: isErrorMessage ? "rgb(246, 67, 67)" : "#23120b",
          }}
        ></motion.textarea>
        {isErrorMessage && (
          <p className={classes.error}>Please input a valid message!</p>
        )}
      </div>
      <div className={`${classes.control} ${classes.button}`}>
        <motion.button
          type="submit"
          disabled={!formIsValid}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Send
        </motion.button>
        {sent && (
          <p className={classes.notification}>Email successfully sent!</p>
        )}
      </div>
    </form>
  );
};

export default Form;
