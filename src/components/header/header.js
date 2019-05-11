import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import TinyLink from "../tinyLink/tinyLink";
import GiantLink from "../giantLink/giantLink";
import "./header.css";
import image_1 from "../../images/perpendicular-lights-1200.png";
import image_2 from "../../images/sweatshirt_750.png";
import image_3 from "../../images/lamp.png";
import image_4 from "../../images/chair.png";
import image_5 from "../../images/granite-wood.png";

const tinyLinks = [
  {
    id: 1,
    text: `home`,
    to: `/home`
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

class Header extends Component {
  state = { activeLink: null, counter: 0 };

  setActive = activeLink => {
    this.setState({
      activeLink
    });
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter === 10 ? 1 : this.state.counter + 1
    });
  };

  render() {
    const { siteTitle } = this.props;
    const { activeLink, counter } = this.state;

    return (
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
              setActive={this.setActive}
              incrementCounter={this.incrementCounter}
            />
          ))}
        </div>
        {activeLink && <GiantLink activeLink={activeLink} />}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`image image-${index + 1} imageSequence-${counter}`}
          />
        ))}
      </header>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
