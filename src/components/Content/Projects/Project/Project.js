import React from "react";
import "./Project.module.css";
import classes from "./Project.module.css";

const project = (props) => {
    return (
        <div className={classes.Wrapper}>
            <a
                className={classes.Anchor}
                href={props.url}
                rel="noopener noreferrer"
            >
                <div className={classes.Title}>{props.title}</div>
                <div className={classes.Dot}>
                    <i
                        className="fa fa-circle"
                        style={{ fontSize: "0.4em" }}
                    ></i>
                </div>
                <div className={classes.Description}>{props.description}</div>
            </a>
        </div>
    );
};

export default project;
