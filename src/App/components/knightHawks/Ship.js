// ships Component...a list of ship items

import React, { Component } from 'react';
import { CssBaseline, withStyles, Typography } from '@material-ui/core';
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
              {/* <Typography variant="h3">Ship Component</Typography> */}
              <form class="form-signin">
                <img
                  class="mb-4"
                  src="../../assets/brand/bootstrap-solid.svg"
                  alt=""
                  width="72"
                  height="72"
                />
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  required
                  autofocus
                />
                <label for="inputPassword" class="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                />
                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>
                </div>
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                  Sign in
                </button>
                <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
              </form>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default withStyles(styles)(Ship);
