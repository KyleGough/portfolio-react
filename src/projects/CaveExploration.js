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
import useStyles from '../Styles';
import ProjectList from './ProjectList';


const projectInfo = ProjectList["cave-exploration"];

const imageData = [
  {
    url: "/img/cave-exploration1.png",
    title: "Multiple Drone Exploration"
  },
  {
    url: "/img/cave-exploration2.png",
    title: "Single Drone Exploration"
  },
  {
    url: "/img/cave-exploration3.png",
    title: "Single Drone Exploration"
  },
];


class CaveExploration extends React.Component {

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
              <li><strong>Realistic cave environment generation</strong> - Starting from Simplex noise, a cellular automata and several flood fills create unique, realistic cave environments for the simulation to run on.</li>
              <li><strong>Individual drone searching</strong> - A single drone can successfully explore every cell in the cave using a semi-efficient approach.</li>
              <li><strong>Multiple drone searching</strong> - Multiple drones can work together to more efficiently explore the cave by communicating information between them and avoiding exploring the same locations.</li>
              <li><strong>Visualisation</strong> - View the process of the drone's exploration. Ability to see what cells the drone has explored, potential frontier cells and the next target cell.</li>
              <li><strong>Statistics</strong> - View statistics of each drone including the distance they have travelled and percentage of the cave they have explored.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="Roller Coaster"
            previousLink="/projects/roller-coaster"
            nextTitle="QuRVe"
            nextLink="/projects/qurve"
          />

      </Container>
    );
  }
}

// Higher-Order component.
CaveExploration.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(CaveExploration);