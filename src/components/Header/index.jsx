import { useState, useCallback } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Logo from './Logo';
import Menu from './Menu';
import Search from './Search';
import Settings from './Settings';
import Theme from './Theme';
import DrawerButton from './DrawerButton';
import Drawer from './Drawer';

function Header() {
  const [open, setOpen] = useState(false);

  const getDrawerOpenProps = useCallback(() => {
    return {
      onClick: (callback) => {
        setOpen(true);
        if (typeof callback === 'function') callback();
      },
    };
  }, [setOpen]);

  const getDrawerCloseProps = useCallback(() => {
    return {
      onClick: (callback) => {
        setOpen(false);
        if (typeof callback === 'function') callback();
      },
    };
  }, [setOpen]);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <DrawerButton open={open} getDrawerOpenProps={getDrawerOpenProps} />
            <Logo />
            <Menu />
            <Search />
            <Theme />
            <Settings />
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer open={open} getDrawerCloseProps={getDrawerCloseProps} />
    </>
  );
}
export default Header;
