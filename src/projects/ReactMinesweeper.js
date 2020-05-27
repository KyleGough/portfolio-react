import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ProjectIntro from '../components/ProjectIntro';
import ProjectImage from '../components/ProjectImage';
import ImageList from '../components/ImageList';
import Pagination from '../components/Pagination';
import Divider from '@material-ui/core/Divider';
import useStyles from '../Styles';
import ProjectList from './ProjectList';


const projectInfo = ProjectList["react-minesweeper"];

const imageData = [
  {
    url: "/img/react-minesweeper1.jpg",
    title: "Completed game"
  },
  {
    url: "/img/react-minesweeper2.jpg",
    title: "Partially completed game"
  },
  {
    url: "/img/react-minesweeper3.jpg",
    title: "Lost game"
  },
  {
    url: "/img/react-minesweeper4.jpg",
    title: "Initial board"
  },
  {
    url: "/img/react-minesweeper5.jpg",
    title: "App intro"
  }
];


class ReactMinesweeper extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <ProjectIntro data={projectInfo} />

          <Divider /> 

          <ProjectImage img={imageData[0]} />
          
          <Divider /> 

          {

          }

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="QuRVe"
            previousLink="/projects/qurve"
            nextTitle="Logical Sudoku Solver"
            nextLink="/projects/sudoku"
          />

      </Container>
    );
  }
}

// Higher-Order component.
ReactMinesweeper.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(ReactMinesweeper);