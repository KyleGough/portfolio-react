import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import useStyles from './Styles';


const pageStyles = theme => ({
  listitem: {
    fontSize: "14px",
    fontFamily: theme.font.primary,
    marginBottom: "3em"
  },
  intro: {
    marginBottom: "3em"
  },
  centre: {
    textAlign: "center"
  },
  imgShowcase: {
    paddingBottom: "3em",
  },
  linkButton: theme.linkButton,
  gridLink: {
    textAlign: "center",
    "& > *": {
      display: "inline-block"
    }
  },
  linkDesc: {
    fontFamily: theme.font.primary,
    fontWeight: 200,
    marginTop: "1.25em"
  }
});

const imageShowcase = [
  {
    src: "/img/sudoku1.jpg",
    title: "Logical Sudoku Solver"
  },
  {
    src: "/img/cave-exploration1.jpg",
    title: "Cave Exploration"
  },
  {
    src: "/img/sorting-algorithm-visualiser1.jpg",
    title: "Sorting Algorithm Visualiser"
  },
  {
    src: "/img/bsplit1.jpg",
    title: "Bill Splitter"
  }
];


class HomePage extends React.Component {

  componentDidMount(){
    document.title = "Kyle Gough - Portfolio";
  }

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} maxWidth="lg">

        <div className={classes.imgShowcase}>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            transitionTime={750}
            interval={5000}
          >            
            {
              imageShowcase.map((image) => (
                <React.Fragment key={image.title}>
                  <img src={image.src} alt={image.title} />
                  <p className="legend">{image.title}</p>
                </React.Fragment>
              ))
            }
          </Carousel>
        </div>
        
        <Divider />
                
        <div className={classes.section}>
          <p className={classes.intro}>
            Hello and welcome to my portfolio website showcasing my programming projects. 
            I'm a 4<sup>th</sup> year Computer Science MEng student at the University of Warwick
            who enjoys programming and web development. My most recent projects include a complete rebuild of this website in
            React and a logical Sudoku solver written in Python.
          </p>
       
          <Grid className={classes.gridLink} container spacing={3}>
            <Grid container item xs={12} sm={6}>
              <Link to="/projects">
                <Button className={classes.linkButton}>Project List</Button>
              </Link>
              <p className={classes.linkDesc}>View a list of all my programming projects</p>
            </Grid>
            <Grid className={classes.columnBlock} container item xs={12} sm={6}>
              <Link to="/about">
                <Button className={classes.linkButton}>About Me</Button>
              </Link>  
              <p className={classes.linkDesc}>View my skills and additional information</p>
            </Grid>
          </Grid>  
        </div>

      </Container>
    );
  }
}

// Higher-Order component.
HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(pageStyles)(withStyles(useStyles)(HomePage));