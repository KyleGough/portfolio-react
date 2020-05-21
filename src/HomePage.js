import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


const useStyles = theme => ({
  root: {
    padding: "3em 4em 3em 4em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 2em 1em 2em",
    },
  },
  title: {
    marginTop: "1em",
    marginBottom: "1em",      
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
  listitem: {
    fontSize: "14px",
    fontFamily: "Lato",
    marginBottom: "3em"
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
  intro: {
    marginBottom: "3em"
  },
  centre: {
    textAlign: "center"
  },
  imgShowcase: {
    paddingBottom: "3em",
  },
  linkButton: {
    marginTop: "1em",
    background: "linear-gradient(149deg, rgba(238,78,45,1) 0%, rgba(231,133,8,1) 60%, rgba(233,118,14,1) 100%)", 
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textTransform: "none",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontWeight: 375,
  },
  gridLink: {
    textAlign: "center",
    "& > *": {
      display: "inline-block"
    }
  },
  linkDesc: {
    fontFamily: "Merriweather",
    marginTop: "1.25em"
  }
});

const imageShowcase = [
  {
    src: "/img/sudoku1.png",
    title: "Logical Sudoku Solver"
  },
  {
    src: "/img/cave-exploration1.png",
    title: "Cave Exploration"
  },
  {
    src: "/img/sorting-algorithm-visualiser1.png",
    title: "Sorting Algorithm Visualiser"
  },
  {
    src: "/img/bsplit1.png",
    title: "Bill Splitter"
  }
];


class HomePage extends React.Component {

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
          >            
            {
              imageShowcase.map((image) => (
                <React.Fragment>
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

        https
        <br />
        sudoku images
        <br />
        hosting
      </Container>
    );
  }
}

// Higher-Order component.
HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(HomePage);