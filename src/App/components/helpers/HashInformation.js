// seperate component to display hash information

import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Typography, Tooltip } from '@material-ui/core';

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

function HashInformation(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Tooltip title="Hash Value For Record" placement="top-start">
        <Typography variant="caption" noWrap>
          <span className={classes.secondaryDarkText}>hash:</span> {props.hash}
        </Typography>
      </Tooltip>
    </React.Fragment>
  );
}

HashInformation.propTypes = {
  classes: PropTypes.object.isRequired,
  hash: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(HashInformation);
