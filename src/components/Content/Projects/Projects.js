import React from "react";
import Project from "./Project/Project";
import classes from "./Projects.module.css";

const token = process.env.REACT_APP_GIT_TOKEN;
const user = process.env.REACT_APP_GIT_USER;
const query = `query {
            user(login:"${user}") {
            pinnedItems(first: 3, types: [REPOSITORY, GIST]) {
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
                console.log(data);
                let projects = [];
                for (let node of data.data.user.pinnedItems.edges) {
                    projects.push({
                        name: node.node.name,
                        description: node.node.description,
                        url: node.node.url,
                    });
                }
                this.setState({ projects: projects });
            })
            .catch((err) => {
                this.setState({ error: err });
            });
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
        return <div className={classes.ProjectWrapper}>{projects}</div>;
    }
}

export default Projects;
