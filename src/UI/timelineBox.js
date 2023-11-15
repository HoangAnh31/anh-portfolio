import classes from "../UI/timelineBox.module.less";

const TimelineBox = (props) => {
  return (
    <div className={classes["timeline-box"]}>
      {props.title && <h2 className={classes.title}>{props.title}</h2>}

      <div className={classes.container}>{props.children}</div>
    </div>
  );
};

export default TimelineBox;
