// this class is used to seperate the large layout for the left hand menu listing from the dashboard

import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {
  Divider,
  Tooltip,
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Store';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Consumer } from '../../data/Context';
import { Link } from 'react-router-dom';
import RestoreIcon from '@material-ui/icons/Restore';

const styles = theme => ({
  secondaryDark: {
    background: theme.palette.secondary.dark
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing.unit
  },
  bottomNav: {
    width: '100%'
  }
});

class ListItems extends React.Component {
  state = {
    // used to show which item is currently selected, default to about
    selectedIndex: 2,
    value: 0
  };

  // update state to show which item is currently selected
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  // this is a function that calls the callBack passed in the props. it is used to tell the dashboard what was selected in the list
  sendToParent = whatIsShowing => {
    this.props.callBack(whatIsShowing);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />

              <Divider className={classes.secondaryDark} />
              <List>
                <Tooltip title="Home" placement="right">
                  <ListItem
                    button
                    // go to selection page
                    component={Link}
                    to="/home"
                  >
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                </Tooltip>

                <Divider className={classes.secondaryDark} />

                <Tooltip title="Ships" placement="right">
                  <ListItem
                    button
                    selected={this.state.selectedIndex === 1}
                    // change what is showing
                    onClick={event => {
                      this.handleListItemClick(event, 1);
                      this.sendToParent('ships');
                    }}
                  >
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ships" />
                  </ListItem>
                </Tooltip>

                <Tooltip title="Warehouse" placement="right">
                  <ListItem
                    button
                    selected={this.state.selectedIndex === 2}
                    // change what is showing
                    onClick={event => {
                      this.handleListItemClick(event, 2);
                      this.sendToParent('warehouse');
                    }}
                  >
                    <ListItemIcon>
                      <ShoppingCartIcon />
                    </ListItemIcon>
                    <ListItemText primary="Warehouse" />
                  </ListItem>
                </Tooltip>

                <Divider className={classes.secondaryDark} />

                <Tooltip title="About" placement="right">
                  <ListItem
                    button
                    selected={this.state.selectedIndex === 3}
                    // change what is showing
                    onClick={event => {
                      this.handleListItemClick(event, 3);
                      this.sendToParent('about');
                    }}
                  >
                    <ListItemIcon>
                      <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                  </ListItem>
                </Tooltip>

                <BottomNavigation
                  value={value}
                  onChange={this.handleChange}
                  showLabels
                  className={classes.bottomNav}
                >
                  <Tooltip title="GitHub Repo" placement="right">
                    <BottomNavigationAction
                      label="GitHub"
                      icon={<RestoreIcon />}
                    />
                  </Tooltip>
                </BottomNavigation>
              </List>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

ListItems.propTypes = {
  callBack: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ListItems);
