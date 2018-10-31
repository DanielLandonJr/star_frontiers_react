// the reducer does the actual changing of the state based on what is passed to it from dsiaptch in AudioContext.js

import { Actions } from './Context';

const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.STATE_CHANGE_AD_SHOWING:
      return {
        ...state,
        ad_showing: action.payload
      };
    case Actions.DATA_CREATE:
      return state;
    case Actions.DATA_READ:
      return state;
    case Actions.DATA_UPDATE:
      return state;
    case Actions.DATA_DELETE:
      return state;
    default:
      return state;
  }
};

export default Reducer;
