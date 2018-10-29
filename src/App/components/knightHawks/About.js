// about screen for knight hawks

import React from 'react';
import { CssBaseline, withStyles, Typography } from '@material-ui/core';

const styles = theme => {};

function About() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Typography variant="h6">About Knight Hawks</Typography>
      <br />
      <Typography variant="body1">
        Knight Hawks belongs to Wizards of the Coast. This application is for
        educational purposes only.
      </Typography>
      <br />
      <Typography variant="body1">
        "Knight Hawks Game is a set of rules that allows players of the{' '}
        <strong>STAR FRONTERS&trade;</strong> role-playing game to design, build
        and use spaceships in their campaigns.""
      </Typography>
      <br />
    </React.Fragment>
  );
}

export default withStyles(styles)(About);
