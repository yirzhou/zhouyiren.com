import React from "react";
import classes from "./HeaderLinks.module.css";

const headerLinks = () => {
    return (
        <div className={classes.HeaderLinks}>
            <div className={classes.SocialLinks}>
                <a href="https://www.linkedin.com/in/yirzhou/">
                    <span className="fa fa-linkedin"></span>
                </a>
                <a href="https://github.com/yirzhou">
                    <span className="fa fa-github"></span>
                </a>
                <a
                    href="mailto:yiren.chow@gmail.com"
                    title="yiren.chow@gmail.com"
                >
                    <span className="fa fa-envelope"></span>
                </a>
            </div>
        </div>
    );
};

export default headerLinks;
