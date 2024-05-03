import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useState } from 'react';

function Theme() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => setMode((state) => (state === 'light' ? 'dark' : 'light'));

  return (
    <IconButton sx={{ ml: 2 }} color="inherit" onClick={toggleMode}>
      {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}

export default Theme;
