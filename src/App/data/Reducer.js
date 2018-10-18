import * as Actions from './Actions';

const Reducer = (state, action) => {
  switch (action.type) {
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
