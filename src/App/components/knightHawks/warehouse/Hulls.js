import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from '@material-ui/core';
import { Grid, Divider, Tooltip, TextField } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Consumer } from '../../../data/Context';
import CreatedInformation from '../../helpers/CreatedInformation';
import HashInformation from '../../helpers/HashInformation';

import { Button } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      textField: {
        fullWidth: true
      }
    }
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: theme.palette.secondary.main
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.secondary.main
  },
  secondaryDark: {
    backgroundColor: theme.palette.secondary.dark
  },
  paper: {
    padding: theme.spacing.unit,
    // textAlign: 'center',
    color: theme.palette.text.secondary
    // ,
    // whiteSpace: 'nowrap'
  },
  gridContainer: {},
  gridItem: {}
});

class Hulls extends React.Component {
  state = {
    expanded: null,
    id: 'ID',
    hullSize: 'HULL_SIZE',
    length: 'LENGTH',
    diameter: 'DIAMETER',
    hatches: 'HATCHES',
    engines: 'ENGINES',
    adf: 'ADF',
    mr: 'MR',
    infoText: 'INFORMATION_TEXT',
    createdOn: 'Thursday November 1, 2018',
    createdBy: 'daniel.landonjr@gmail.com',
    modifiedOn: 'Thursday November 1, 2018',
    modifiedBy: 'daniel.landonjr@gmail.com',
    hash: 'HASH',
    disabled: false,
    adminMod: true
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  onChange = event => {
    // allows us to change the values in the fields, does not update the state
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment>
              <CssBaseline />
              <div className={classes.root}>
                <ExpansionPanel
                  expanded={expanded === 'panel1'}
                  onChange={this.handleChange('panel1')}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                      name="data.hullSize"
                      className={classes.heading}
                    >
                      Hull Size: {this.state.hullSize}
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    {/* two grid items, first one for basic data, second for dates and names */}
                    <Grid container spacing={16}>
                      {/* basic data */}
                      <Grid item xs={12}>
                        {/* new container, three rows, first and third are dividers second is basic data */}
                        <Grid container spacing={16}>
                          {/* divider */}
                          <Grid item xs={12}>
                            <Divider className={classes.secondaryDark} />
                          </Grid>
                          {/* basic information, this will be another grid layout for the controls */}
                          <Grid item xs={12}>
                            <Grid container spacing={16}>
                              {/* id */}
                              <Grid item xs={12}>
                                <Tooltip
                                  title="Record ID"
                                  placement="top-start"
                                >
                                  <Typography>id: {this.state.id}</Typography>
                                </Tooltip>
                                <Button
                                  variant="contained"
                                  className={classes.button}
                                  onClick={() => {
                                    const strTest =
                                      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi tempora laborum vitae id voluptatem vel officiis nostrum, minus maiores, facere quia aspernatur. Optio architecto, autem nihil sequi laudantium eligendi officia.';

                                    this.setState({
                                      hash: value.generateHash(strTest)
                                    });
                                  }}
                                >
                                  Default
                                </Button>
                              </Grid>
                              {/* length/diameter */}
                              <Grid item xs={12}>
                                <Grid container spacing={16}>
                                  <Grid item xs={12} sm={6}>
                                    <Tooltip
                                      title="Ship Length +/-25%"
                                      placement="top-start"
                                    >
                                      <TextField
                                        className={classes.textField}
                                        id="length"
                                        name="length"
                                        label="Length"
                                        value={this.state.length}
                                        onChange={this.onChange}
                                        margin="normal"
                                        disabled={this.state.disabled}
                                        fullWidth
                                      />
                                    </Tooltip>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Tooltip
                                      title="Ship Diameter +/-25%"
                                      placement="top-start"
                                    >
                                      <TextField
                                        className={classes.textField}
                                        id="diameter"
                                        name="diameter"
                                        label="Diameter"
                                        value={this.state.diameter}
                                        onChange={this.onChange}
                                        margin="normal"
                                        disabled={this.state.disabled}
                                        fullWidth
                                      />
                                    </Tooltip>
                                  </Grid>
                                </Grid>
                              </Grid>
                              {/* hatches/engines */}
                              <Grid item xs={12}>
                                <Grid container spacing={16}>
                                  <Grid item xs={12} sm={6}>
                                    <Tooltip
                                      title="Minimum # of Hatches"
                                      placement="top-start"
                                    >
                                      <TextField
                                        className={classes.textField}
                                        id="hatches"
                                        name="hatches"
                                        label="# of Hatches"
                                        value={this.state.hatches}
                                        onChange={this.onChange}
                                        margin="normal"
                                        disabled={this.state.disabled}
                                        fullWidth
                                      />
                                    </Tooltip>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Tooltip
                                      title="Maximum # of Engines"
                                      placement="top-start"
                                    >
                                      <TextField
                                        className={classes.textField}
                                        id="engines"
                                        name="engines"
                                        label="# of Engines"
                                        value={this.state.engines}
                                        onChange={this.onChange}
                                        margin="normal"
                                        disabled={this.state.disabled}
                                        fullWidth
                                      />
                                    </Tooltip>
                                  </Grid>
                                </Grid>
                              </Grid>
                              {/* adf/mr */}
                              <Grid item xs={12}>
                                <Grid container spacing={16}>
                                  <Grid item xs={12} sm={6}>
                                    <Tooltip
                                      title="Acceleration/Deceleration Factor"
                                      placement="top-start"
                                    >
                                      <TextField
                                        className={classes.textField}
                                        id="adf"
                                        name="adf"
                                        label="Acceleration/Deceleration"
                                        value={this.state.adf}
                                        onChange={this.onChange}
                                        margin="normal"
                                        disabled={this.state.disabled}
                                        fullWidth
                                      />
                                    </Tooltip>
                                  </Grid>
                                  <Grid item xs={12} sm={6}>
                                    <Tooltip
                                      title="Maneuver Rating"
                                      placement="top-start"
                                    >
                                      <TextField
                                        className={classes.textField}
                                        id="mr"
                                        name="mr"
                                        label="Maneuver Rating"
                                        value={this.state.mr}
                                        onChange={this.onChange}
                                        margin="normal"
                                        disabled={this.state.disabled}
                                        fullWidth
                                      />
                                    </Tooltip>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={12}>
                                <Tooltip
                                  title="Additional Information"
                                  placement="top-start"
                                >
                                  <TextField
                                    id="infoText"
                                    name="infoText"
                                    label="Information"
                                    placeholder="Enter Information Here ..."
                                    onChange={this.onChange}
                                    value={this.state.infoText}
                                    fullWidth
                                    multiline
                                    margin="normal"
                                    variant="outlined"
                                    rowsMax="6"
                                    InputLabelProps={{
                                      shrink: true
                                    }}
                                    InputProps={{}}
                                    disabled={this.state.disabled}
                                  />
                                </Tooltip>
                              </Grid>
                            </Grid>
                          </Grid>
                          {/* divider */}
                          <Grid item xs={12}>
                            <Divider className={classes.secondaryDark} />
                          </Grid>
                        </Grid>
                      </Grid>
                      {/* dates/names and the hash */}
                      <Grid item xs={12}>
                        {/* new container, two items, first the names/dates, seconda the hash */}
                        <Grid container spacing={16}>
                          {/* dates/names */}
                          <Grid item xs={12}>
                            {/* new container, two parts, first the create name/date, second modify name/date */}
                            <CreatedInformation
                              createdBy={this.state.createdBy}
                              createdOn={this.state.createdOn}
                              modifiedBy={this.state.modifiedBy}
                              modifiedOn={this.state.modifiedOn}
                            />
                          </Grid>
                          {/* hash */}
                          <Grid item xs={12} className={classes.gridItem}>
                            <HashInformation hash={this.state.hash} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
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
