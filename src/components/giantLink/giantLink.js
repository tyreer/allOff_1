import React from "react";
import "./giantLink.css";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const GiantLink = ({ activeLink }) => {
  const labels = [];
  let count = 0;
  let limit = getRandomInt(1, 3);

  while (count < limit) {
    labels.push(count);
    count++;
  }

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
      {labels.map(key => (
        <div
          key={key}
          style={{
            ...crazyStyles,
            transform: `rotate(${getRandomInt(-70, 70)}deg)`
          }}
          className="labelOuterContainer"
        >
          <div className="labelInnerContainer">{activeLink.text}</div>
        </div>
      ))}
    </>
  );
};

export default GiantLink;
