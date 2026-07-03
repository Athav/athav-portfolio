// import { AppBar, Button, Stack, type ButtonProps } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@mui/material/styles';
import './App.css'
// import { Routes, Route } from 'react-router';
// import { purple, orange } from '@mui/material/colors';

import { theme as appTheme } from "./theme/theme.ts";
// import { styled } from '@mui/material/styles';
// import { useNavigate } from "react-router";
// import Home from './pages/Home.tsx';
// import About from './pages/About.tsx';
import Portfolio from './pages/Portfolio.tsx';

// const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
//   color: theme.palette.getContrastText(purple[500]),
//   backgroundColor: orange[500],
//   borderRadius: 20,
//   padding: 10,
//   minWidth: 100,
//   '&:hover': {
//     backgroundColor: purple[700],
//   },
// }));

function App() {
  // let navigate = useNavigate();
  // const handleNavigation = (path: string) => {
  //   if (path !== "null") navigate(path);
  // }
  return (
    <ThemeProvider theme={appTheme}>
      {/* <AppBar position="static" square={false} sx={{ borderRadius: 10 }}>
        <Toolbar variant="dense"
          sx={{ height: 60, pl: "10px !important", pr: "10px !important" }} >
          <IconButton edge="start" color="inherit" aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" }, }}>
            <MenuIcon />
          </IconButton>
          <Stack
            width={'100%'}
            direction="row"
            spacing={2}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              display: { xs: "none", md: "flex" },
            }}
          >
            <ColorButton variant="contained" onClick={() => { handleNavigation('/') }}>Home</ColorButton>
            <ColorButton variant="contained" onClick={() => { handleNavigation('/about') }}>About</ColorButton>
            <ColorButton variant="contained" onClick={() => { handleNavigation('null') }}>Service</ColorButton>
            <ColorButton variant="contained" onClick={() => { handleNavigation('null') }}>Projects</ColorButton>
            <ColorButton variant="contained" onClick={() => { handleNavigation('null') }}>Contact</ColorButton>
            <ColorButton variant="contained" onClick={() => { handleNavigation('null') }}>Resume</ColorButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
      <Portfolio />
    </ThemeProvider>
  )
}

export default App
