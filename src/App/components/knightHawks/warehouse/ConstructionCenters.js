import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../../data/Context';
import { withStyles, CssBaseline } from '@material-ui/core';

const styles = theme => ({
  placeHodler: {
    margin: 0
  }
});

class ConstructionCenters extends React.Component {
  render() {
    // const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <h1>Construction Centers</h1>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

ConstructionCenters.protoTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConstructionCenters);
