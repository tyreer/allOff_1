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
  state = { activeLink: null, counter: 0 };

  setActive = activeLink => {
    this.setState({
      activeLink
    });
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter === 6 ? 1 : this.state.counter + 1
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
              incrementCounter={this.incrementCounter}
            />
          ))}
        </div>
        {activeLink && <GiantLink activeLink={activeLink} />}
        <div className={`image image-${counter}`} />
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
