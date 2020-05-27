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


const projectInfo = ProjectList["roller-coaster"];

const imageData = [
  {
    url: "/img/roller-coaster1.jpg",
    title: "Back cart view"
  },
  {
    url: "/img/roller-coaster2.jpg",
    title: "Follow view"
  },
  {
    url: "/img/roller-coaster3.jpg",
    title: "Middle cart view"
  },
  {
    url: "/img/roller-coaster4.jpg",
    title: "Follow view"
  }
];


class RollerCoaster extends React.Component {

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
              <li>Looping track with lift-hill, drop, loop-the-loop and turns.</li>
              <li>Texture Mapping of cart and wheels.</li>
              <li>Skybox.</li>
              <li>First-person camera view.</li>
              <li>Overview camera mode.</li>
              <li>Rotating cart wheels.</li>
              <li>Lighting.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="RSCBot"
            previousLink="/projects/rscbot"
            nextTitle="Cave Exploration"
            nextLink="/projects/cave-exploration"
          />

      </Container>
    );
  }
}

// Higher-Order component.
RollerCoaster.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(RollerCoaster);