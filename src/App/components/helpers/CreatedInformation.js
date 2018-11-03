import React from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, withStyles } from '@material-ui/core';
import { Grid, Typography, Tooltip } from '@material-ui/core';

const styles = theme => ({
  gridContainer: {},
  gridItem: {}
});

function CreatedInformation(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={8} className={classes.root}>
        {/* create name/date */}
        <Grid item xs={12} sm={6}>
          <Tooltip title="Date Created" placement="top-start">
            <Typography variant="caption" gutterBottom>
              created on: {props.createdOn}
            </Typography>
          </Tooltip>
          <Tooltip title="Person That Created Record" placement="top-start">
            <Typography variant="caption">
              created by: {props.createdBy}
            </Typography>
          </Tooltip>
        </Grid>
        {/* modify name/date */}
        <Grid item xs={12} sm={6}>
          <Tooltip title="Date Last Modified" placement="top-start">
            <Typography variant="caption" gutterBottom>
              modified on: {props.modifiedOn}
            </Typography>
          </Tooltip>
          <Tooltip title="Person That Modified Record" placement="top-start">
            <Typography variant="caption">
              modified by: {props.modifiedBy}
            </Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

CreatedInformation.propTypes = {
  classes: PropTypes.object.isRequired,
  createdBy: PropTypes.string.isRequired,
  createdOn: PropTypes.string.isRequired,
  modifiedBy: PropTypes.string.isRequired,
  modifiedOn: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(CreatedInformation);

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// const styles = theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing.unit * 2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary
//   }
// });

// function CreatedInformation(props) {
//   const { classes } = props;

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={24}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>xs=12 sm=6</Paper>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Paper className={classes.paper}>xs=12 sm=6</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//         <Grid item xs={6} sm={3}>
//           <Paper className={classes.paper}>xs=6 sm=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// CreatedInformation.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(CreatedInformation);
