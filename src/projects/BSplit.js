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


const projectInfo = ProjectList["bsplit"];

const imageData = [
  {
    url: "/img/bsplit1.jpg",
    title: "Bill list"
  },
  {
    url: "/img/bsplit2.jpg",
    title: "Homepage"
  },
  {
    url: "/img/bsplit3.jpg",
    title: "New bill form"
  },
  {
    url: "/img/bsplit4.jpg",
    title: "Group list"
  },
  {
    url: "/img/bsplit5.jpg",
    title: "New group form"
  }
];


class BSplit extends React.Component {

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
              <li>User Registration.</li>
              <li>User authentication.</li>
              <li>Create a group of existing users by email address.</li>
              <li>Create a bill for a group.</li>
              <li>Create a bill for any set of users.</li>
              <li>Mostly AJAX content to enchance user experience.</li>
              <li>Ability to settle a payment in one or multiple payments.</li>
              <li>Displays the status of bills.</li>
              <li>Notification system for new unseen bills.</li>
              <li>Email notifications for new groups and bills.</li>
              <li>Search functionality for bills and groups.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="To Do List"
            previousLink="/projects/todo-list"
            nextTitle="Cavern Minesweeper"
            nextLink="/projects/cavern-minesweeper"
          />

      </Container>
    );
  }
}

// Higher-Order component.
BSplit.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(BSplit);