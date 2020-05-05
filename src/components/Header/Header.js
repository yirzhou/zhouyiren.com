import React from "react";
import classes from "./Header.module.css";
import HeaderLinks from "./HeaderLinks/HeaderLinks";
import SiteHeader from "./SiteHeader/SiteHeader";

const header = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.Container}>
                <HeaderLinks />
                <SiteHeader />
            </div>
        </div>
    );
};

export default header;
