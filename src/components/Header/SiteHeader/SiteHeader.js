import React from "react";
import classes from "./SiteHeader.module.css";
import SiteBranding from "./SiteBranding/SiteBranding";
import MenuWrapper from "./MenuWrapper/MenuWrapper";

const siteHeader = () => {
    return (
        <div className={classes.SiteHeader}>
            <SiteBranding />
            <MenuWrapper />
        </div>
    );
};

export default siteHeader;
