// dashboard...everything is controlled from here

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Drawer, AppBar, Toolbar, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItems from './ListItems';
import About from './About';
import { DashboardTheme } from './DashboardTheme';

const styles = DashboardTheme;

class Dashboard extends React.Component {
  state = {
    // side drawer is closed
    open: false,
    // what is showing, default to about
    showing: 'about'
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
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap className={classes.brand}>
              Alpha Dawn
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
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>

          {/* items that show in the list on the left */}
          <ListItems callBack={this.handleChildPropChange} />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          {/* what item is showing based on what was selected in the side menu */}

          {/* which component is showing... */}
          {this.state.showing === 'characters' ? (
            <Typography variant="h3">Characters Under Construction.</Typography>
          ) : null}
          {this.state.showing === 'warehouse' ? (
            <Typography variant="h3">Warehouse Under Construction.</Typography>
          ) : null}
          {this.state.showing === 'about' ? <About /> : null}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Dashboard);
