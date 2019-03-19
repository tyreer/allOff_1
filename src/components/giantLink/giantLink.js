import React from "react";
import "./giantLink.css";
import { useTrail, animated, config, useSpring } from "react-spring";

const rotations = [
  { id: 0, rotate: "-45deg" },
  { id: 1, rotate: "30deg" },
  { id: 2, rotate: "-20deg" }
];

const GiantLink = ({ activeLink = 0 }) => {
  const letters = activeLink.text.split("");

  const [offset, set] = useSpring(() => ({
    from: { transform: "translate(-50%, -50%) rotate(-10deg)" },
    to: {
      transform: `translate(-40%, -65%) rotate(${
        rotations[activeLink.id - 1].rotate
      })`
    },
    config: config.molasses
  }));

  const trail = useTrail(letters.length, {
    config: { mass: 1, tension: 200, friction: 15 },
    from: { transform: "scale(0) rotate(80deg)" },
    to: { transform: "scale(1) rotate(0)" }
  });

  return (
    <>
      <animated.div
        className={`bg bg-${activeLink.id}`}
        style={{ transform: offset.transform }}
      />
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
    </>
  );
};

export default GiantLink;
