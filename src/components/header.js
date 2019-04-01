import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import TinyLink from "./tinyLink";
import GiantLink from "./giantLink/giantLink";
import "./header.css";

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

class Header extends Component {
  state = { activeLink: null, counter: 1 };

  setActive = activeLink => {
    this.setState({
      activeLink
    });
  };

  setCounter = () => {
    this.setState({
      counter: this.state.counter === 3 ? 1 : this.state.counter + 1
    });
  };

  render() {
    const { siteTitle } = this.props;
    const { activeLink, counter } = this.state;

    return (
      <header>
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
        <div className="linkContainer">
          {tinyLinks.map(tiny => (
            <TinyLink
              key={tiny.id}
              text={tiny.text}
              to={tiny.to}
              link={tiny}
              setActive={this.setActive}
              setCounter={this.setCounter}
            />
          ))}
        </div>
        {activeLink && <GiantLink activeLink={activeLink} />}
        <div className={`image image-${counter}`} />

        {/* font-size: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25%;
  */}
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
