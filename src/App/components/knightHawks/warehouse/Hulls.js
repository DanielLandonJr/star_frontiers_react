import React from 'react';
import PropTypes from 'prop-types';
import { FireBaseDB } from '../../../data/Context';
import { CssBaseline, withStyles } from '@material-ui/core';
// import Hull from './Hull';
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
      hullSize: 0,
      length: 0,
      diameter: 0,
      hatches: 0,
      engines: 0,
      adf: 0,
      mr: 0,
      infoText: '>>>>>> NEW RECORD ... PLEASE UPDATE <<<<<<',
      createdOn: Math.floor(Date.now() / 1000),
      createdBy: 'daniel.landonjr@gmail.com',
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
    console.log(id);
    console.log(data);
    // await FireBaseDB.collection('kh_hulls')
    //   .doc(id)
    //   .set(data);
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
            // <Hull
            //   key={hull.id}
            //   hull={hull}
            //   remove={this.RemoveFromDatabase}
            //   update={this.UpdateToDatabase}
            // />
            <HullDetails
              key={hull.id}
              hull={hull}
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
