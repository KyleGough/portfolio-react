import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';


const useStyles = theme => ({
  root: {
    padding: "3em 4em 3em 4em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 2em 1em 2em",
    },
  },
  title: {
    marginTop: "1em",
    marginBottom: "1em",      
  },
  subtitle: {
    marginTop: "1em",
    marginBottom: "1em",        
  },
  section: {
    paddingBottom: "2em",
    paddingTop: "2em",
    fontSize: "15px",
    fontFamily: "Lato",
  },
  link: {
    color: "#03B0EE",
    transitionDelay: "0.1s",
    transitionDuration: "0.2s",
    transitionProperty: "all",
    transitionTimingFunction: "ease",
    "&:hover": {
      color: "#4CAF50"
    },
    whiteSpace: "nowrap",
  },
  intro: {
    marginBottom: "3em"
  },
  centre: {
    textAlign: "center"
  },
  date: {
    color: "#4CAF50",
},
});


class Privacy extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">Privacy Policy</Typography>
          <p className={classes.date}>Last Revised: 19<sup>th</sup> May 2020</p>
          <p className={classes.intro}>
            Your data is not stored by myself or by any third party.
          </p>
          </div>

      </Container>
    );
  }
}

// Higher-Order component.
Privacy.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(Privacy);