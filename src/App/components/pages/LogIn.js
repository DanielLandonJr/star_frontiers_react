// this is mostly boiler plate code from material-ui for a logon screen

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CssBaseline, withStyles } from '@material-ui/core';
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel
} from '@material-ui/core';
import { Checkbox, Input, InputLabel, Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function SignIn(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography className={classes.typography} variant="h4">
            Star Frontiers
          </Typography>
          <Typography className={classes.typography} variant="caption">
            Alpha Dawn/Knight Hawks Generator
          </Typography>
          <Typography
            className={classes.typography}
            component="h1"
            variant="h5"
          >
            Sign in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                disabled={true}
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                disabled={true}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={
                <Checkbox value="remember" color="primary" disabled={true} />
              }
              label="Remember me"
            />
            <Typography>
              Authentication disabled ... just push the button Christian
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              component={Link}
              to="home"
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SignIn);
