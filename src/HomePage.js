import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';


const useStyles = theme => ({
  root: {
    paddingBottom: "3em",
    paddingTop: "3em",
    paddingLeft: "4em",
    paddingRight: "4em"
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
  listitem: {
    fontSize: "14px",
    fontFamily: "Lato",
    marginBottom: "3em"
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
  }
});

class HomePage extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} maxWidth="lg">

        <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">Kyle Gough</Typography>
          <p className={classes.intro}>
            Currently, I am a 4<sup>th</sup> year Computer Science MEng student at the University of Warwick.
            I enjoy learning new languages, frameworks and technologies outside of the regular
            university ciriculum such as: C#, Ruby, Node, React, Zsh, Sass, Bootstrap, Materialize,
            Material UI and MongoDB. I have also created some projects using
            these languages where I feel confident enough. Furthermore, I have been priviledged
            enough to have undertaken both a spring week and summer internship with Bank of America,
            and I have accepted an offer to continue working there starting from July 2020.
          </p>
          <p className={classes.centre}>For a more compact overview you can view my CV <a className={classes.link} target="_blank" rel="noopener noreferrer" href="CV.pdf">here.</a></p>  
          <p className={classes.centre}>You can view a list of my projects <a className={classes.link} href="projects/">here.</a></p>
        </div>

        <Divider />

        homepage
        <br />
        https
        <br />
        materialize css in index
        <br />
        qurve, sudoku, lucidlab
        <br />
        github link on project pages
      </Container>
    );
  }
}

// Higher-Order component.
HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(HomePage);