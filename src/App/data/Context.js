// context api from react for global state

// everything about the state should go through the context file

import React, { Component } from 'react';
import Reducer from './Reducer';
import * as ActionsList from './Actions';
import FireBaseObject from './Firebase';
import CollectionList from './Collections';
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
    generatedHash: '',
    // dispatch is used to update the state
    dispatch: action => {
      this.setState(state => Reducer(state, action));
    },
    generateHash: whatToHash => {
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
export const Actions = ActionsList;
export const firebase = FireBaseObject;
export const Collections = CollectionList;
