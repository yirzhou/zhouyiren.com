import React from "react";
import Content from "../Content";
import Video from "./Video";
import classes from "./Videos.module.css";

const content = [
    {
        src: "https://www.youtube.com/embed/vm8FK9tal6o",
        frameBorder: "0",
        allow:
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        title: "Importance of Synchronisation",
        description: (
            <p>
                In a high-school English presentation back in 2014, I discussed
                the my personal video editing experience and made this to
                showcase the power of syncing audio with graphics. This was also
                my first time of using <em>Cinema 4D</em> to create 3D text
                objects to augment the reality.
            </p>
        ),
    },
    {
        src: "https://www.youtube.com/embed/_UZVw0Uk9Z0",
        frameBorder: "0",
        allow:
            "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        title: "Being by Kevin Brooks - A Personification",
        description: (
            <p>
                In high school, I read a science fiction called "Being" by Kevin
                Brooks about a boy who "discovers he's not one hundred percent
                human". I thought it would be great to make an animated video
                about it. I was into "Team Fortress 2" at the time and decided
                to use characters from the game to personify the novel. I ended
                up spending <em>20 hours</em> learning the{" "}
                <em>Source Filmmaker</em> just for making this video!
            </p>
        ),
    },
];

const videos = () => {
    let frames = [];
    for (let obj of content)
        frames.push(
            <Video
                key={obj.src}
                src={obj.src}
                frameBorder={obj.frameBorder}
                allow={obj.allow}
                title={obj.title}
                meta={obj.description}
            />
        );
    return (
        <Content>
            <div className={classes.Wrapper}>{frames}</div>
        </Content>
    );
};

export default React.memo(videos);
