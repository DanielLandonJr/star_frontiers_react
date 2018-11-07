// information about created/modified data etc...will be part of each individual componet so made a seperate componet for it

import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Grid, Typography, Tooltip } from '@material-ui/core';

const styles = theme => ({
  gridContainer: {},
  gridItem: {},
  secondaryDark: {
    backgroundColor: theme.palette.secondary.dark
  },
  secondaryDarkText: {
    color: theme.palette.secondary.dark
  }
});

function CreatedInformation(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={8} className={classes.root}>
        {/* create name/date */}
        <Grid item xs={12} sm={6}>
          <Tooltip title="Date Created" placement="top-start">
            <Typography variant="caption" gutterBottom>
              <span className={classes.secondaryDarkText}>created on:</span>{' '}
              {Date(props.createdOn)}
            </Typography>
          </Tooltip>
          <Tooltip title="Person That Created Record" placement="top-start">
            <Typography variant="caption">
              <span className={classes.secondaryDarkText}>created by:</span>{' '}
              {props.createdBy}
            </Typography>
          </Tooltip>
        </Grid>
        {/* modify name/date */}
        <Grid item xs={12} sm={6}>
          <Tooltip title="Date Last Modified" placement="top-start">
            <Typography variant="caption" gutterBottom>
              <span className={classes.secondaryDarkText}>modified on:</span>{' '}
              {Date(props.modifiedOn)}
            </Typography>
          </Tooltip>
          <Tooltip title="Person That Modified Record" placement="top-start">
            <Typography variant="caption">
              <span className={classes.secondaryDarkText}>modified by:</span>{' '}
              {props.modifiedBy}
            </Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

CreatedInformation.propTypes = {
  classes: PropTypes.object.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdOn: PropTypes.number.isRequired,
  modifiedBy: PropTypes.string.isRequired,
  modifiedOn: PropTypes.number.isRequired
};

export default withStyles(styles, { withTheme: true })(CreatedInformation);
