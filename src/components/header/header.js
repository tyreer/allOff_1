import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import TinyLink from "../tinyLink/tinyLink";
import GiantLink from "../giantLink/giantLink";
import image_1 from "../../images/perpendicular-lights-1200.png";
import image_2 from "../../images/sweatshirt_750.png";
import image_3 from "../../images/lamp.png";
import image_4 from "../../images/chair.png";
import image_5 from "../../images/granite-wood.png";

import { Location } from "@reach/router";

import "./header.css";

const tinyLinks = [
  {
    id: 1,
    text: `home`,
    to: `/`
  },
  {
    id: 2,
    text: `about`,
    to: `/about`
  },
  {
    id: 3,
    text: `contact`,
    to: `/contact`
  }
];

const images = [image_1, image_2, image_3, image_4, image_5];

const Header = ({ siteTitle }) => {
  const [activeLink, setActiveLink] = useState(null);
  const [counter, setCounter] = useState(0);

  return (
    <Location>
      {({ location }) => (
        <header>
          <h1 className="title">
            <Link to="/">{siteTitle}</Link>
          </h1>
          <div className="tinyLinkContainer">
            {tinyLinks.map(tiny => (
              <TinyLink
                key={tiny.id}
                text={tiny.text}
                to={tiny.to}
                link={tiny}
                setActiveLink={setActiveLink}
                counter={counter}
                setCounter={setCounter}
              />
            ))}
          </div>
          {activeLink && <GiantLink activeLink={activeLink} />}
          {location.pathname === "/" &&
            images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`random product ${index}`}
                className={`image image-${index + 1} imageSequence-${counter}`}
              />
            ))}
        </header>
      )}
    </Location>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
