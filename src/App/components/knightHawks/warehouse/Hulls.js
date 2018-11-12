// currently data is loaded component level and props based to item component. eventually this will have to change so the data is put in a global state so it can be accessed in the ship creation compoent where all of the data will be needed

import React from 'react';
import PropTypes from 'prop-types';
import FireBaseDB from '../../../data/Firebase';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Button, Typography } from '@material-ui/core';
import Spinner from '../../helpers/Spinner';
import HullDetails from './HullDetails';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class Hulls extends React.Component {
  state = {
    hullData: []
  };

  async componentWillMount() {
    try {
      // create a link to firebase...this is a presistent link...if any changes are made to the database they are pushed to me
      await FireBaseDB.collection('kh_hulls')
        .orderBy('type')
        .onSnapshot(snapshot => {
          let changes = snapshot.docChanges();

          // loop through the data that came back from the database
          changes.forEach(change => {
            // this is the push from the database...what changed
            switch (change.type) {
              case 'added':
                // new record added to database...update state
                const newData = change.doc.data();

                if (change.doc.data().id === 0) {
                  // the id assigned to each doc by firebase is outside the data but still part of the doc...the component will add this id to the dataset so we can access during ship construction.

                  // this is not presistent until record is saved
                  newData.id = change.doc.id;
                }

                // set state
                this.setState(state => ({
                  hullData: [...state.hullData, newData]
                }));
                break;
              case 'modified':
                this.setState(state => ({
                  hullData: [
                    ...state.hullData.filter(item => item.id !== change.doc.id),
                    change.doc.data()
                  ]
                }));
                break;
              case 'removed':
                // filter out record and reset the state
                this.setState({
                  hullData: this.state.hullData.filter(
                    hull => hull.id !== change.doc.id
                  )
                });
                break;
              default:
                console.log(change.type);
                break;
            }
          });
        });
    } catch (error) {
      console.log(`ReadData: ${error}`);
    }
  }

  AddToDatabase = async () => {
    // create new record
    const newRecord = {
      id: 0,
      length: '',
      diameter: '',
      hatches: '',
      engines: '',
      adf: '',
      mr: '',
      infoText: '>>>>>> NEW RECORD ... PLEASE UPDATE <<<<<<',
      // get epoch
      createdOn: Math.floor(Date.now() / 1000),
      createdBy: 'daniel.landonjr@gmail.com',
      // get epoch
      modifiedOn: Math.floor(Date.now() / 1000),
      modifiedBy: 'daniel.landonjr@gmail.com',
      admin: false,
      hash: '',
      type: 0
    };

    // send record to database
    await FireBaseDB.collection('kh_hulls').add(newRecord);
  };

  RemoveFromDatabase = async id => {
    // remove record from database
    await FireBaseDB.collection('kh_hulls')
      .doc(id)
      .delete();
  };

  UpdateToDatabase = async (id, data) => {
    // update data in databse
    await FireBaseDB.collection('kh_hulls')
      .doc(id)
      .set(data);
  };

  render() {
    const { classes } = this.props;
    const { hullData } = this.state;

    // wrap entire ui inside if statement. check if state data is avaialbe if it is show the ui if not show Spinner. Any time this.setState() is called it will force React to call render again .
    if (hullData && hullData.length) {
      // data avaialbe show ui
      return (
        <React.Fragment>
          <CssBaseline />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.AddToDatabase}
          >
            Add New Hull
          </Button>
          <Typography variant="h6" gutterBottom>
            Two of the records cannot be modified for demonstration purposes.
          </Typography>
          <Typography variant="caption" gutterBottom>
            If you refresh the browser you will be sent to the "About" page....
          </Typography>
          {hullData.map(hull => (
            <HullDetails
              key={hull.id}
              incomingHullData={hull}
              remove={this.RemoveFromDatabase}
              update={this.UpdateToDatabase}
            />
          ))}
        </React.Fragment>
      );
    } else {
      // data no avaialbe show spinner
      return <Spinner />;
    }
  }
}

Hulls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Hulls);
