import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ProjectIntro from '../components/ProjectIntro';
import ProjectImage from '../components/ProjectImage';
import ImageList from '../components/ImageList';
import Pagination from '../components/Pagination';
import Divider from '@material-ui/core/Divider';
import useStyles from './Styles';
import ProjectList from './ProjectList';


const projectInfo = ProjectList["cavern-minesweeper"];

const imageData = [
  {
    url: "/img/cavern-minesweeper1.png",
    title: "Finished game"
  },
  {
    url: "/img/cavern-minesweeper2.png",
    title: "Started game"
  }
];


class CavernMinesweeper extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <ProjectIntro data={projectInfo} />

          <Divider /> 

          <ProjectImage img={imageData[0]} />
          
          <Divider /> 

          <div className={classes.section}>
            <Typography className={classes.subtitle} variant="h5" component="h2">Features</Typography>
            <ul className={classes.ul}>
              <li>Three playable difficulties.</li>
              <li>Tiered Ores which damage the player if their level is not sufficient enough.</li>
              <li>Flood Fill algorithm for revealing tiles.</li>
              <li>Shoes GUI.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Pagination
            previousTitle="BSplit"
            previousLink="/projects/bsplit"
            nextTitle="Graph Algorithm Visualiser"
            nextLink="/projects/graph-algorithm-visualiser"
          />

      </Container>
    );
  }
}

// Higher-Order component.
CavernMinesweeper.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(CavernMinesweeper);