import React from "react";
import classes from "./Videos.module.css";
import Aux from "../../hoc/Aux";

const video = (props) => {
    return (
        <Aux>
            <div className={classes.VideoContainer}>
                <iframe
                    src={props.src}
                    frameBorder={props.frameBorder}
                    allow={props.allow}
                    allowFullScreen
                    title={props.title}
                ></iframe>
            </div>
            <div className={classes.Meta}>{props.meta}</div>
        </Aux>
    );
};

export default video;
