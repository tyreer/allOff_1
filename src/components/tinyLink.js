import React from "react";
import "./tinyLinks.css";

const TinyLink = ({
  setActive,
  text,
  setIsActive,
  setCurrentIndex,
  currentIndex,
  setOffset,
  index
}) => {
  const handleMouseOver = () => {
    setIsActive(true);
    setActive(currentIndex);
    setOffset(index);
  };

  const handleMouseOut = () => {
    setIsActive(false);
    const nextIndex = currentIndex < 15 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
  };

  return (
    <p
      className={"tinyLink"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
    </p>
  );
};

export default TinyLink;
