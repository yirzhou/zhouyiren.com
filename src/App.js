import React from "react";
import Header from "./components/Header/Header";
import Projects from "./components/Content/Projects/Projects";
// import Essays from "./components/Content/Essays/Essays";
import About from "./components/Content/About/About";
import Videos from "./components/Content/Videos/Videos";
// import Resume from "./components/Content/Resume/Resume";
import Footer from "./components/Footer/Footer";
import classes from "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className={classes.App}>
            <Header className={classes.Header} />
            <Switch>
                {/* <Route path="/notes" exact component={Essays} /> */}
                {/* <Route path="/résumé" exact component={Resume} /> */}
                <Route path="/" exact component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/videos" component={Videos} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
