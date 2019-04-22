import React from "react";
import "./giantLink.css";
import { useTrail, animated, config } from "react-spring";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const GiantLink = ({ activeLink }) => {
  const letters = activeLink.text.split("");

  let yValue;

  switch (activeLink.id) {
    case 1:
      yValue = "translateY(50vh)";
      break;
    case 2:
      yValue = "translateY(-50vh)";
      break;
    case 3:
      yValue = "translateY(50vh)";
      break;
  }

  const trailLength = getRandomInt(1, 4);

  const trail = useTrail(trailLength, {
    // config: { mass: 1, tension: 200, friction: 15 },
    config: config.stiff,
    from: { transform: `${yValue} translateX(-50%)`, opacity: "0" },
    transform: "translateY(0) translateX(-50%)",
    opacity: 1
  });

  let crazyStyles;

  switch (activeLink.id) {
    case 1:
      crazyStyles = {
        bottom: `${getRandomInt(10, 20)}vh`
      };
      break;
    case 2:
      crazyStyles = {
        bottom: `${getRandomInt(20, 40)}vh`,
        left: ` ${getRandomInt(20, 30)}%`
      };
      break;
    case 3:
      crazyStyles = {
        bottom: `${getRandomInt(40, 50)}vh`,
        left: ` ${getRandomInt(65, 75)}%`
      };
      break;
  }

  return (
    <>
      {trail.map((trailAnimation, index) => (
        <div
          style={{
            ...crazyStyles,
            transform: `rotate(${getRandomInt(-60, 60)}deg)`
          }}
          className="outer"
        >
          <animated.div
            key={index}
            style={{
              ...trailAnimation,
              bottom: `${index * 25}px`
            }}
            className="letterContainer"
          >
            {activeLink.text}
          </animated.div>
        </div>
      ))}
    </>
  );
};

export default GiantLink;
