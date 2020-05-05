import React from "react";
import Container from "../UI/Container/Container";
import classes from "./Footer.module.css";

const footer = () => {
    return (
        <div className={classes.Footer}>
            <Container>@ 2020 YIREN ZHOU</Container>
        </div>
    );
};

export default footer;
