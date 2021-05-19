import React from 'react';
import PropTypes from 'prop-types';
import {
  BiCart,
  BiCubeAlt,
  BiMenu,
  BiUser
} from 'react-icons/bi';
import {
  FiMail,
  FiInstagram
} from 'react-icons/fi';
import {
SiFacebook,
} from 'react-icons/si';
import {
ImTwitter,
ImYoutube
} from 'react-icons/im';

const Icon = props => {
  switch (props.icon) {
    case 'cart':
      return <BiCart size={props.size} color={props.color} />;
    case 'menu':
      return <BiMenu size={props.size} color={props.color} />;
    case 'user':
      return <BiUser size={props.size} color={props.color} />;
    case 'mail':
      return <FiMail size={props.size} color={props.color} />;
    case 'facebook':
      return <SiFacebook size={props.size} color={props.color} />;
    case 'instagram':
      return <FiInstagram size={props.size} color={props.color} />;
    case 'twitter':
      return <ImTwitter size={props.size} color={props.color} />;
    case 'youtube' :
      return <ImYoutube size={props.size} color={props.color} />;
    default:
      return <BiCubeAlt size={props.size} color={props.color} />;
  };
};


Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: '1em',
  color: '#454545',
};

export default Icon;
