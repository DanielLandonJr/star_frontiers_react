// this is where you select character or ship createBreakpoints. i need to come up with a better name

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Grid, Typography, Paper, Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  Paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px`,
    minWidth: theme.spacing.unit * 33
  },
  paperTop: {
    marginTop: theme.spacing.unit * 8
  },
  Typography: {
    marginTop: theme.spacing.unit
  },
  Button: {
    marginTop: theme.spacing.unit * 3
  }
});

function Selection(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.root}>
        <Grid
          container
          spacing={16}
          alignItems="center"
          direction="row"
          justify="center"
        >
          <Grid item>
            <Paper className={`${classes.paperTop} ${classes.Paper}`}>
              <Typography variant="h3" color="secondary">
                Alpha Dawn
              </Typography>
              <Typography className={classes.Typography} variant="h6">
                Character Creation
              </Typography>
              <Typography>
                Stage 1: This is a stage 4 component...placeholder components
                for now.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.Button}
                component={Link}
                to="alphadawn/dashboard"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={`${classes.paperTop} ${classes.Paper}`}>
              <Typography variant="h3" color="secondary">
                Knight Hawks
              </Typography>
              <Typography className={classes.Typography} variant="h6">
                Starship Creation
              </Typography>
              <Typography>
                Stage 1: C.R.U.D manipulation of various collection from
                FireBase/FireStore
              </Typography>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.Button}
                component={Link}
                to="knighthawks/dashboard"
              >
                Enter
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Selection.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Selection);
