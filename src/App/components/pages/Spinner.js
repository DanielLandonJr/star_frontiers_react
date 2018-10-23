import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles, Grid } from '@material-ui/core';
import { CircularProgress, Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  Paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progress: {
    margin: theme.spacing.unit
  }
});

function Spinner(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container className={classes.root} justify="center">
        <Grid item>
          <Paper className={classes.Paper}>
            <CircularProgress
              className={classes.progress}
              size={100}
              thickness={2}
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Spinner.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Spinner);
