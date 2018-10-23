// i converted the function to react functions...made more sense to me to do that. this is the list of items that show on the right side of the screen

import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Store';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Consumer } from '../../data/Context';
import * as Actions from '../../data/Actions';
import { Link } from 'react-router-dom';

export const HomeListItems = () => {
  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            <CssBaseline />
            <List>
              <ListItem
                button
                // reset what is showing so that ships is always open when you come back to this page
                onClick={() => {
                  const isShowing = {
                    charactersIsShowing: true,
                    warehouseIsShowing: false,
                    aboutIsShowing: false
                  };
                  value.dispatch({
                    type: Actions.STATE_CHANGE_AD_SHOWING,
                    payload: isShowing
                  });
                }}
                // go to selection page
                component={Link}
                to="/home"
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </List>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export const MainListItems = () => {
  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            <CssBaseline />
            <List>
              <ListItem
                button
                // change what is showing in the state
                onClick={() => {
                  const isShowing = {
                    charactersIsShowing: true,
                    warehouseIsShowing: false,
                    aboutIsShowing: false
                  };
                  value.dispatch({
                    type: Actions.STATE_CHANGE_AD_SHOWING,
                    payload: isShowing
                  });
                }}
              >
                <ListItemIcon>
                  <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Characters" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  const isShowing = {
                    charactersIsShowing: false,
                    warehouseIsShowing: true,
                    aboutIsShowing: false
                  };
                  value.dispatch({
                    type: Actions.STATE_CHANGE_AD_SHOWING,
                    payload: isShowing
                  });
                }}
              >
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Warehouse" />
              </ListItem>
            </List>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export const SecondaryListItems = () => {
  return (
    <Consumer>
      {value => {
        return (
          <React.Fragment>
            <CssBaseline />
            <List component="nav">
              <ListItem
                button
                onClick={() => {
                  const isShowing = {
                    charactersIsShowing: false,
                    warehouseIsShowing: false,
                    aboutIsShowing: true
                  };
                  value.dispatch({
                    type: Actions.STATE_CHANGE_AD_SHOWING,
                    payload: isShowing
                  });
                }}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItem>
            </List>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};
