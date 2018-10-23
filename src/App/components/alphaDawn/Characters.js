// characters Component...a list of character items

import React, { Component } from 'react';
import { CssBaseline, withStyles, Typography } from '@material-ui/core';
import { Consumer } from '../../data/Context';
// import * as Actions from '../../data/Actions';
import Character from './Character';

const styles = theme => {};

class Characters extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <Typography variant="h3">Characters, List Component</Typography>
              <Character />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default withStyles(styles)(Characters);
