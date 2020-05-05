import React from "react";
import classes from "./Resume.module.css";
import Container from "../../UI/Container/Container";
import BulletPoint from "./BulletPoint";

const educationDetails = {
    Major: "B.A.Sc. Computer Engineering, GPA: 4.0 (91.55%)",
    Courses:
        "Algorithms and Data Structures, Operating Systems, Compilers, Database Systems, Computer Networks",
    Award:
        "President’s Research Award, for participating in the development of CheckFramework that detects potential type and security defects of Java code in code editors.",
};

const skillDetails = {
    Languages: "Python, Go, Java, JavaScript, C/C++",
    Tools: "AWS, Terraform, Docker, Git, Jira",
    Hobbies: "Piano, Basketball, Video Editing",
};

const resume = () => {
    let education = [],
        skills = [];
    for (const [key, value] of Object.entries(educationDetails))
        education.push(<BulletPoint key={key} name={key} content={value} />);

    for (const [key, value] of Object.entries(skillDetails))
        skills.push(<BulletPoint key={key} name={key} content={value} />);

    return (
        <Container>
            <div className={classes.Resume}>
                <div className={classes.Section} id="education">
                    <div className={classes.Heading}>Education</div>
                    <hr className={classes.LineBreak}></hr>
                    <div className={classes.MetaData}>
                        <div>University of Waterloo</div>
                        <div>Waterloo, ON</div>
                        <div>Sept.2016 - Apr. 2021</div>
                    </div>
                    <div>
                        <ul>{education}</ul>
                    </div>
                </div>

                <div className={classes.Section} id="skills">
                    <div className={classes.Heading}>Skills</div>
                    <hr className={classes.LineBreak}></hr>
                    <div>
                        <ul>{skills}</ul>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default resume;
