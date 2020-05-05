import React from "react";
import classes from "./Card.module.css";

const card = (props) => {
    return (
        <div className={classes.Card}>
            {props.main}
            <div className={classes.Container}>{props.meta}</div>
        </div>
    );
};

export default card;
