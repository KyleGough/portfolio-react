import React from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Project from './components/Project';


const useStyles = theme => ({
  root: {
    paddingBottom: "3em",
    paddingTop: "3em",
    paddingLeft: "4em",
    paddingRight: "4em"
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
    marginBottom: "2em"
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
  }
});


class Projects extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">Projects</Typography>
          <p className={classes.intro}>
             
          </p>
          </div>

          <Divider />
          
          <Project
            title="Portfolio"
            date="December 2016 - May 2020"
            desc=""
            link="projects/portfolio"
          />

          <Divider /> 

          <Project
            title="LucidLab"
            subtitle="CS407: Group Project"
            date="October 2019 - May 2020"
            desc=""
            link="projects/lucidlab"
          />

          <Divider /> 

          <Project
            title="QuRVe"
            subtitle="Bank of America Internship Project"
            date="June 2019 - August 2019"
            desc=""
            link="projects/qurve"
          />

          <Divider />    

          <Project
            title="Logical Sudoku Solver"
            date="October 2019 - December 2019"
            desc="CLI logical Sudoku solver that can solve expert level 9x9 Sudoku using only logical techniques and reasoning (in other words no brute forcing, guessing or backtracking). The program outputs a detailed description of the techniques and moves required at each step to solve unique solution Sudoku. The solver reads csv files where each puzzle can be separated by newline characters to allow batch solving. After processing all Sudoku in a given file, in-depth analysis is displayed including but not limited to: difficulty rating, occurrences of each technique, probability of each technique, processing time for each technique and total processing time."
            link="projects/sudoku"
            github="https://github.com/KyleGough/sudoku"
          />

          <Divider />

          <Project
            title="Using Swarm AI to Map a Cave Network"
            subtitle="CS310: Dissertation"
            date="December 2018 - April 2019"
            desc="Cave exploration is dangerous and time-consuming. This project demonstrates how swarm AI could be used in a group of autonomous flying drones to navigate and explore a cave as efficiently as possible. The project also includes realistic cave environment generation."
            image="/img/cave-exploration1.png"
            alt="Cave Exploration"
            link="projects/cave-exploration"
            github="https://github.com/KyleGough/CS310-Dissertation"
          />

          <Divider />

          <Project
            title="OpenGL Roller Coaster"
            subtitle="CS324: Computer Graphics"
            date="December 2018 - January 2019"
            desc="A simulation of a 3-car roller coaster which traverses a small track featuring a lift hill, drop, loop-the-loop and turns. The coaster can be viewed from a first-person perspective in each of the carts, as well as additional views that follow the carts round the track."
            image="/img/coaster1.png"
            alt="Roller Coaster"
            link="projects/roller-coaster"
          />

          <Divider />

          <Project
            title="RSCBot"
            subtitle="CS261: Software Engineering Group Project"
            date="February 2018 - March 2019"
            desc="A specialised, personalisable Trader ChatBot that can fetch data and current news on stocks and sectors from the FTSE 100 index. Our ChatBot communicates with the user in a natural way, and has been designed to identify and adapt to the user’s main interests in the stock market, making for a more personal trading experience."
            image="/img/rscbot1.png"
            alt="RSCBot"
            link="projects/rscbot"
          />

          <Divider />

          <Project
            title="URL Shortener"
            date="April 2017"
            desc="A URL shortening tool creating using Node.js, Express.js for routing GET and POST requests and MongoDB to store URLs. The project is my first using all three of these technologies. Long URLs are stored in the database and the ID is encoded and used as the short URL."
            image="/img/url-shortener1.png"
            alt="URL Shortener"
            link="projects/url-shortener"
          />

          <Divider />

          <Project
            title="Graph Algorithm Visualiser"
            date="April 2017"
            desc="A visualiser which displays the process of graph algorithms on complete graphs such as: Prim's, Kruskal's, Graham Scan, Nearest Neighbour and 2-Opt. The project was primarily a learning tool to help me improve my ability using JavaScript and better understand graph algorithms."
            image="/img/graph-algorithm-visualiser1.png"
            alt="Graph Algorithm Visualiser"
            link="projects/graph-algorithm-visualiser"
            github="https://github.com/KyleGough/graph-algorithm-visualiser"
          />

          <Divider />

          <Project
            title="Cavern Minesweeper"
            date="March 2017"
            desc="The project served as a tool for teaching me Ruby. It is my first Ruby program. Cavern Minesweeper is based off of Minesweeper but with tiered ores (mines) which can only be mined if the player has levelled up enough. The player can level up by mining ores of lower or the same tier as the player."
            image="/img/cavern-minesweeper1.png"
            alt="Cavern Minesweeper"
            link="projects/cavern-minesweeper"
            github="https://github.com/KyleGough/cavern-minesweeper"
          />

          <Divider />

          <Project
            title="BSplit"
            subtitle="CS139: Web Development Technologies Coursework"
            date="February 2017 - March 2017"
            desc="BSplit is a web application that allows registered users to create and settle payments between parties. The app's dashboard utilises AJAX requests to prevent web page reloading to enchance user experience. Dashboard and Email notifications are sent when a new bill or group is created."
            image="/img/bsplit1.png"
            alt="BSplit"
            link="projects/bsplit"
          />

          <Divider />

          <Project
            title="To Do List"
            subtitle="CS139: Web Development Technologies Lab Work"
            date="January 2017 - February 2017"
            desc="Created a To Do List Web application where users can signup and create their own lists. Learned and integrated PHP and SQL to store and query user's lists. Protected the application from SQL injection and Cross-Site scripting."
            image="/img/todo-list1.png"
            alt="To Do List"
            link="projects/todo-list"
          />

          <Divider />

          <Project
            title="Delivery Route Planner"
            subtitle="A-Level Computing Coursework"
            date="December 2015 - March 2016"
            desc="Created software in C# which creates an efficient route between multiple delivery locations. Used SQL to store and query data on products, clients and their deliveries. Produced a report which communicates the route, all items in the deliveries and the estimated time. Used graph algorithms such as Dijkstra's &amp; Nearest Neighbour with 2-Opt to optimise the route."
            image="/img/delivery-route-planner1.png"
            alt="Delivery Route Planner"
            link="projects/delivery-route-planner"
          />

          <Divider />

          <Project
            title="Sorting Algorithm Visualiser"
            date="September 2015 - November 2015"
            desc="Visualises the sorting process on a dataset, highlights swapping and sorted elements in real-time. Supports 20 sorting algorithms including: Bubble & Quicksort. Options to change size of datasets, range of numbers in the dataset and delay. Ability to compare and visualise two sorting algorithms concurrently. Supports 18 types of start data including: Random, Normal Distribution, Sawtooth and Structured."
            image="/img/sorting-algorithm-visualiser1.png"
            alt="Sorting Algorithm Visualiser"
            link="projects/sorting-algorithm-visualiser"
          />

      </Container>
    );
  }
}

// Higher-Order component.
Projects.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(Projects);