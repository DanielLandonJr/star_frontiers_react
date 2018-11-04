import { FireBaseDB, Actions } from './Context';

const UpdateState = (whichCollection, updatedData, state) => {
  state.dispatch({
    type: Actions.DATA_UPDATE,
    collection: whichCollection,
    payload: updatedData
  });
};

const ReadFirebaseData = async (whichCollection, orderBy, state) => {
  try {
    // const snapshot = await FireBaseDB.collection(whichCollection)
    //   .orderBy(orderBy)
    //   .get();
    const snapshot = await FireBaseDB.collection(whichCollection)
      .orderBy(orderBy)
      .onSnapshot();

    const updatedData = [];

    snapshot.docs.forEach(doc => {
      let tempData = doc.data();
      if (tempData.id === '') {
        tempData.id = doc.id;
      }
      updatedData.push(tempData);
    });

    UpdateState(whichCollection, updatedData, state);
  } catch (error) {
    console.log(`ReadData: ${error}`);
  }
};

const AddFirebaseDate = async (whichCollection, updatedData, state) => {
  try {
    const snapshot = await FireBaseDB.collection(whichCollection).add(
      updatedData
    );

    // const updatedData = [];

    // snapshot.docs.forEach(doc => {
    //   let tempData = doc.data();
    //   if (tempData.id === '') {
    //     tempData.id = doc.id;
    //   }
    //   updatedData.push(tempData);
    // });

    console.log(snapshot);
  } catch (error) {
    console.log(error);
  }
};

const DeleteFirebaseData = async () => {
  try {
    // delete
  } catch (error) {
    console.log(`DeleteData: ${error}`);
  }
};

export const ReadData = ReadFirebaseData;
export const AddData = AddFirebaseDate;
export const DeleteData = DeleteFirebaseData;
