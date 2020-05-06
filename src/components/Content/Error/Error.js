import React from "react";
import Container from "../../UI/Container/Container";
import classes from "./Error.module.css";
import { NavLink } from "react-router-dom";

const error = () => {
    return (
        <Container>
            <div className={classes.ErrorWrapper}>
                <div className={classes.NotFound404}></div>
                <div className={classes.NotFound}>
                    <div>
                        <h1>404</h1>
                        <h2>Oops! Page Not Be Found</h2>
                        <p>
                            Sorry but the page you are looking for does not
                            exist, have been removed. name changed or is
                            temporarily unavailable
                        </p>
                    </div>

                    <NavLink to="/">Back to homepage</NavLink>
                </div>
            </div>
        </Container>
    );
};

export default error;
