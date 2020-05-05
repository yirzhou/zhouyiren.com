import React from "react";
import Content from "../Content";
import Projects from "../Projects/Projects";

const intro = () => {
    return (
        <Content>
            <p style={{ fontSize: "18pt" }}>Stuff I built</p>
            <Projects />
        </Content>
    );
};

export default intro;
