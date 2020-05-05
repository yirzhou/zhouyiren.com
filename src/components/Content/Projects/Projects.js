import React from "react";
import Project from "./Project/Project";
import classes from "./Projects.module.css";
import Spinner from "../../UI/Spinner/Spinner";
import Content from "../Content";

const token = process.env.REACT_APP_GIT_TOKEN;
const user = process.env.REACT_APP_GIT_USER;
const query = `query {
            user(login:"${user}") {
            pinnedItems(first: 4, types: [REPOSITORY, GIST]) {
              totalCount
              edges {
                node {
                  ... on Repository {
                    name
                    description
                    url
                  }
                }
              }
            }
          }
        }`;

class Projects extends React.Component {
    state = {
        projects: [],
        error: null,
        showSpinner: true,
    };

    componentDidMount() {
        fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `bearer ${token}`,
            },
            body: JSON.stringify({ query }),
        })
            .then((res) => res.json())
            .then((data) => {
                let projects = [];
                for (let node of data.data.user.pinnedItems.edges) {
                    projects.push({
                        name: node.node.name,
                        description: node.node.description,
                        url: node.node.url,
                    });
                }
                this.setState({
                    projects: projects,
                    error: null,
                    showSpinner: false,
                });
            })
            .catch((err) => {
                this.setState({ error: err, showSpinner: false });
            });
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState !== this.state) return true;
        return false;
    }

    render() {
        let projects = [];

        if (this.state.error && !this.state.projects.length)
            projects = (
                <p>
                    Server seems down... can't retrieve the stuff I built{" "}
                    <span role="img" aria-label="Close">
                        😞
                    </span>
                </p>
            );
        else {
            const items = this.state.projects;
            projects = items.map((item, index) => {
                return (
                    <Project
                        key={index}
                        title={item.name}
                        description={item.description}
                        url={item.url}
                    />
                );
            });
        }

        if (this.state.showSpinner) projects = <Spinner />;
        return (
            <Content>
                <div className={classes.ProjectWrapper}>{projects}</div>
            </Content>
        );
    }
}

export default Projects;
