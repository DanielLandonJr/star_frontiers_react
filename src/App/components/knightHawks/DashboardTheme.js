const drawerWidth = 290;

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
    flexGrow: 1,
    color: theme.palette.secondary.main
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
    padding: theme.spacing.unit,
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    // height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 1.6
  },
  paperContent: {
    padding: theme.spacing.unit
  }
});

export const DashboardTheme = styles;
