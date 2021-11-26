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
import commonStyles from './Styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Paper from '@material-ui/core/Paper';


const pageStyles = theme => ({
  title: {
    paddingTop: "1em",
    display: "block"  
  },
  subtitle: {
    paddingBottom: "1em",
    display: "block"
  },
  headline: {
    display: "block",
    textAlign: "left",
    float: "left"
  },
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
    marginTop: "1.25em",
    textAlign: "center"
  },
  linkSection: {
    paddingBottom: "4em",
    paddingTop: "4em",
    fontSize: "15px",
    fontFamily: theme.font.primary
  },
  flex: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",

  },
  avatar: {
    textAlign: "center",
    width: 200,
    height: 200,
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0
    }
  },
  avatarList: {
    marginBottom: "1em",
    marginTop: "1em",
    border: "2px solid " + theme.palette.textSecondary,
    width: 100,
    height: 100,
    "&:hover": {
      zIndex: 1000
    }
  },
  avatarGroup: {
    marginLeft: "calc(50% - 75px)"
  },
  linkColumn: {
    display: "block",
    textAlign: "center",
    marginTop: "4em",
    marginBottom: "4em"
  },
  paper: {
    padding: "2em"
  }
});

const mergedStyles = theme => Object.assign(commonStyles(theme), pageStyles(theme));

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
                
        <div className={classes.section}>           
          <Grid container spacing={3}>
            <Grid container item xs={12} sm={7}>
              <Typography className={classes.title} variant="h3" component="h1">Portfolio</Typography>
              <p className={classes.intro}>
                Hello and welcome to my portfolio website showcasing my programming projects. 
                I'm a recent Computer Science MEng graduate of the University of Warwick
                who enjoys programming and web development. My most recent projects include a complete rebuild
                of this website from PHP to React and a logical Sudoku solver written in Python.
              </p>                   
            </Grid>
            <Grid className={classes.columnBlock} container item xs={12} sm={4} alignItems="center" justify="center">
              <Avatar className={classes.avatar} alt="Avatar" src="/img/cave-exploration1.jpg" />
            </Grid>
          </Grid>  
        </div>

        <Grid container spacing={0} alignItems="center" justify="center">
          <Grid className={classes.linkColumn} container item xs={12} md={4} alignItems="center" justify="center">
            <Paper className={classes.paper} elevation={1}>
              <Link to="/projects">
                <Button className={classes.linkButton}>Project List</Button>
              </Link>
              <p className={classes.linkDesc}>View a list of all my programming projects</p>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} alignItems="center" justify="center">
            <AvatarGroup className={classes.avatarGroup} spacing={50} max={4}>
              <Avatar className={classes.avatarList} alt={imageShowcase[0].title} src={imageShowcase[0].src} />
              <Avatar className={classes.avatarList} alt={imageShowcase[1].title} src={imageShowcase[1].src} />
              <Avatar className={classes.avatarList} alt={imageShowcase[2].title} src={imageShowcase[2].src} />
              <Avatar className={classes.avatarList} alt={imageShowcase[3].title} src={imageShowcase[3].src} />
            </AvatarGroup>    
          </Grid>  
          <Grid className={classes.linkColumn} container item xs={12} md={4} alignItems="center" justify="center">
            <Paper className={classes.paper} elevation={1}>    
              <Link to="/about">
                <Button className={classes.linkButton}>About Me</Button>
              </Link>  
              <p className={classes.linkDesc}>View my skills and additional information</p> 
            </Paper>
          </Grid>
        </Grid> 
       
        <Divider />

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
        

      </Container>
    );
  }
}

// Higher-Order component.
HomePage.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(mergedStyles)(HomePage);
