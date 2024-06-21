import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './Loader.module.scss';

function Loader({ className, size }) {
  return (
    <div className={cx(s.root, className)}>
      <i className="la la-spinner la-spin" style={{ fontSize: size }} />
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};

Loader.defaultProps = {
  size: 21,
};

export default Loader;
