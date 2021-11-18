/* eslint-disable jsx-a11y/alt-text */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../imagens/logoTheLook.png';
//import { makeStyles } from '@mui/styles';

/*const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: "1px",
        marginBottom: "5rem",
    },
    AppBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "none",
    },
    grow: {
        flexGrow: "1px",


    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRigth: "10px",
        height: "1rem",
    },
}));*/
export default function NavBar() {
  //const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo}  />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
