import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Project from './components/Project';
import ProjectList from './projects/ProjectList';


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
    marginBottom: "2em"
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


class Projects extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">Projects</Typography>
          <p className={classes.intro}>
             
          </p>
          </div>

          <Divider />
          <Project data={ProjectList["portfolio"]} />
          <Divider /> 
          <Project data={ProjectList["lucidlab"]} />
          <Divider />    
          <Project data={ProjectList["sudoku"]} />
          <Divider />
          <Project data={ProjectList["qurve"]} />
          <Divider />
          <Project data={ProjectList["cave-exploration"]} />
          <Divider />
          <Project data={ProjectList["roller-coaster"]} />
          <Divider />
          <Project data={ProjectList["rscbot"]} />
          <Divider />
          <Project data={ProjectList["url-shortener"]} />
          <Divider />
          <Project data={ProjectList["graph-algorithm-visualiser"]} />
          <Divider />
          <Project data={ProjectList["cavern-minesweeper"]} />
          <Divider />
          <Project data={ProjectList["bsplit"]} />
          <Divider />
          <Project data={ProjectList["todo-list"]} />
          <Divider />
          <Project data={ProjectList["delivery-route-planner"]} />
          <Divider />
          <Project data={ProjectList["sorting-algorithm-visualiser"]} />

      </Container>
    );
  }
}

// Higher-Order component.
Projects.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(Projects);