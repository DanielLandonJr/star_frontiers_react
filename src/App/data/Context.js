// context api from react for global state
import React, { Component } from 'react';
import bcrypt from 'bcryptjs';

const Context = React.createContext(undefined);

export class Provider extends Component {
  state = {
    TEST_MODE: true,
    // what in alpha dawn dashboard is showing by default
    ad_showing: {
      charactersIsShowing: true,
      warehouseIsShowing: false,
      aboutIsShowing: false
    },
    CreateHash: whatToHash => {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(whatToHash, salt);

      return hash;
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
