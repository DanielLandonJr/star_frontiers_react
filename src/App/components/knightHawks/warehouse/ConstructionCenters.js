import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  TextField
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Consumer } from '../../../data/Context';

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
  }
});

class ConstructionCenters extends React.Component {
  state = {
    expanded: null,
    length: 50
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  onChange = event => {
    // allows us to change the values in the fields, does not update the state
    this.setState({ [event.target.name]: event.target.value });
    // this.state.whatToHash();
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
              <ExpansionPanel
                expanded={expanded === 'panel1'}
                onChange={this.handleChange('panel1')}
                className={classes.root}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>
                    Construction Center
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    Secondary Heading
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>Various fields showing particulars.</Typography>
                  <TextField
                    id="length"
                    name="length"
                    label="Length"
                    value={this.state.length}
                    onChange={this.onChange}
                    margin="normal"
                    disabled={this.state.disabled}
                    fullWidth
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

ConstructionCenters.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(ConstructionCenters);
