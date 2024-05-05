import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';

import AppBar from './AppBar';
import Logo from './Logo';
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
      <AppBar open={open}>
        <DrawerButton open={open} getDrawerOpenProps={getDrawerOpenProps} />

        <Stack width="100%" direction="row" justifyContent="space-between">
          <Logo />

          <Stack direction="row">
            <Search />
            <Theme />
            <Settings />
          </Stack>
        </Stack>
      </AppBar>

      <Drawer open={open} getDrawerCloseProps={getDrawerCloseProps} />
    </>
  );
}
export default Header;
