import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const classList = classNames.bind(styles);

function Heading({ variant, children }) {
  const HeadingTag = variant;

  return <HeadingTag className={classList(variant)}>{children}</HeadingTag>;
}

export default Heading;
