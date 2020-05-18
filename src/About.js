import React from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Skill from './components/Skill';

const useStyles = theme => ({
  root: {
    marginBottom: "5em",
    marginTop: "5em",
  },
  title: {
    marginTop: "2em",
    marginBottom: "2em",      
  },
  subtitle: {
    marginTop: "1em",
    marginBottom: "1em",        
  }
});

// List of programming languages.
const skillsProgramming = [
  ["Python", "90", "", ""],
  ["Java", "80", "Primary programming language at University. Robot Maze Environment, Steganography, Witter.", "Confident"],
  ["C#", "70", "Sorting Visualiser, Delivery Route Planner.", "Confident"],
  ["C++", "", "", ""],
  ["C", "", "", ""],
  ["Visual Basic", "", "", ""],
  ["Haskell", "", "", ""],
  ["Ruby", "", "", ""],
  ["Matlab", "", "", ""]
];

class About extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} maxWidth="lg">
        <Typography className={classes.subtitle} variant="h4" component="h2">Programming Languages</Typography>
      
        { 
          skillsProgramming.map((skill) => {
            return (
              <Skill
                key={skill[0]}
                theme="progressProgramming"
                language={skill[0]}
                percentage={skill[1]}
                desc={skill[2]}
                proficiency={skill[3]}
              />  
            );
          })
        } 

      </Container>
    );
  }
}

// Higher-Order component.
About.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(About);