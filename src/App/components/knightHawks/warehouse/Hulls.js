import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../../data/Context';
import { withStyles, CssBaseline } from '@material-ui/core';

const styles = theme => ({
  placeHodler: {
    margin: 0
  }
});

class Hulls extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <h1>Hulls</h1>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Hulls.protoTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hulls);
