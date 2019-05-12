import React from "react";
import { Link } from "gatsby";
import "./tinyLinks.css";

const TinyLink = ({ setActiveLink, counter, setCounter, link, text, to }) => {
  const handleMouseOver = () => {
    setActiveLink(link);
    setCounter(counter === 10 ? 1 : counter + 1);
  };

  const handleMouseOut = () => {
    setActiveLink(null);
    setCounter(counter === 10 ? 1 : counter + 1);
  };

  return (
    <Link
      to={to}
      className={"tinyLink"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {text}
    </Link>
  );
};

export default TinyLink;
