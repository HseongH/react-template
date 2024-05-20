/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const classList = classNames.bind(styles);

function Label({ variant, children }) {
  return <label className={classList('label', variant)}>{children}</label>;
}

Label.defaultProps = {
  variant: null,
};

export default Label;
