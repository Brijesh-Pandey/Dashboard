/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from 'react';
import { useHistory } from "react-router";

import MenuIcon from '@material-ui/icons/Menu';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Button,
  MenuItem
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menu: {
    marginLeft: theme.spacing(0),
  }
}));

const Dashboard = ({
  isLoading,
  user,
  openMenu,
  setOpenMenu,
  handleLogout,
  showSidePanel,
  setShowSidePanel
}) => {

  const classes = useStyles();

  const history = useHistory();

  const handleClose = () => {
    setOpenMenu(!openMenu);
  };

  const panelList = [
    {
      text: "Your Tasks",
      routePath: "todo"
    },
    {
      text: "Chat Room",
      routePath: "chat"
    },
    {
      text: "Games",
      routePath: "games"
    }
  ]

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon
              onClick={() => setShowSidePanel(!showSidePanel)}
            />
            <Drawer
              anchor="left"
              open={showSidePanel}
              onClose={() => setShowSidePanel(!showSidePanel)}
              transitionDuration={300}
            >
              <List>
                {
                  panelList.map((item, index) => {
                    const {
                      text,
                      routePath
                    } = item;
                    return (
                      <ListItem
                        button
                        key={text}
                        onClick={() => {
                          history.push(routePath);
                          setShowSidePanel(!showSidePanel);
                        }}
                      >
                        <ListItemText primary={text} />
                        <Divider />
                      </ListItem>
                    );
                  })
                }
              </List>
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Dashboard
          </Typography>
          <Button
            color="inherit"
            onClick={(event) => setOpenMenu(event.currentTarget)}
            endIcon={<KeyboardArrowDownIcon />}
          >Hi {user.name}</Button>
          <Menu
            id="menu"
            open={Boolean(openMenu)}
            onClose={handleClose}
            className={classes.menu}
            anchorEl={openMenu}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Dashboard;
