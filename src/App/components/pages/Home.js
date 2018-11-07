// this is where you select character or ship. i need to come up with a better name

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
    minWidth: theme.spacing.unit * 29
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

      <Grid
        container
        alignItems="center"
        direction="row"
        justify="center"
        className={classes.root}
        spacing={16}
      >
        <Grid item xs={12} sm={6}>
          <Paper className={`${classes.paperTop} ${classes.Paper}`}>
            <Typography variant="h3" color="secondary">
              Alpha Dawn
            </Typography>
            <Typography className={classes.Typography} variant="h6">
              Character Creation
            </Typography>
            <Typography variant="caption">UNDER CONSTRUCTION</Typography>
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
        <Grid item xs={12} sm={6}>
          <Paper className={`${classes.paperTop} ${classes.Paper}`}>
            <Typography variant="h3" color="secondary">
              Knight Hawks
            </Typography>
            <Typography className={classes.Typography} variant="h6">
              Starship Creation
            </Typography>
            <Typography variant="caption">C.R.U.D: Go Here!!!</Typography>
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
    </React.Fragment>
  );
}

Selection.prototype = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Selection);
