// the warehouse will contain a select item that allows the user to pick what ship component they want to view/modify....weapons, hulls, etc

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Typography, Grid, Paper, Select } from '@material-ui/core';
import { MenuItem, FormControl, Input } from '@material-ui/core';
import { Consumer } from '../../../data/Context';
import Hulls from './Hulls';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit}px`
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing.unit
  },
  secondaryDark: {
    color: theme.palette.secondary.dark
  }
});

class Warehouse extends Component {
  state = {
    showing: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <Grid container spacing={8}>
                <Grid item xs={12}>
                  <form autoComplete="off">
                    <FormControl>
                      <Paper className={classes.paper}>
                        <FormControl className={classes.formControl}>
                          <Typography className={classes.secondaryDark}>
                            Warehouse List
                          </Typography>
                          <Select
                            value={this.state.showing}
                            onChange={this.handleChange}
                            input={<Input name="showing" id="warehouseList" />}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={'hulls'}>Hulls</MenuItem>
                          </Select>
                        </FormControl>
                      </Paper>
                    </FormControl>
                  </form>
                </Grid>
                <Grid item xs={12}>
                  {/* determine what is showing and put it out there */}
                  {this.state.showing === '' ? (
                    <Typography variant="h6">
                      Select a componet from the list above.
                    </Typography>
                  ) : null}
                  {this.state.showing === 'hulls' ? <Hulls /> : null}
                </Grid>
              </Grid>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

Warehouse.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Warehouse);
