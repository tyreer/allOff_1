import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
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

class Header extends Component {
  state = { activeLink: null };

  setActive = activeLink => {
    this.setState({ activeLink });
  };

  render() {
    const { siteTitle } = this.props;
    const { activeLink } = this.state;

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
          {tinyLinks.map(tiny => (
            <TinyLink
              key={tiny.id}
              text={tiny.text}
              to={tiny.to}
              setActive={this.setActive}
            />
          ))}
        </div>
        {activeLink && <GiantLink activeLink={activeLink} />}

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
