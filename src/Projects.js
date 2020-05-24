import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Project from './components/Project';
import ProjectList from './projects/ProjectList';
import useStyles from './Styles';


class Projects extends React.Component {

  componentDidMount(){
    document.title = "Project List";
  }

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">Projects</Typography>
          </div>

          <Divider />
          <Project data={ProjectList["portfolio"]} />
          <Divider /> 
          <Project data={ProjectList["lucidlab"]} />
          <Divider />    
          <Project data={ProjectList["sudoku"]} />
          <Divider />
          <Project data={ProjectList["react-minesweeper"]} />
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