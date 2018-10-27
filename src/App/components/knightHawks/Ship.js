// ships Component...a list of ship items

import React, { Component } from 'react';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Consumer } from '../../data/Context';
// import * as Actions from '../../data/Actions';

const styles = theme => {};

class Ship extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <h1>Ship Component</h1>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default withStyles(styles)(Ship);
