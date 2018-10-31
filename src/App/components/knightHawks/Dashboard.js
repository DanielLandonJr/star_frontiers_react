// most of this code is bolier plate from material-ui for a dashboard

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Drawer, AppBar, Toolbar, Paper } from '@material-ui/core';
import { IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItems from './ListItems';

import Ships from './Ships';
import Warehouse from './warehouse/Warehouse';
import About from './About';
import { Consumer } from '../../data/Context';

import { DashboardTheme } from './DashboardTheme';

const styles = DashboardTheme;

class Dashboard extends React.Component {
  state = {
    open: true,
    showing: 'ships'
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChildPropChange = childData => {
    this.setState({ showing: childData });
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <div className={classes.root}>
                <AppBar
                  position="absolute"
                  className={classNames(
                    classes.appBar,
                    this.state.open && classes.appBarShift
                  )}
                >
                  <Toolbar
                    disableGutters={!this.state.open}
                    className={classes.toolbar}
                  >
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={this.handleDrawerOpen}
                      className={classNames(
                        classes.menuButton,
                        this.state.open && classes.menuButtonHidden
                      )}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography
                      component="h1"
                      variant="h4"
                      noWrap
                      className={classes.title}
                    >
                      Knight Hawks
                    </Typography>
                  </Toolbar>
                </AppBar>
                <Drawer
                  variant="permanent"
                  classes={{
                    paper: classNames(
                      classes.drawerPaper,
                      !this.state.open && classes.drawerPaperClose
                    )
                  }}
                  open={this.state.open}
                >
                  <div className={classes.toolbarIcon}>
                    <IconButton onClick={this.handleDrawerClose}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </div>
                  <ListItems callBack={this.handleChildPropChange} />
                </Drawer>
                <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                  <Paper className={classes.paperContent}>
                    {/* which component is showing... */}
                    {this.state.showing === 'ships' ? <Ships /> : null}
                    {this.state.showing === 'warehouse' ? <Warehouse /> : null}
                    {this.state.showing === 'about' ? <About /> : null}
                  </Paper>
                </main>
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
