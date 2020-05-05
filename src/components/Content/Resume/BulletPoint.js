import React from "react";

const bulletPoint = (props) => {
    return (
        <li>
            <p>
                <strong>{props.name}: </strong>
                {props.content}
            </p>
        </li>
    );
};

export default bulletPoint;
