import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function DrawerButton({ open, getDrawerOpenProps }) {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      {...getDrawerOpenProps()}
      edge="start"
      sx={{ mr: 2, ...(open && { display: 'none' }) }}
    >
      <MenuIcon />
    </IconButton>
  );
}

DrawerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  getDrawerOpenProps: PropTypes.func.isRequired,
};

export default DrawerButton;
