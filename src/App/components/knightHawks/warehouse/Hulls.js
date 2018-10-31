import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
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

class Hulls extends React.Component {
  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <Consumer>
        {value => {
          return (
            <React.Fragment className={classes.root}>
              <CssBaseline />
              <ExpansionPanel
                expanded={expanded === 'panel1'}
                onChange={this.handleChange('panel1')}
              >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Hull Size</Typography>
                  <Typography className={classes.secondaryHeading}>
                    Secondary Heading
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>Various fields showing particulars.</Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
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
