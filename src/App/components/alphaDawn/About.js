// about component for alpha dawn

import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';

const styles = theme => ({
  paperContent: {
    padding: theme.spacing.unit
  },
  secondaryDark: {
    color: theme.palette.secondary.dark
  }
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper className={classes.paperContent}>
        <Typography variant="h6" className={classes.secondaryDark}>
          About Alpha Dawn
        </Typography>
        <br />
        <br />
        <Typography variant="body1" gutterBottom>
          Knight Hawks belongs to Wizards of the Coast. This application is for
          educational purposes only.
        </Typography>
        <br />
        <Typography variant="h3" gutterBottom>
          Under Construction
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(About);
