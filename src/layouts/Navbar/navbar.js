import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import { Icon } from "../../components";

const Navbar = props => {
  const classes = {
    default: {
      section: "flex items-center justify-between p-2",
      actions: "flex items-center justify-center",
      action: "text-3xl mx-1.5"
    }
  };

  return (
    <section className={classes[props.theme].section}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={classes[props.theme].actions}>
        <Link to="/" className={classes[props.theme].action}>
          <Icon icon="cart" />
        </Link>
        <a href="/" className={classes[props.theme].action}>
          <Icon icon="menu" />
        </a>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  theme: PropTypes.string
};

Navbar.defaultProps = {
  theme: "default"
};

export default Navbar;
