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
      await FireBaseDB.collection('kh_hulls')
        .orderBy('type')
        .onSnapshot(snapshot => {
          let changes = snapshot.docChanges();

          changes.forEach(change => {
            switch (change.type) {
              case 'added':
                const newData = change.doc.data();

                if (change.doc.data().id === 0) {
                  newData.id = change.doc.id;
                }

                this.setState(state => ({
                  hullData: [...state.hullData, newData]
                }));
                break;
              case 'modified':
                console.log(`modified`);
                console.log(change.doc.data());
                // const oldData = this.state.hullData.filter(
                //   hull => hull.id === change.doc.id
                // );

                // console.log(oldData);
                // console.log(change.doc.data());

                // this.setState(
                //   (this.state =>
                //     ...state,
                //     hullData: [
                //       hullData.filter(
                //         hull => hull.id === change.doc.id
                //       ),
                //       change.doc.data
                //     ]
                //   )
                // );

                // this.setState({
                //   ...this.state,
                //   hulldata: this.state.hullData.map(
                //     hull =>
                //       hull.id === change.doc.id
                //         ? (hull = change.doc.data())
                //         : hull
                //   )
                // });

                break;
              case 'removed':
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
    const newRecord = {
      id: 0,
      length: 0,
      diameter: 0,
      hatches: 0,
      engines: 0,
      adf: 0,
      mr: 0,
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

    await FireBaseDB.collection('kh_hulls').add(newRecord);
  };

  RemoveFromDatabase = async id => {
    await FireBaseDB.collection('kh_hulls')
      .doc(id)
      .delete();
  };

  UpdateToDatabase = async (id, data) => {
    // console.log(id);
    // console.log(data);
    await FireBaseDB.collection('kh_hulls')
      .doc(id)
      .set(data);
  };

  render() {
    const { classes } = this.props;
    const { hullData } = this.state;

    if (hullData && hullData.length) {
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
      return <Spinner />;
    }
  }
}

Hulls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Hulls);
