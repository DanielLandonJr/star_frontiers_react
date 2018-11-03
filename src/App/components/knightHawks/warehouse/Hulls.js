import React from 'react';
import PropTypes from 'prop-types';
import { Consumer, Collections, FireBaseData } from '../../../data/Context';
import { CssBaseline, withStyles } from '@material-ui/core';
import Hull from './Hull';
import { Button, Typography } from '@material-ui/core';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class Hulls extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          const { kh_hulls } = value;

          const newRecord = {
            id: '',
            hullSize: '',
            length: '',
            diameter: '',
            hatches: '',
            engines: '',
            adf: '',
            mr: '',
            infoText: '',
            createdOn: Date.now(),
            createdBy: 'daniel.landonjr@gmail.com',
            modifiedOn: Date.now(),
            modifiedBy: 'daniel.landonjr@gmail.com',
            adminMod: false,
            hash: '',
            type: 0
          };

          return (
            <React.Fragment>
              <CssBaseline />
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  FireBaseData.AddData(
                    Collections.KNIGHT_HAKWS_HULLS,
                    newRecord,
                    value
                  );
                }}
              >
                Add New Hull
              </Button>
              <Typography variant="h6" gutterBottom>
                First two records are disabled for demonstration purposes.
              </Typography>
              {kh_hulls.map(hull => (
                <Hull key={hull.id} hull={hull} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Hulls.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Hulls);
