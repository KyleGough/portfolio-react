import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import useStyles from './Styles';


const pageStyles = theme => ({
  errorCode: {
    fontSize: "8rem",
    color: theme.palette.deadLink,
  },
  intro: {
    marginBottom: "3em"
  }
});


class NotFound extends React.Component {

  componentDidMount(){
    document.title = "Page Not Found";
  }

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} maxWidth="lg">
        <div className={classes.section}>
          <Typography className={classes.errorCode} variant="h3" component="h1">404</Typography>
          <Typography className={classes.subtitle} variant="h3" component="h2">Page Not Found</Typography>
          <p className={classes.intro}>
            The requested page does not exist. You can use the following links to navigate:
          </p>

          <Link className={classes.link} to="/">Return to the homepage</Link><br />
          <Link className={classes.link} to="/about">View my skills</Link><br />
          <Link className={classes.link} to="/projects">View all my projects</Link><br />
          <Link className={classes.link} to="/CV.pdf" target="_blank" rel="noopener noreferrer">View my CV</Link><br />
          <a className={classes.link} href="https://github.com/KyleGough" target="_blank" rel="noopener noreferrer">View my GitHub</a>
        </div>
      </Container>
    );
  }
}

// Higher-Order component.
NotFound.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(pageStyles)(withStyles(useStyles)(NotFound));