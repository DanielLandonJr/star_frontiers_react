import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from './App/data/Context';

// theme changes
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { purple, green } from '@material-ui/core/colors';

import SignIn from './App/components/LogIn';
import NotFound from './App/components/NotFound';
import Selection from './App/components/Selection';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    type: 'dark'
  },
  typography: {
    useNextVariants: true
  }
});

console.log(theme);

class App extends Component {
  render() {
    return (
      <Provider>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <React.Fragment>
              <Switch>
                <Route exact path="/" component={SignIn} />
                <Route exact path="/selection" component={Selection} />
                {/* 404 */}
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
