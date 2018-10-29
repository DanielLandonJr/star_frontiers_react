// this class is used to seperate the large layout for the left hand menu listing from the dashboard

import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Store';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Consumer } from '../../data/Context';
import { Link } from 'react-router-dom';

const styles = theme => ({
  divider: {
    background: theme.palette.secondary.dark
  },
  popover: {
    pointerEvents: 'none'
  },
  paper: {
    padding: theme.spacing.unit
  }
});

class ListItems extends React.Component {
  state = {
    // used to show which item is currently selected
    selectedIndex: 1
  };

  // update state to show which item is currently selected
  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  };

  // this is a function that calls the callBack passed in the props. it is used to tell the dashboard what was selected in the list
  sendToParent = whatIsShowing => {
    this.props.callBack(whatIsShowing);
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <List>
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
              </List>

              <Divider className={classes.divider} />

              <List>
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
              </List>

              <Divider className={classes.divider} />

              <List component="nav">
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

export default withStyles(styles)(ListItems);
