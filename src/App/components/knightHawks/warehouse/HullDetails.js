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
    expanded: null,
    panelNumber: '',
    disabled: true,
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
      const whatToHash = `${this.state.id}, ${this.state.length}, ${
        this.state.diameter
      }, ${this.state.hatches}, ${this.state.engines}, ${this.state.adf}, ${
        this.state.mr
      }, ${this.state.infoText}, ${this.state.createdOn}, ${
        this.state.createdBy
      }, ${this.state.modifiedOn}, ${this.state.modifiedBy}, ${
        this.state.admin
      }, ${this.state.type}`;

      const salt = bcrypt.genSaltSync(10);
      const newHash = bcrypt.hashSync(whatToHash, salt);

      this.setState({ hash: newHash });
    }
  };

  componentWillMount() {
    const { incomingHullData } = this.props;

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

    if (incomingHullData.hash === '') {
      // no hash found so create one
      this.state.CreateHash();
    }
  }

  verifyHash = () => {
    let newHash = '';
    if (this.state.hash === '') {
      newHash = this.state.CreateHash(this.currentRecord);
      this.setState({ hash: newHash });
    }
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.state.CreateHash();
  };

  DeleteRecord = () => {
    this.props.remove(this.state.id);
  };

  UpdateRecord = () => {
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
      modifiedOn: this.state.modifiedOn,
      modifiedBy: this.state.modifiedBy,
      admin: this.state.admin,
      hash: this.state.hash,
      type: this.state.type
    };

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
                {this.state.type === 0 ? (
                  <Typography className={classes.secondaryHeading}>
                    NEW RECORD...OPEN TO MODIFY
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

              {/* id, single line */}
              <Grid item xs={12}>
                <Tooltip title="Database Record ID" placement="top-start">
                  <Typography variant="caption">
                    <span className={classes.secondaryDarkText}>ID:</span>{' '}
                    {this.state.id}
                  </Typography>
                </Tooltip>
              </Grid>

              {/* length/width, single line, split, two items */}
              <Grid item xs={12} sm={6}>
                <Tooltip
                  title="Length of Ship (can be +/- 25%)"
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
              <Grid item xs={12} sm={6} />

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
                  disabled={this.state.disabled}
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
