// this will be a list of list....data CRUD for the application

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Typography, Grid, Paper } from '@material-ui/core';
import { Select, MenuItem, FormControl, Input } from '@material-ui/core';
import { Consumer } from '../../../data/Context';
import Hulls from './Hulls';
import ConstructionCenters from './ConstructionCenters';
import Ships from '../Ships';

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
                            <MenuItem value={'constructionCenters'}>
                              Construction Centers
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Paper>
                    </FormControl>
                  </form>
                </Grid>
                <Grid item xs={12}>
                  {this.state.showing === '' ? (
                    <Typography variant="h6">
                      Select a componet from the list above.
                    </Typography>
                  ) : null}
                  {this.state.showing === 'ships' ? <Ships /> : null}
                  {this.state.showing === 'hulls' ? <Hulls /> : null}
                  {this.state.showing === 'constructionCenters' ? (
                    <ConstructionCenters />
                  ) : null}
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
