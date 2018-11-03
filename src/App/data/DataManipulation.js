import { FireBaseDB, Actions } from './Context';

const ReadFirebaseData = async (whichCollection, orderBy, state) => {
  try {
    const snapshot = await FireBaseDB.collection(whichCollection)
      .orderBy(orderBy)
      .get();

    const newData = [];

    snapshot.docs.forEach(doc => {
      let tempData = doc.data();
      if (tempData.id === '') {
        tempData.id = doc.id;
      }
      newData.push(tempData);
    });

    state.dispatch({
      type: Actions.DATA_READ,
      collection: whichCollection,
      payload: newData
    });
  } catch (error) {
    console.log(`ReadData: ${error}`);
  }
};

const AddFirebaseDate = async (whichCollection, data, state) => {
  try {
    await FireBaseDB.collection(whichCollection).add(data);
  } catch (error) {
    console.log(`AddData: ${error}`);
  }
};

export const ReadData = ReadFirebaseData;
export const AddData = AddFirebaseDate;
