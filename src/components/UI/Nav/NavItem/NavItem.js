import React from "react";
import { NavLink } from "react-router-dom";

const navItem = (props) => {
    return props.exact ? (
        <NavLink exact activeStyle={{ color: "#007acc" }} to={props.link}>
            {props.children}
        </NavLink>
    ) : (
        <NavLink activeStyle={{ color: "#007acc" }} to={props.link}>
            {props.children}
        </NavLink>
    );
};

export default navItem;
