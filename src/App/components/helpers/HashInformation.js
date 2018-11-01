import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Typography, Tooltip } from '@material-ui/core';

const styles = theme => ({
  gridContainer: {},
  gridItem: {}
});

function HashInformation(props) {
  // const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Tooltip title="Hash Value For Record" placement="top-start">
        <Typography variant="caption">hash: {props.hash}</Typography>
      </Tooltip>
    </React.Fragment>
  );
}

HashInformation.propTypes = {
  classes: PropTypes.object.isRequired,
  hash: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(HashInformation);
