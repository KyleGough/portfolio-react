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


const projectInfo = ProjectList["todo-list"];

const imageData = [
  {
    url: "/img/todo-list1.png",
    title: "Homepage"
  },
  {
    url: "/img/todo-list2.png",
    title: "Shopping list"
  },
  {
    url: "/img/todo-list3.png",
    title: "New user registration"
  },
  {
    url: "/img/todo-list4.png",
    title: "User lists"
  },
  {
    url: "/img/todo-list5.png",
    title: "Login"
  }
];


class TodoList extends React.Component {

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
              <li>User registration.</li>
              <li>View selection of lists.</li>
              <li>View items in a list.</li>
              <li>Mark items in a list as complete.</li>
              <li>Create a new list.</li>
              <li>Add new item to a list.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="Delivery Route Planner"
            previousLink="/projects/delivery-route-planner"
            nextTitle="BSplit"
            nextLink="/projects/bsplit"
          />

      </Container>
    );
  }
}

// Higher-Order component.
TodoList.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(TodoList);