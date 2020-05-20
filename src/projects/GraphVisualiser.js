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


const projectInfo = ProjectList["graph-algorithm-visualiser"];

const imageData = [
  {
    url: "/img/graph-algorithm-visualiser1.png",
    title: "NN with 2-opt"
  },
  {
    url: "/img/graph-algorithm-visualiser2.png",
    title: "Generated nodes"
  },
  {
    url: "/img/graph-algorithm-visualiser3.png",
    title: "Algorithm infomation"
  },
  {
    url: "/img/graph-algorithm-visualiser4.png",
    title: "Graham scan"
  },
  {
    url: "/img/graph-algorithm-visualiser5.png",
    title: "Random route"
  },
  {
    url: "/img/graph-algorithm-visualiser6.png",
    title: "NN with 2-opt"
  }
];


class GraphVisualiser extends React.Component {

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
              <li>Visualisation of the graph, unvisited nodes, visited nodes and edges connecting them.</li>
              <li>Choice of low number to high number of nodes in the graph.</li>
              <li>Algorithm statistics such as: Tour length, Minimum Spanning Tree length, Convex Hull nodes.</li>
              <li>Minimum Spanning Tree Algorithms - Prim's, Kruskal's</li>
              <li>Hamiltonian Path: Nearest Neighbour, Nearest Neighbour with 2-Opt, Random Tour</li>
              <li>Convex Hull Algorithms: Graham Scan</li>
              <li>Minimum Matching: Greedy (variant of Kruskal's algorithm)</li>
            </ul>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Pagination
            previousTitle="BSplit"
            previousLink="/projects/bsplit"
            nextTitle="URL Shortener"
            nextLink="/projects/url-shortener"
          />

      </Container>
    );
  }
}

// Higher-Order component.
GraphVisualiser.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(GraphVisualiser);