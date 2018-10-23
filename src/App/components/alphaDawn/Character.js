// ships Component...a list of ship items

import React, { Component } from 'react';
import { CssBaseline, withStyles, Typography } from '@material-ui/core';
import { Consumer } from '../../data/Context';
// import * as Actions from '../../data/Actions';

const styles = theme => {};

class Character extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <Typography variant="h3">Character Component</Typography>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default withStyles(styles)(Character);
