import React from "react";
import classes from "./SiteBranding.module.css";
import { NavLink } from "react-router-dom";

const siteBranding = () => {
    return (
        <div className={classes.SiteBranding}>
            <p className={classes.SiteTitle}>
                <NavLink to="/">YIREN ZHOU</NavLink>
            </p>
            <p className={classes.SiteDescription}>
                4A Computer Engineering @ UWaterloo
            </p>
        </div>
    );
};

export default siteBranding;
