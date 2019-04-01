import React, { Component } from "react";
import { Link } from "gatsby";
import "./tinyLinks.css";

class TinyLink extends Component {
  handleMouseOver = () => {
    this.props.setActive(this.props.link);
  };

  handleMouseOut = () => {
    this.props.setActive(null);
    this.props.setCounter();
  };

  render() {
    const { text, to } = this.props;
    return (
      <Link
        to={to}
        className={"tinyLink"}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        {text}
      </Link>
    );
  }
}

export default TinyLink;
