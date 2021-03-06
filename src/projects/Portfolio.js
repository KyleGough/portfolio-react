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
import Grid from '@material-ui/core/Grid';


const projectInfo = ProjectList["portfolio"];

const imageData = [
  {
    url: "/img/portfolio1.jpg",
    title: "Project page"
  },
  {
    url: "/img/portfolio2.jpg",
    title: "Skills page"
  },
  {
    url: "/img/portfolio3.jpg",
    title: "Project list page"
  },
  {
    url: "/img/portfolio-projects-v1.jpg",
    title: "Portfolio project page v1"
  },
  {
    url: "/img/portfolio-projects-v2.jpg",
    title: "Portfolio project page v2"
  },
  {
    url: "/img/portfolio-projects-v3.jpg",
    title: "Portfolio project page v3"
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
            <Grid container spacing={3}>
              <Grid container item xs={12} md={6}>
                <p>
                  <strong className={classes.subsubtitle}>Version 1 (HTML)</strong>
                  The initial version created in late 2016 and was a simple site created with HTML, Sass
                  and Bootstrap. As additional project pages were added the CSS framework was ported to
                  Materialize. This version was never made public.
                </p>   
              </Grid>
              <Grid container item xs={12} md={6}>
                <ProjectImage img={imageData[3]} />
              </Grid>
              <Grid container item xs={12} md={6}>
                <p>
                  <strong className={classes.subsubtitle}>Version 2 (PHP)</strong>
                  The second iteration of the site was rebuilt in PHP to aid maintainability and expand
                  functionality. Using PHP allowed reusable components such as pagination, navigation bars,
                  footers, and skill progress bars. However these components were not easily maintainable
                  or readable.
                  This version's repository can be viewed <a className={classes.link} href="https://github.com/KyleGough/portfolio" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
              </Grid>
              <Grid container item xs={12} md={6}>
                <ProjectImage img={imageData[4]} />
              </Grid>
              <Grid container item xs={12} md={6}>
                <p>
                  <strong className={classes.subsubtitle}>Version 3 (React)</strong>
                  The current version was rebuilt again in May 2020 with React due to its benefits and ease of
                  use over PHP. After using React in multiple other projects, I decided to rebuild the site taking
                  effort to replicate most of the previous styling but making specific changes where necessary.
                  The app was built starting from an initial create-react-app environment using Material UI for
                  UI components, a mixture of vanilla CSS and CSS-in-JS for custom styling, and Express.js for the
                  server and routing. The current version's repository can be viewed <a className={classes.link} href="https://github.com/KyleGough/portfolio-react" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
              </Grid>
              <Grid container item xs={12} md={6}>
                <ProjectImage img={imageData[5]} />
              </Grid>
            </Grid>
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