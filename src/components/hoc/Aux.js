import React from "react";
import classes from "./Aux.module.css";

const aux = (props) => {
    return <div className={classes.Aux}>{props.children}</div>;
};

export default aux;
