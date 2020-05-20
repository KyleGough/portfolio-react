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


const useStyles = theme => ({
  root: {
    paddingBottom: "3em",
    paddingTop: "3em",
    paddingLeft: "4em",
    paddingRight: "4em"
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
  ul: {
    marginLeft: "1em",
    "& > li": {
      listStyleType: "square!important",
      listStylePosition: "outside",

    }
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
});


const imageData = [
  {
    img: "/img/cave-exploration1.png",
    title: "Multiple Drone Exploration"
  },
  {
    img: "/img/cave-exploration2.png",
    title: "Single Drone Exploration"
  },
  {
    img: "/img/cave-exploration3.png",
    title: "Single Drone Exploration"
  },
];


class CaveExploration extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <ProjectIntro
            title="Using Swarm AI to Map a Cave Network"
            subtitle="CS310: Dissertation"
            date="December 2018 - April 2019"
            desc="Cave exploration is dangerous and time-consuming. This project demonstrates how swarm AI could be used in a group of autonomous flying drones to navigate and explore a cave as efficiently as possible. The project also includes realistic cave environment generation."
            chips={["C++", "OpenGL"]}
          />

          <Divider /> 

          <ProjectImage
            src="/img/cave-exploration1.png"
            alt="Cave Exploration"
          />
          
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

          <Pagination
            previousTitle="OpenGL Roller Coaster"
            previousLink="/projects/roller-coaster"
            nextTitle="Logical Sudoku Solver"
            nextLink="/projects/sudoku"
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