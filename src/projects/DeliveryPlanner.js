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


const projectInfo = ProjectList["delivery-route-planner"];

const imageData = [
  {
    url: "/img/delivery-route-planner1.jpg",
    title: "Delivery view"
  },
  {
    url: "/img/delivery-route-planner2.jpg",
    title: "Route view"
  },
  {
    url: "/img/delivery-route-planner3.jpg",
    title: "Generated report"
  },
  {
    url: "/img/delivery-route-planner4.jpg",
    title: "Generated route"
  }
];


class DeliveryPlanner extends React.Component {

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
            <li>Creates an efficient route for a number of selected deliveries.</li>
              <li>Utilises database to store client, delivery, and product data.</li>
              <li>Ability to View/Add/Edit/Delete client, delivery and product data.</li>
              <li>Creates a report including delivery order, total items and estimated time.</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="Sorting Algorithm Visualiser"
            previousLink="/projects/sorting-algorithm-visualiser"
            nextTitle="To Do List"
            nextLink="/projects/todo-list"
          />

      </Container>
    );
  }
}

// Higher-Order component.
DeliveryPlanner.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(DeliveryPlanner);