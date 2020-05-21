import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ProjectIntro from '../components/ProjectIntro';
import Pagination from '../components/Pagination';
import Divider from '@material-ui/core/Divider';
import useStyles from './Styles';
import ProjectList from './ProjectList';


const projectInfo = ProjectList["qurve"];

const imageData = [
  {
    url: "/img/roller-coaster1.png",
    title: "Back cart view"
  },
];


class Qurve extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <ProjectIntro data={projectInfo} />

          <Divider /> 

          {/*
          <ProjectImage img={imageData[0]} />
          
          <Divider /> 

          <ImageList data={imageData} />
          */}

          <Pagination
            previousTitle="Cave Exploration"
            previousLink="/projects/cave-exploration"
            nextTitle="Logical Sudoku Solver"
            nextLink="/projects/sudoku"
          />

      </Container>
    );
  }
}

// Higher-Order component.
Qurve.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(Qurve);