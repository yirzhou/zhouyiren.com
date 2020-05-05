import React from "react";
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import Button from "../Button/Button";

class Nav extends React.Component {
    state = {
        classes: [classes.TopNav],
    };

    toggleHandler = () => {
        let styles = [...this.state.classes];
        if (styles.length === 1) styles.push(classes.Responsive);
        else styles.pop();
        this.setState({ classes: styles });
    };

    render() {
        return (
            <div className={this.state.classes.join(" ")}>
                <NavItem exact link="/">
                    Home
                </NavItem>
                {/* <NavItem exact link="/résumé">
                    Résumé
                </NavItem> */}
                <NavItem exact link="/videos">
                    Videos I Made
                </NavItem>
                <NavItem exact link="/about">
                    About
                </NavItem>
                {/* <NavItem exact link="/notes">
                    I Write Stuff
                </NavItem> */}
                <Button className={classes.Icon} onClick={this.toggleHandler}>
                    <i className="fa fa-bars"></i>
                </Button>
            </div>
        );
    }
}

export default Nav;
