import { ThemeProvider } from 'react-bootstrap';
import PropTypes from 'prop-types';

import 'normalize.css';
import './application.scss';

function GlobalStyle({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;
