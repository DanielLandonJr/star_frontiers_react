// individual hull item...extensive file due to material-ui

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { Typography, Divider, Grid, Tooltip } from '@material-ui/core';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField
} from '@material-ui/core';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import bcrypt from 'bcryptjs';

import CreatedInformation from '../../helpers/CreatedInformation';
import HashInformation from '../../helpers/HashInformation';

const styles = theme => ({
  root: {
    width: '100%'
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
  secondaryDarkText: {
    color: theme.palette.secondary.dark
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

class HullDetails extends Component {
  state = {
    oldHash: '',
    changesPending: false,
    disabled: false,
    expanded: null,
    panelNumber: '',
    // ths actual data from props
    id: 0,
    length: 0,
    diameter: 0,
    hatches: 0,
    engines: 0,
    adf: 0,
    mr: 0,
    infoText: '',
    createdOn: 0,
    createdBy: '',
    modifiedOn: 0,
    modifiedBy: '',
    admin: false,
    hash: '',
    type: 0,
    CreateHash: () => {
      // this creates a hash out of the complete record
      const stringToHash = `${this.state.id}, ${this.state.length}, ${
        this.state.diameter
      }, ${this.state.hatches}, ${this.state.engines}, ${this.state.adf}, ${
        this.state.mr
      }, ${this.state.infoText}, ${this.state.createdOn}, ${
        this.state.createdBy
      }, ${this.state.modifiedOn}, ${this.state.modifiedBy}, ${
        this.state.admin
      }, ${this.state.type}`;

      var myBuffer = [];
      var buffer = new Buffer(stringToHash, 'utf16le');
      for (var i = 0; i < buffer.length; i++) {
        myBuffer.push(buffer[i]);
      }

      myBuffer = myBuffer.toString();

      const salt = bcrypt.genSaltSync(10);
      const newHash = bcrypt.hashSync(myBuffer, salt);

      this.setState({ hash: newHash });
    }
  };

  componentDidMount() {
    const { incomingHullData } = this.props;

    // set state with incoming props
    this.setState({
      disabled: incomingHullData.admin,
      panelNumber: incomingHullData.id,
      id: incomingHullData.id,
      length: incomingHullData.length,
      diameter: incomingHullData.diameter,
      hatches: incomingHullData.hatches,
      engines: incomingHullData.engines,
      adf: incomingHullData.adf,
      mr: incomingHullData.mr,
      infoText: incomingHullData.infoText,
      createdOn: incomingHullData.createdOn,
      createdBy: incomingHullData.createdBy,
      modifiedOn: incomingHullData.modifiedOn,
      modifiedBy: incomingHullData.modifiedBy,
      admin: incomingHullData.admin,
      hash: incomingHullData.hash,
      type: incomingHullData.type
    });

    // if the hash does not exist create one...this is similiar to the id...not presistent until the record has been modified and saved .
    if (incomingHullData.hash === '') {
      // no hash found so create one
      this.state.CreateHash();
    }

    // set the oldHas to what the current has isFinite...we will be checking against the old hash for changes
    this.setState({ oldHash: this.state.hash });
  }

  componentDidUpdate = prevProps => {
    // i dont like this...there has to be a better way
    const { incomingHullData } = this.props;

    if (incomingHullData.id !== prevProps.incomingHullData.id) {
      this.setState({ id: incomingHullData.id });
    }

    if (incomingHullData.length !== prevProps.incomingHullData.length) {
      this.setState({ length: incomingHullData.length });
    }

    if (incomingHullData.diameter !== prevProps.incomingHullData.diameter) {
      this.setState({ diameter: incomingHullData.diameter });
    }

    if (incomingHullData.hatches !== prevProps.incomingHullData.hatches) {
      this.setState({ hatches: incomingHullData.hatches });
    }

    if (incomingHullData.engines !== prevProps.incomingHullData.engines) {
      this.setState({ engines: incomingHullData.engines });
    }

    if (incomingHullData.adf !== prevProps.incomingHullData.adf) {
      this.setState({ adf: incomingHullData.adf });
    }

    if (incomingHullData.mr !== prevProps.incomingHullData.mr) {
      this.setState({ mr: incomingHullData.mr });
    }

    if (incomingHullData.infoText !== prevProps.incomingHullData.infoText) {
      this.setState({ infoText: incomingHullData.infoText });
    }

    if (incomingHullData.createdOn !== prevProps.incomingHullData.createdOn) {
      this.setState({ createdOn: incomingHullData.createdOn });
    }

    if (incomingHullData.createdBy !== prevProps.incomingHullData.createdBy) {
      this.setState({ createdBy: incomingHullData.createdBy });
    }

    if (incomingHullData.modifiedOn !== prevProps.incomingHullData.modifiedOn) {
      this.setState({ modifiedOn: incomingHullData.modifiedOn });
    }

    if (incomingHullData.modifiedBy !== prevProps.incomingHullData.modifiedBy) {
      this.setState({ modifiedBy: incomingHullData.modifiedBy });
    }

    if (incomingHullData.admin !== prevProps.incomingHullData.admin) {
      this.setState({ admin: incomingHullData.admin });
    }

    if (incomingHullData.hash !== prevProps.incomingHullData.hash) {
      this.setState({ hash: incomingHullData.hash });
    }

    if (incomingHullData.type !== prevProps.incomingHullData.type) {
      this.setState({ type: incomingHullData.type });
    }
  };

  // is the panel expanded or not...this panel should force another panel to close when this one opens ... have to figure out how to get this to work
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // create a new hash with every key press ... need to come up with a better solution
    this.state.CreateHash();

    if (this.state.oldHash !== this.state.hash) {
      this.setState({ changesPending: true });
    } else {
      this.setState({ changesPending: false });
    }
  };

  DeleteRecord = () => {
    // callback to parent to delete record
    this.props.remove(this.state.id);
  };

  UpdateRecord = () => {
    // callback to parent to update record

    // collect current values from state
    const currentRecord = {
      id: this.state.id,
      length: this.state.length,
      diameter: this.state.diameter,
      hatches: this.state.hatches,
      engines: this.state.engines,
      adf: this.state.adf,
      mr: this.state.mr,
      infoText: this.state.infoText,
      createdOn: this.state.createdOn,
      createdBy: this.state.createdBy,
      modifiedOn: Math.floor(Date.now() / 1000),
      modifiedBy: this.state.modifiedBy,
      admin: this.state.admin,
      hash: this.state.hash,
      type: this.state.type
    };

    // callback to update record
    this.props.update(this.state.id, currentRecord);
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <ExpansionPanel
          className={classes.root}
          expanded={expanded === this.state.panelNumber}
          onChange={this.handleChange(this.state.panelNumber)}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Grid container spacing={16}>
              <Grid item xs={12} sm={4}>
                <Typography name="hullSize.type" className={classes.heading}>
                  Hull Type: {this.state.type}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={4}>
                {/* if type = 0 then this is a new record or one that has been marked for mdoification....show a message */}
                {this.state.changesPending && !this.state.disabled ? (
                  <Typography className={classes.secondaryHeading}>
                    Modified ... Dont Forget To Save
                  </Typography>
                ) : null}
                {/* record is disabled by admin flag in database....show a message */}
                {this.state.disabled ? (
                  <Typography className={classes.secondaryHeading}>
                    Disabled ... Cannot Modify
                  </Typography>
                ) : null}
              </Grid>
            </Grid>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <Grid container spacing={16}>
              {/* divider, single line */}
              <Grid item xs={12}>
                <Divider className={classes.secondaryDark} />
                <br />
              </Grid>

              {/* id/hull type, single line, split, two items */}
              <Grid item xs={12} sm={6}>
                <Tooltip title="Database Record ID" placement="top-start">
                  <Typography variant="caption">
                    <span className={classes.secondaryDarkText}>ID:</span>{' '}
                    {this.state.id}
                  </Typography>
                </Tooltip>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Tooltip
                  title='Setting value other than "0" will mark this as a completed record.'
                  placement="top-start"
                >
                  <TextField
                    className={classes.textField}
                    id="type"
                    name="type"
                    helperText="Hull Type/Size of Ship"
                    label="Hull Type"
                    value={this.state.type}
                    onChange={this.onChange}
                    margin="dense"
                    disabled={this.state.disabled}
                    fullWidth
                  />
                </Tooltip>
              </Grid>

              {/* length/width, single line, split, two items */}
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  id="length"
                  name="length"
                  helperText="Length of Ship (can be +/- 25%)"
                  label="Length"
                  value={this.state.length}
                  onChange={this.onChange}
                  margin="dense"
                  disabled={this.state.disabled}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  id="diameter"
                  name="diameter"
                  helperText="Diameter of Ship (can be +/- 25%)"
                  label="Diameter"
                  value={this.state.diameter}
                  onChange={this.onChange}
                  margin="dense"
                  disabled={this.state.disabled}
                  fullWidth
                />
              </Grid>

              {/* hatches/engines, single line, split, two items */}
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  id="hatches"
                  name="hatches"
                  helperText="Minimum # if Hatches"
                  label="Hatches"
                  value={this.state.hatches}
                  onChange={this.onChange}
                  margin="dense"
                  disabled={this.state.disabled}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  id="engines"
                  name="engines"
                  helperText="Maximum # of Engines"
                  label="Engines"
                  value={this.state.engines}
                  onChange={this.onChange}
                  margin="dense"
                  disabled={this.state.disabled}
                  fullWidth
                />
              </Grid>

              {/* adf/mr, single line, split, two items */}
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  id="adf"
                  name="adf"
                  helperText="Acceleration/Deceleration Factor"
                  label="ADF"
                  value={this.state.adf}
                  onChange={this.onChange}
                  margin="dense"
                  disabled={this.state.disabled}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  id="mr"
                  name="mr"
                  helperText="Maneuver Rating"
                  label="MR"
                  value={this.state.mr}
                  onChange={this.onChange}
                  margin="dense"
                  disabled={this.state.disabled}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  id="infoText"
                  name="infoText"
                  helperText="Additional Information"
                  label="Additional Information"
                  value={this.state.infoText}
                  onChange={this.onChange}
                  margin="dense"
                  disabled={this.state.disabled}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>

              {/* divider, single line */}
              <Grid item xs={12}>
                <br />
                <Divider className={classes.secondaryDark} />
              </Grid>

              <Grid item xs={12}>
                <CreatedInformation
                  createdBy={this.state.createdBy}
                  createdOn={this.state.createdOn}
                  modifiedBy={this.state.modifiedBy}
                  modifiedOn={this.state.modifiedOn}
                />
              </Grid>

              <Grid item xs={12}>
                <HashInformation hash={this.state.hash} />
              </Grid>

              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
              >
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  className={classes.button}
                  disabled={
                    this.state.changesPending && !this.state.disabled
                      ? false
                      : true
                  }
                  onClick={this.UpdateRecord}
                >
                  <SaveIcon
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Save
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  className={classes.button}
                  disabled={this.state.disabled}
                  onClick={this.DeleteRecord}
                >
                  <DeleteIcon
                    className={classNames(classes.leftIcon, classes.iconSmall)}
                  />
                  Delete
                </Button>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    );
  }
}

HullDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  incomingHullData: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(HullDetails);
