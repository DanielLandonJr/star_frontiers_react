// this will be a list of list....data CRUD for the application

import React, { Component } from 'react';
import { CssBaseline, withStyles, Typography } from '@material-ui/core';
import { Consumer } from '../../../data/Context';
// import * as Actions from '../../data/Actions';

const styles = theme => {};

class Warehouse extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <Typography variant="h3">Warehouse Knight Hawks</Typography>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default withStyles(styles)(Warehouse);
