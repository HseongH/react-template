import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from '@/components/Header/Logo';
import Menu from '@/components/Header/Menu';
import Search from '@/components/Header/Search';
import Settings from '@/components/Header/Settings';

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />

          <Menu />

          <Search />

          <Settings />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
