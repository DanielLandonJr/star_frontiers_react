// context api from react for global state

// everything about the state should go through the context file

import React, { Component } from 'react';
import Reducer from './Reducer';
import * as ActionsList from './Actions';
import CollectionList from './Collections';
import FirebaseDataBase from './Firebase';
// import * as FBdata from './DataManipulation';

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
    kh_hulls: undefined,
    generatedHash: '',
    // dispatch is used to update the state
    dispatch: action => {
      this.setState(state => Reducer(state, action));

      console.log(this.state);
    }
  };

  // async componentDidMount() {
  //   await FBdata.ReadData(
  //     CollectionList.KNIGHT_HAWKS_HULLS,
  //     'type',
  //     this.state
  //   );
  // }

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
export const Collections = CollectionList;
export const FireBaseDB = FirebaseDataBase;
// export const FireBaseData = FBdata;
