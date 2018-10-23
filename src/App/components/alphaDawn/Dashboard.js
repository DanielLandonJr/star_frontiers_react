// most of this code is bolier plate from material-ui for a dashboard

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CssBaseline, withStyles, Typography } from '@material-ui/core';
import { Drawer, AppBar, Toolbar } from '@material-ui/core';
import { Divider, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { HomeListItems, MainListItems, SecondaryListItems } from './listItems';
// import SimpleLineChart from './SimpleLineChart';
// import SimpleTable from './SimpleTable';

import Characters from './Characters';
import Warehouse from './warehouse/Warehouse';
import About from './About';
import { Consumer } from '../../data/Context';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: theme.spacing.unit * 2.4 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: theme.spacing.unit * 1.2,
    marginRight: theme.spacing.unit * 3.6
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 5.6,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 7.2
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2.4,
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 1.6
  }
});

class Dashboard extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
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
                      color="secondary"
                      noWrap
                      className={classes.title}
                    >
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
                  <div className={classes.toolbarIcon}>
                    <IconButton onClick={this.handleDrawerClose}>
                      <ChevronLeftIcon />
                    </IconButton>
                  </div>
                  <Divider />
                  <HomeListItems />
                  <Divider />
                  <MainListItems />
                  <Divider />
                  <SecondaryListItems />
                </Drawer>
                <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                  {/* which component is showing...based on value from state */}
                  {value.ad_showing.charactersIsShowing ? <Characters /> : null}
                  {value.ad_showing.warehouseIsShowing ? <Warehouse /> : null}
                  {value.ad_showing.aboutIsShowing ? <About /> : null}
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
