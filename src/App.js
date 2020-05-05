import React from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Content/Intro/Intro";
import Essays from "./components/Content/Essays/Essays";
import About from "./components/Content/About/About";
import Footer from "./components/Footer/Footer";
import classes from "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className={classes.App}>
            <Header className={classes.Header} />
            <Switch>
                <Route path="/notes" exact component={Essays} />
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={Intro} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
