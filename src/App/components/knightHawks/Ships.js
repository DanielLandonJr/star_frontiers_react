// ships Component...a list of ship items

import React from 'react';
import { Consumer } from '../../data/Context';
import Ship from './Ship';

class Ships extends React.Component {
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              {/* <CssBaseline /> */}
              {/* <Typography variant="h3">Ships</Typography> */}
              <Ship />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Ships;
