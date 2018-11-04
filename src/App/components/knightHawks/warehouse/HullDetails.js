import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import AddressForm from './AddressForm';
// import PaymentForm from './PaymentForm';
// import Review from './Review';

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressForm />;
//     case 1:
//       return <PaymentForm />;
//     case 2:
//       return <Review />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

class HullDetails extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {/* {getStepContent(activeStep)} */}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

HullDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  hull: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default withStyles(styles)(HullDetails);

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { CssBaseline, withStyles } from '@material-ui/core';
// import { Typography, Divider } from '@material-ui/core';
// import {
//   ExpansionPanel,
//   ExpansionPanelSummary,
//   ExpansionPanelDetails
// } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import CreatedInformation from '../../helpers/CreatedInformation';
// import HashInformation from '../../helpers/HashInformation';
// import bcrypt from 'bcryptjs';

// const styles = theme => ({
//   root: {
//     width: '100%'
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   },
//   secondaryDark: {
//     backgroundColor: theme.palette.secondary.dark
//   }
// });

// class HullDetails extends Component {
//   state = {
//     expanded: null,
//     panelNumber: '',
//     id: '',
//     hullSize: '',
//     length: '',
//     diameter: '',
//     hatches: '',
//     engines: '',
//     adf: '',
//     mr: '',
//     infoText: '',
//     createdOn: '',
//     createdBy: '',
//     modifiedOn: '',
//     modifiedBy: '',
//     hash: '',
//     disabled: true,
//     adminMod: true,
//     whatToHash: () => {
//       const strContent = `${this.state.id},${this.state.hullSize}, ${
//         this.state.length
//       }, ${this.state.diameter}, ${this.state.hatches}, ${
//         this.state.engines
//       }, ${this.state.adf}, ${this.state.mr}, ${this.state.infoText}, ${
//         this.state.createdOn
//       }, ${this.state.createdBy}, ${this.state.modifiedOn}, ${
//         this.state.modifiedBy
//       }, ${this.state.adminMod}`;

//       const salt = bcrypt.genSaltSync(10);
//       const newHash = bcrypt.hashSync(strContent, salt);

//       this.setState({ [this.state.hash]: newHash });
//     }
//   };

//   componentWillMount() {
//     const { hull } = this.props;

//     this.setState({
//       id: hull.id,
//       hullSize: hull.type,
//       length: hull.length,
//       diameter: hull.diameter,
//       hatches: hull.hatches,
//       engines: hull.engines,
//       adf: hull.adf,
//       mr: hull.mr,
//       infoText: hull.infoText,
//       createdOn: Date(hull.createdOn.seconds),
//       createdBy: hull.createdBy,
//       modifiedOn: Date(hull.modifiedOn.seconds),
//       modifiedBy: hull.modifiedBy,
//       adminMod: hull.admin,
//       hash: hull.hash,
//       disabled: hull.admin,
//       panelNumber: hull.id
//     });
//   }

//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   DeleteRecord = id => {
//     this.props.remove(id);
//   };

//   UpdateRecord = id => {
//     if (this.state.hash === '') {
//       this.state.whatToHash();
//     }

//     const changedRecord = {
//       id: this.state.id,
//       hullSize: this.state.type,
//       length: this.state.length,
//       diameter: this.state.diameter,
//       hatches: this.state.hatches,
//       engines: this.state.engines,
//       adf: this.state.adf,
//       mr: this.state.mr,
//       infoText: this.state.infoText,
//       createdOn: Math.floor(Date.now() / 1000),
//       createdBy: this.state.createdBy,
//       modifiedOn: Math.floor(Date.now() / 1000),
//       modifiedBy: this.state.modifiedBy,
//       adminMod: false,
//       hash: this.state.hash
//     };

//     this.props.update(id, changedRecord);
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <React.Fragment>
//         <CssBaseline />
//         <ExpansionPanel>
//           <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//             <Typography className={classes.heading}>
//               Expansion Panel 1
//             </Typography>
//           </ExpansionPanelSummary>
//           <ExpansionPanelDetails>
//             <Divider className={classes.secondaryDark} />
//             <Typography>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//               Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
//               eget.
//             </Typography>
//             <Divider className={classes.secondaryDark} />
//           </ExpansionPanelDetails>
//           <CreatedInformation
//             createdBy={this.state.createdBy.toString()}
//             createdOn={this.state.createdOn.toString()}
//             modifiedBy={this.state.modifiedBy.toString()}
//             modifiedOn={this.state.modifiedOn.toString()}
//           />
//           <HashInformation hash={this.state.hash} />
//         </ExpansionPanel>
//       </React.Fragment>
//     );
//   }
// }

// HullDetails.propTypes = {
//   classes: PropTypes.object.isRequired,
//   hull: PropTypes.object.isRequired,
//   remove: PropTypes.func.isRequired,
//   update: PropTypes.func.isRequired
// };

// export default withStyles(styles, { withTheme: true })(HullDetails);
