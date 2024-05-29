import { ThemeProvider } from 'react-bootstrap';
import PropTypes from 'prop-types';

// init
import 'normalize.css';
import './style.scss';

function GlobalStyle({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

GlobalStyle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStyle;
