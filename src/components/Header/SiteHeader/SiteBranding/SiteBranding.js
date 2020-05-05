import React from "react";
import classes from "./SiteBranding.module.css";

const siteBranding = () => {
    return (
        <div className={classes.SiteBranding}>
            <p className={classes.SiteTitle}>
                <a href="#">YIREN ZHOU</a>
            </p>
            <p className={classes.SiteDescription}>
                4A Computer Engineering @ UWaterloo
            </p>
        </div>
    );
};

export default siteBranding;
