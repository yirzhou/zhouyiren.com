import React from "react";
import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const navItem = (props) => {
    return (
        <NavLink
            className={classes.NavItem}
            exact={props.exact}
            activeClassName={classes.active}
            to={props.link}
        >
            {props.children}
        </NavLink>
    );
};

export default navItem;
