import Container from "../UI/Container/Container";
import React from "react";
import classes from "./Content.module.css";

const content = (props) => {
    return (
        <Container>
            <div className={classes.Content}>{props.children}</div>
        </Container>
    );
};

export default content;
