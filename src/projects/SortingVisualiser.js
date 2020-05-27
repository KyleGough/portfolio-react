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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const projectInfo = ProjectList["sorting-algorithm-visualiser"];

const imageData = [
  {
    url: "/img/sorting-algorithm-visualiser1.jpg",
    title: "Unsorted dataset"
  },
  {
    url: "/img/sorting-algorithm-visualiser2.jpg",
    title: "Random and sinusoidal datasets"
  },
  {
    url: "/img/sorting-algorithm-visualiser3.jpg",
    title: "Bitonic sort and sorted dataset"
  },
  {
    url: "/img/sorting-algorithm-visualiser4.jpg",
    title: "Dataset visualised as points"
  },
  {
    url: "/img/sorting-algorithm-visualiser5.jpg",
    title: "Algorithm information modal"
  },
];

const algorithmTable = [
  createRow("Bitonic", "Parallel sorting algorithm"),
  createRow("Bogo", "Randomly permutates elements until fully sorted"),
  createRow("Bubble", "Common simple algorithm"),
  createRow("Cocktail", "Bubble sort in both directions"),
  createRow("Comb", "Bubble sort variant with reducing gap"),
  createRow("Cycle", "Optimised for minimal array writes"),
  createRow("Gnome", "Insertion sort variant which swaps until element in correct position"),
  createRow("Heap", "Builds heap and extracts from unsorted region"),
  createRow("Insertion", "Builds sorted array one element at a time"),
  createRow("JSort", "Builds heap then uses insertion sort"),
  createRow("Merge", "Recursively merges half of the array"),
  createRow("OddEven", "Compares all odd/even pairs then vice-versa"),
  createRow("Pancake", "Flips array between regions"),
  createRow("Permutation", "Compares every permutation of the array"),
  createRow("Radix LSD", "Bucket sorts digits from least significant to most significant"),
  createRow("Selection", "Builds sorted array one element at a time"),
  createRow("Shell", "Bubble sort variant with reducing gap"),
  createRow("Smooth", "Builds heap then extracts largest element"),
  createRow("Stooge", "Recursively sorts first 2/3 then last 2/3"),
  createRow("Quick", "Divide and conquer algorithm that uses a pivot")
];

function createRow(algorithm, description) {
  return { algorithm: algorithm, description: description };
}


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
            <Typography className={classes.subtitle} variant="h5" component="h2">Overview</Typography>
            <p>
              Prior to this project, I had developed a simple CLI sorting algorithm visualiser in VB.net
              featuring a limited selection of algorithms and options. Once I had familiarised myself with
              C#, I decided to upgrade and rewrite the visualiser with a GUI, additional algorithms and
              enhanced customisation. The project served as a great tool for improving my C# and
              GUI design skills as well as futhering my understanding of how sorting algorithms operate,
              scale and perform.
            </p>
          </div>

          <div className={classes.section}>
            <Typography className={classes.subtitle} variant="h5" component="h2">Features</Typography>
            <ul className={classes.ul}>
              <li>Real-time visualiser which can be paused and stopped.</li>
              <li>20 unique sorting algorithms.</li>
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

            <Table className={classes.table} size="small" aria-label="a dense table">
              <TableBody>
                {algorithmTable.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">{row.algorithm}</TableCell>
                    <TableCell>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <ImageList data={imageData} />

          <Divider />

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