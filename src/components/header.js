import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import TinyLink from "./tinyLink";
import GiantLink from "./giantLink/giantLink";

const tinyLinks = [
  {
    id: 1,
    text: `rubbish`,
    to: `/rubbish`
  },
  {
    id: 2,
    text: `trash`,
    to: `/trash`
  },
  {
    id: 3,
    text: `Ferrero Rocher`,
    to: `/ferrero-rocher`
  }
];

const sentence = [
  { id: 0, text: "IBM" },
  { id: 1, text: "estimates" },
  { id: 2, text: "that" },
  { id: 3, text: "90%" },
  { id: 4, text: "of" },
  { id: 5, text: "all" },
  { id: 6, text: "the" },
  { id: 7, text: "digital" },
  { id: 8, text: "data" },
  { id: 9, text: "in" },
  { id: 10, text: "the" },
  { id: 11, text: "world" },
  { id: 12, text: "was" },
  { id: 13, text: "created" },
  { id: 14, text: "from" },
  { id: 15, text: "2015-2017" }
];

const Header = ({ siteTitle }) => {
  const [activeLink, setActiveLink] = useState(-1);
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const startingIndex = currentIndex < 15 ? currentIndex : 0;
  const currentLinks = sentence.slice(startingIndex, startingIndex + 3);

  return (
    <header
      style={{
        marginBottom: `1.45rem`
      }}
    >
      <div
        style={{
          padding: `1rem`
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              fontSize: `0.75rem`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 666,
          display: `grid`,
          gridTemplateColumns: `1fr 1fr 1fr`,
          textAlign: `center`
        }}
      >
        {currentLinks.map((tiny, index) => (
          <TinyLink
            key={tiny.id}
            text={tiny.text}
            setActive={setActiveLink}
            setIsActive={setIsActive}
            activeLink={activeLink}
            setCurrentIndex={setCurrentIndex}
            currentIndex={currentIndex}
            setOffset={setOffset}
            index={index}
          />
        ))}
      </div>
      {isActive && (
        <GiantLink activeLink={sentence[activeLink + offset].text} />
      )}
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
