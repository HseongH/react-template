import React from 'react';
import { FormControl as BootstrapFormControl } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const classList = classNames.bind(styles);

function FormControl({ classnames }) {
  return <BootstrapFormControl className={classList('form-control', classnames)} />;
}

FormControl.defaultProps = {
  classnames: null,
};

export default FormControl;
