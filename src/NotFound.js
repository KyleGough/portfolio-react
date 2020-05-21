import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


const useStyles = theme => ({
  root: {
    padding: "3em 4em 3em 4em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 2em 1em 2em",
    },
  },
  title: {
    fontSize: "8rem",
    color: "rgba(0, 0, 0, 0.40)",
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
  notFound: {
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.40)",
    fontSize: "20rem",
    marginTop: "0.33em",
    marginBottom: "0.33em"
  }
});

class NotFound extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} maxWidth="lg">
        <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">404</Typography>
          <Typography className={classes.subtitle} variant="h3" component="h2">Page Not Found</Typography>
          <p className={classes.intro}>
            The requested page does not exist. You can use the following links to navigate:
          </p>

          <Link className={classes.link} to="/">Return to the homepage</Link><br />
          <Link className={classes.link} to="/about">View my skills</Link><br />
          <Link className={classes.link} to="/projects">View all my projects</Link><br />
          <Link className={classes.link} to="/CV.pdf" target="_blank" rel="noopener noreferrer">View my CV</Link><br />
          <a className={classes.link} href="http://github.com/KyleGough" target="_blank" rel="noopener noreferrer">View my GitHub</a>
        </div>
      </Container>
    );
  }
}

// Higher-Order component.
NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(NotFound);