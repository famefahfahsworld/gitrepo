import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class Button extends Component {
  render() {
    const { to, label } = this.props;
    return (
      <div className="flex">
        <Link to={to} className="rounded-full leading-loose text-sm font-bold text-gray-darken hover:text-white bg-gray-lighten hover:bg-gray-base border border-gray-light px-4 py-2 w-full text-center">
          {label}
        </Link>
      </div>
    );
  }
}

Button.propTypes = {
  to: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default Button;
