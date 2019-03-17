import React from "react";
import "./giantLink.css";
import { useTrail, animated, config } from "react-spring";

const GiantLink = ({ activeLink }) => {
  const letters = activeLink.split("");

  // config: { mass: 1, tension: 150, friction: 13 },
  // config: { mass: 1, tension: 170, friction: 13 },

  // from: { opacity: 0, transform: ["scale(0), rotate(-10deg)"] },
  // to: { opacity: 1, transform: ["scale(1), rotate(0)"] }

  const trail = useTrail(letters.length, {
    config: { mass: 1, tension: 200, friction: 15 },
    from: { transform: "scale(0) rotate(80deg)" },
    to: { transform: "scale(1) rotate(0)" }
  });

  return (
    <div className={"root"}>
      {trail.map(({ ...rest }, index) => (
        <animated.div
          key={index}
          style={{
            ...rest
          }}
        >
          <p className={"letter"}>{letters[index]}</p>
        </animated.div>
      ))}
    </div>
  );
};

export default GiantLink;
