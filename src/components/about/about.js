import React from "react";
import imageSrc from "../../images/backpack.png";
import { animated, useSpring, config } from "react-spring";

import "./about.css";

const About = () => {
  const bgAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  const imgAnimation = useSpring({
    from: { transform: "translateY(100vh) translateX(-100vw)" },
    transform: "translateY(0) translateX(0)",
    delay: 300,
    config: config.stiff
  });

  return (
    <animated.div className="about" style={bgAnimation}>
      <animated.img className="img" style={imgAnimation} src={imageSrc} />
    </animated.div>
  );
};

export default About;
