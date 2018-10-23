// context api from react for global state

import React, { Component } from 'react';
import Reducer from './Reducer';

const Context = React.createContext(undefined);

export class Provider extends Component {
  state = {
    // what in dashboard is showing by default
    kh_showing: {
      shipIsShowing: true,
      warehouseIsShowing: false,
      aboutIsShowing: false
    },
    // what in alpha dawn dashboard is showing by default
    ad_showing: {
      charactersIsShowing: true,
      warehouseIsShowing: false,
      aboutIsShowing: false
    },
    testMessage: 'Test Message',
    // dispatch is used to update the state
    dispatch: action => {
      this.setState(state => Reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
