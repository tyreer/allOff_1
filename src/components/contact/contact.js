import React from "react";
import imageSrc from "../../images/outdoor-equipment.png";
import { animated, useSpring, config } from "react-spring";

import "./contact.css";

const Contact = () => {
  const bgAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1
  });

  const imgAnimation = useSpring({
    from: { transform: "translateY(-100vh) translateX(100vw)" },
    transform: "translateY(0) translateX(0)",
    delay: 300,
    config: config.stiff
  });

  return (
    <animated.div className="contact" style={bgAnimation}>
      <animated.img className="img" style={imgAnimation} src={imageSrc} />
    </animated.div>
  );
};

export default Contact;
