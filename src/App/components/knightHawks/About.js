// about component for knight hawks

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
          About Knight Hawks
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Select Warehouse and pick Hulls from the dropdown. Complete C.R.U.D.
          Currently I am using Firebase with onSnapshot. This creates a listener
          so anytime the database is changed it will send a push notification
          back. Right now the "modify" does not seem to work...however the data
          is presistent. You can add/update/delete. MORE DATA IS COMING...THIS
          IS JUST THE INITIAL HOST OF THE APPLICATION.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          Knight Hawks belongs to Wizards of the Coast. This application is for
          educational purposes only.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          "Knight Hawks Game is a set of rules that allows players of the{' '}
          <strong>STAR FRONTERS&trade;</strong> role-playing game to design,
          build and use spaceships in their campaigns." This line can be found
          in the original rulebook as it was released in 1983.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          <strong>Ships: </strong> allows you to view all of the ships that have
          been created using the rules presented here.
        </Typography>
        <br />
        <Typography variant="body1" gutterBottom>
          <strong>Warehouse: </strong> In the warehouse you can review the data
          that is used for the rules.
        </Typography>
      </Paper>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(About);
