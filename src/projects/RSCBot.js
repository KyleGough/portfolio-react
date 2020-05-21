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


const projectInfo = ProjectList["rscbot"];

const imageData = [
  {
    url: "/img/rscbot1.png",
    title: "Stock query"
  },
  {
    url: "/img/rscbot2.png",
    title: "Newsfeed"
  },
  {
    url: "/img/rscbot3.png",
    title: "Favourites selection"
  },
  {
    url: "/img/rscbot4.png",
    title: "News query"
  },
  {
    url: "/img/rscbot5.png",
    title: "Other queries"
  },
  {
    url: "/img/rscbot6.png",
    title: "Help modal"
  }
];


class RSCBot extends React.Component {

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
              <li>Fast and responsive answers to stock market queries.</li>
              <li>Hourly news briefings from a selection of the user's favourite companies and sectors.</li>
              <li>Ability to select favourite companies and sectors.</li>
              <li>Poll rate choice for each individual company and sector.</li>
              <li>Extensive list of available queries.</li>
              <li>AI to detect possible interests to the user.</li>
              <li>Sentiment analysis on every news story recieved.</li>
              <li>Currency conversion capabilities for USD, GBP and Euro.</li>
              <li>Text and Voice input.</li>
              <li>Textual, Graphic and Audio output.</li>
            </ul>
          </div>
  
          <Divider />

          <ImageList data={imageData} />

          <Pagination
            previousTitle="URL Shortener"
            previousLink="/projects/url-shortener"
            nextTitle="Roller Coaster"
            nextLink="/projects/roller-coaster"
          />

      </Container>
    );
  }
}

// Higher-Order component.
RSCBot.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(RSCBot);