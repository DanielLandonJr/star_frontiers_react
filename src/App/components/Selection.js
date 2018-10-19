import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles, Grid, Typography } from '@material-ui/core';

const styles = theme => ({});

class Selection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <Grid container>
          <Grid item className={classes.gridItems}>
            <Typography variant="h3">Left</Typography>
          </Grid>
          <Grid item className={classes.gridItems}>
            <Typography variant="h3">Right</Typography>
          </Grid>
          <Grid item className={classes.gridItems}>
            <Typography variant="h3">Center</Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Selection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Selection);
