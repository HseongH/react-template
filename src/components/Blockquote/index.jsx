import classNames from 'classnames/bind';
import styles from './style.module.scss';

const classList = classNames.bind(styles);

function Blockquote({ size, direction, children }) {
  return <blockquote className={classList('blockquote', size, direction)}>{children}</blockquote>;
}

export default Blockquote;
