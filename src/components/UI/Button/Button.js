import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
    return (
        <button classes={classes.Button} {...props}>
            {props.children}
        </button>
    );
};

export default button;
