/*
    NotFound.js

    A basic 404: Resource Not Found error to display to the user if they try to access a page on the site
    that does not exist.
 */

import React from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = theme => ({
  root: {
    marginBottom: "5em",
  },
  title: {
    marginTop: "2em",
    marginBottom: "2em",      
  },
  desc: {}
});

class NotFound extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} maxWidth="lg">
        <Typography className={classes.title} variant="h2" component="h1">404 Page Not Found</Typography>
        <Typography className={classes.desc} variant="h5" component="h2">The page you have requested cannot be found. Please check your link and try again.</Typography>
        <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} variant="inherit" to="/">{"Click here to return to the homepage."}</Link>
        </Typography>
      </Container>
    );
  }
}

// Higher-Order component.
NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(NotFound);