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


const projectInfo = ProjectList["portfolio"];

const imageData = [
  {
    url: "/img/portfolio1.png",
    title: "Project page"
  },
  {
    url: "/img/portfolio2.png",
    title: "Skills page"
  },
  {
    url: "/img/portfolio3.png",
    title: "Project list page"
  },
  {
    url: "/img/portfolio4.png",
    title: "Old portfolio version"
  }
];


class Portfolio extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <ProjectIntro data={projectInfo} />

          <Divider /> 

          <ProjectImage img={imageData[2]} />
          
          <Divider /> 

          <div className={classes.section}>
            <Typography className={classes.subtitle} variant="h5" component="h2">Versions</Typography>
            <ul className={classes.ul}>
              <li><strong>v1</strong> - Initial version created in late 2016 was a simple site created with HTML, Sass and Materialize.</li>
              <li><strong>v2</strong> - The second iteration of the site was rebuilt in PHP to aid maintainability and expand functionality.</li>
              <li><strong>Current</strong> - The current version was rebuilt again in React due to its benefits and ease of use over PHP.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="LucidLab"
            previousLink="/projects/lucidlab"
          />

      </Container>
    );
  }
}

// Higher-Order component.
Portfolio.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(Portfolio);