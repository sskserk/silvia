import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'; // You can remove this if you don't use react-router

export default function TopMenu() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo or Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        {/* Menu Items */}
        <Button color="inherit" component={RouterLink} to="/">
          Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/about">
          About
        </Button>
        <Button color="inherit" component={RouterLink} to="/profile">
          Profile
        </Button>
        <Button color="inherit" component={RouterLink} to="/settings">
          Settings
        </Button>
      </Toolbar>
    </AppBar>
  );
}