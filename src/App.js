// i avoid doing any sort of ui stuff here . The provider must be wrapped around the app as well as the BrowserRouter... keeping this file clean helps to keep these things simple to sort out

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, Consumer } from './App/data/Context';

// theme changes
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple, green } from '@material-ui/core/colors';

import SignIn from './App/components/pages/LogIn';
import NotFound from './App/components/pages/NotFound';
import Home from './App/components/pages/Home';
import KnightHawksDashboard from './App/components/knightHawks/Dashboard';
import AlphaDawnDashboard from './App/components/alphaDawn/Dashboard';

// override settings for basic theme.
// material-ui uses JSS so every component that uses it may have a similar object to control how things look
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    type: 'dark'
  },
  typography: {
    useNextVariants: true
  },
  spacing: {
    unit: 10
  },
  breakpoints: {
    // values: {
    //   xs: 0,
    //   sm: 500,
    //   md: 960,
    //   lg: 1280,
    //   xl: 1920
    // }
  }
});

class App extends Component {
  render() {
    return (
      // context provider
      <Provider>
        {/* theme provider for material-ui */}
        <MuiThemeProvider theme={theme}>
          {/* router */}
          <BrowserRouter>
            {/* context comsumer */}
            <Consumer>
              {value => {
                return (
                  <React.Fragment>
                    {/* switch for route table */}
                    <Switch>
                      <Route exact path="/" component={SignIn} />
                      <Route exact path="/home" component={Home} />
                      <Route
                        exact
                        path="/knighthawks/dashboard"
                        component={KnightHawksDashboard}
                      />
                      <Route
                        exact
                        path="/alphadawn/dashboard"
                        component={AlphaDawnDashboard}
                      />
                      {/* 404 */}
                      <Route component={NotFound} />
                    </Switch>
                  </React.Fragment>
                );
              }}
            </Consumer>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
