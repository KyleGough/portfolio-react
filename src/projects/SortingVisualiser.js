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


const projectInfo = ProjectList["sorting-algorithm-visualiser"];

const imageData = [
  {
    url: "/img/sorting-algorithm-visualiser1.png",
    title: "Unsorted dataset"
  },
  {
    url: "/img/sorting-algorithm-visualiser2.png",
    title: "Random and sinusoidal datasets"
  },
  {
    url: "/img/sorting-algorithm-visualiser3.png",
    title: "Bitonic sort and sorted dataset"
  },
  {
    url: "/img/sorting-algorithm-visualiser4.png",
    title: "Dataset visualised as points"
  },
  {
    url: "/img/sorting-algorithm-visualiser5.png",
    title: "Algorithm information modal"
  },
];


class SortingVisualiser extends React.Component {

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
              <li>Real-time visualiser which can be paused and stopped.</li>
              <li>20 unique sorting algorithms (incl. Bubble, Quick, Merge, Insertion).</li>
              <li>18 starting datasets to analyse the performance of each algorithm.</li>
              <li>Ability to compare two algorithms simultaneously.</li>
              <li>Customisable dataset size, range and delay.</li>
              <li>Statistics provided for each algorithm (incl. Big-O Complexities, Stability, In-place).</li>
              <li>Analysis results after sorting data (incl. Comparisons, Swaps, Duration).</li>
              <li>Custom colours and data display styles.</li>
            </ul>
          </div>

          <div className={classes.section}>
            <Typography className={classes.subtitle} variant="h5" component="h2">Algorithms</Typography>
            <ul className={classes.ul}>
              <li><strong>Bitonic</strong> - Parallel sorting algorithm</li>
              <li><strong>Bogo</strong> - Randomly permutates elements until fully sorted</li>
              <li><strong>Bubble</strong> - Common simple algorithm</li>
              <li><strong>Cocktail</strong> - Bubble sort in both directions</li>
              <li><strong>Comb</strong> - Bubble sort variant with reducing gap</li>
              <li><strong>Cycle</strong> - Optimised for minimal array writes</li>
              <li><strong>Gnome</strong> - Insertion sort variant which swaps until element in correct position</li>
              <li><strong>Heap</strong> - Builds heap and extracts from unsorted region</li>
              <li><strong>Insertion</strong> - Builds sorted array one element at a time</li>
              <li><strong>JSort</strong> - Builds heap then uses insertion sort</li>
              <li><strong>Merge</strong> - Recursively merges half of the array</li>
              <li><strong>OddEven</strong> - Compares all odd/even pairs then vice-versa</li>
              <li><strong>Pancake</strong> - Flips array between regions</li>
              <li><strong>Permutation</strong> - Compares every permutation of the array</li>
              <li><strong>Radix LSD</strong> - Bucket sorts digits from least significant to most significant</li>
              <li><strong>Selection</strong> - Builds sorted array one element at a time</li>
              <li><strong>Shell</strong> - Bubble sort variant with reducing gap</li>
              <li><strong>Smooth</strong> - Builds heap then extracts largest element</li>
              <li><strong>Stooge</strong> - Recursively sorts first 2/3 then last 2/3</li>
              <li><strong>Quick</strong> - Divide and conquer algorithm that uses a pivot</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Pagination
            nextTitle="Delivery Route Planner"
            nextLink="/projects/delivery-route-planner"
          />

      </Container>
    );
  }
}

// Higher-Order component.
SortingVisualiser.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(SortingVisualiser);