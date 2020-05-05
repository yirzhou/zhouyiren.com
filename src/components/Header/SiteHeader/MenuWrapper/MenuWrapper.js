import React from "react";
import classes from "./MenuWrapper.module.css";
import Nav from "../../../UI/Nav/Nav";

const menuWrapper = () => {
    return (
        <div className={classes.MenuWrapper}>
            <Nav></Nav>
        </div>
    );
};

export default menuWrapper;
