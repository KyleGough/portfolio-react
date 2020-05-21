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


const projectInfo = ProjectList["sudoku"];

const imageData = [
  {
    url: "/img/roller-coaster1.png",
    title: "Back cart view"
  },
];


class Sudoku extends React.Component {

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
              <li></li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Pagination
            previousTitle="QuRVe"
            previousLink="/projects/qurve"
            nextTitle="LucidLab"
            nextLink="/projects/lucidlab"
          />

      </Container>
    );
  }
}

// Higher-Order component.
Sudoku.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(Sudoku);