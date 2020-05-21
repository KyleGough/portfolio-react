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


const projectInfo = ProjectList["url-shortener"];

const imageData = [
  {
    url: "/img/url-shortener1.png",
    title: "Shortened URL"
  },
  {
    url: "/img/url-shortener2.png",
    title: "Shortened URL"
  }
];


class URLShortener extends React.Component {

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
              <li>Simple URL shortener.</li>
              <li>AJAX request to send URL and get link counter.</li>
              <li>Express.js to handle routing for GET and POST requests.</li>
              <li>Live counter on homepage of how many links have been created.</li>
              <li>Prevents shortening links from itself.</li>
              <li>Will not duplicate URLs.</li>
              <li>Copy to clipboard feature for the short URL.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="Graph Algorithm Visualiser"
            previousLink="/projects/graph-algorithm-visualiser"
            nextTitle="RSCBot"
            nextLink="/projects/rscbot"
          />

      </Container>
    );
  }
}

// Higher-Order component.
URLShortener.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(URLShortener);