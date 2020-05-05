import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => (
    <div className={classes.SkCircle}>
        <div className={[classes.SkCircle1, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle2, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle3, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle4, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle5, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle6, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle7, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle8, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle9, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle10, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle11, classes.SkChild].join(" ")}></div>
        <div className={[classes.SkCircle12, classes.SkChild].join(" ")}></div>
    </div>
);

export default spinner;
