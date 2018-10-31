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
  }
});

console.log(theme);

class App extends Component {
  render() {
    return (
      <Provider>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Consumer>
              {value => {
                return (
                  <React.Fragment>
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
