import React, { Component } from 'react';
import Reducer from './Reducer';

const Context = React.createContext(undefined);

export class Provider extends Component {
  state = {
    test: 'Test Value',
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
