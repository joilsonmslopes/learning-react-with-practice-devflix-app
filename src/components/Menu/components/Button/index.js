import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ href, className, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  href: '',
  className: '',
  children: '',
};

ButtonLink.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.string,
};

export default ButtonLink;
