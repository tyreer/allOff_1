import React from "react";
import "./giantLink.css";
import { useTrail, animated, config, useSpring } from "react-spring";

const rotations = [
  { id: 0, rotate: "20deg" },
  { id: 1, rotate: "15eg" },
  { id: 2, rotate: "10deg" }
];

const GiantLink = ({ activeLink = 0 }) => {
  const letters = activeLink.text.split("");

  // const [offset, set] = useSpring(() => ({
  //   from: { transform: "translateX(-20vw) rotate(-1deg)" },
  //   to: {
  //     transform: `translateX(0) rotate(${rotations[activeLink.id - 1].rotate})`
  //   },
  //   config: config.stiff
  // }));

  const trail = useTrail(letters.length, {
    // config: { mass: 1, tension: 200, friction: 15 },
    config: config.stiff,
    from: { transform: "translateY(50vh)", opacity: "0" },
    transform: "translateY(-5vh)",
    opacity: 1
  });

  // const wordArr = [];
  // for (let x = 0; x < 1; x++) {
  //   wordArr.push(activeLink.text);
  // }

  return (
    <>
      {/* <animated.div style={offset} className={`bg bg-${activeLink.id}`}>
        {wordArr.map((w, index) => (
          <span style={{ color: index % 2 === 0 ? "#404b69" : "#f73859" }}>
            {w}
          </span>
        ))}
      </animated.div> */}
      <div className={"giantContainer"}>
        {trail.map(({ ...rest }, index) => (
          <animated.div
            key={index}
            style={{
              ...rest
            }}
          >
            <span style={{ color: index % 2 === 0 ? "#404b69" : "#f73859" }}>
              {letters[index]}
            </span>
          </animated.div>
        ))}
      </div>

      {/* <div className={"root"}>
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
      </div> */}
    </>
  );
};

export default GiantLink;
