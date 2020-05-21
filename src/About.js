import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Skill from './components/Skill';
import Divider from '@material-ui/core/Divider';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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
  arrow: {
    fontSize: "0.7rem",
    marginLeft: "0.5em",
    marginRight: "0.5em"
  }
});

// List of programming languages.
const skillsProgramming = [
  ["Python", "90", "Logical Sudoku Solver, Machine Learning, Image Analysis", "Confident"],
  ["Java", "80", "Robot Maze Environment, Steganography, Witter", "Confident"],
  ["C#", "75", "Sorting Visualiser, Delivery Route Planner", "Confident"],
  ["C++", "65", "OpenGL Simulation of a Roller Coaster", "Comfortable"],
  ["C", "35", "3D Printing Algorithms", "Beginner"],
  ["Visual Basic", "50", "First Programming Language, CLI Sorting Algorithm Visualiser", "Comfortable"],
  ["Haskell", "50", "Mastermind Coursework, Scratch Clone Coursework", "Comfortable"],
  ["Ruby", "30", "Minesweeper Game", "Beginner"],
  ["MATLAB", "45", "Digital Forensics on Images", "Beginner"]
];

// List of web technologies.
const skillsWeb = [
  ["JavaScript", "90", "Portfolio, LucidLab, QuRVe, Graph Algorithm Visualiser, RSCBot", "Confident"],
  ["HTML", "90", "Portfolio, BSplit, To Do List", "Confident"],
  ["CSS", "90", "Portfolio, LucidLab, QuRVe, BSplit", "Confident"],
  ["Sass", "50", "Portfolio*", "Comfortable"],
  ["Less", "50", "QuRVe, React Minesweeper", "Comfortable"],
  ["PHP", "55", "BSplit, Portfolio*", "Comfortable"]
];

// List of web frameworks and libraries.
const skillsWebOther = [
  ["React", "65", "Portfolio, LucidLab, QuRVe", "Comfortable"],
  ["Node.js", "60", "Portfolio, LucidLab, QuRVe, URL Shortener", "Comfortable"],
  ["jQuery", "60", "BSplit, To Do List", "Comfortable"],
  ["Bootstrap", "65", "BSplit, To Do List, Portfolio*", "Comfortable"],
  ["Materialize", "60", "Portfolio*", "Comfortable"],
  ["Material UI", "80", "LucidLab, Portfolio", "Confident"],
  ["Webix", "55", "QuRVe", "Comfortable"]
];

// List of database related technologies.
const skillsDatabase = [
  ["SQL", "60", "Delivery Route Planner, BSplit, Department Store Database Analysis", "Comfortable"],
  ["Access SQL", "25", "Delivery Route Planner", "Beginner"],
  ["SQLite", "30", "BSplit", "Beginner"],
  ["MongoDB", "10", "URL Shortener", "Beginner"],
];

// List of other technologies.
const skillsOther = [
  ["Bash", "75", "Shell Scripting Exercises, Finding security defects in a VM", "Confident"],
  ["Zsh", "85", "Personal Shell of Choice, Everyday Use with Manjaro i3", "Confident"],
  ["Git", "70", "Used in all Personal and Group Projects", "Comfortable"],
  ["LaTeX", "50", "Dissertation, Multiple Group Projects ", "Comfortable"],
  ["Markdown", "75", "Lecture Notes", "Confident"],
  ["Alloy", "20", "Simple Exercises, CS262 Coursework", "Beginner"]
];

class About extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">About Me</Typography>
          <p className={classes.intro}>
             Currently, I am a 4<sup>th</sup> year Computer Science MEng student at the University of Warwick.
             I enjoy learning new languages, frameworks and technologies outside of the regular
             university ciriculum such as: C#, Ruby, Node, React, Zsh, Sass, Bootstrap, Materialize,
             Material UI and MongoDB. I have also created some projects using
             these languages where I feel confident enough. Furthermore, I have been priviledged
             enough to have undertaken both a spring week and summer internship with Bank of America,
             and I have accepted an offer to continue working there starting from July 2020.
          </p>
          <p className={classes.centre}>For a more compact overview you can view my CV <a className={classes.link} target="_blank" rel="noopener noreferrer" href="CV.pdf">here.</a></p>  
          <p className={classes.centre}>You can view a list of my projects <Link className={classes.link} to="/projects">here.</Link></p>
          </div>

          <Divider />

          <div className={classes.section}>
          <Typography className={classes.subtitle} variant="h4" component="h2">Programming Languages</Typography>
          { 
            skillsProgramming.map((skill) => {
              return (
                <Skill
                  key={skill[0]}
                  theme="progressProgramming"
                  language={skill[0]}
                  percentage={skill[1]}
                  desc={skill[2]}
                  proficiency={skill[3]}
                />  
              );
            })
          }
          </div>

          <Divider />

          <div className={classes.section}>
          <Typography className={classes.subtitle} variant="h4" component="h2">Web Development</Typography>
          { 
            skillsWeb.map((skill) => {
              return (
                <Skill
                  key={skill[0]}
                  theme="progressWeb"
                  language={skill[0]}
                  percentage={skill[1]}
                  desc={skill[2]}
                  proficiency={skill[3]}
                />  
              );
            })
          }
          </div>

          <div className={classes.section}>
          <Typography className={classes.subtitle} variant="h6" component="h3">Web Frameworks &amp; Libraries</Typography>
          { 
            skillsWebOther.map((skill) => {
              return (
                <Skill
                  key={skill[0]}
                  theme="progressWeb"
                  language={skill[0]}
                  percentage={skill[1]}
                  desc={skill[2]}
                  proficiency={skill[3]}
                />  
              );
            })
          }
          </div>

          <Divider />

          <div className={classes.section}>
          <Typography className={classes.subtitle} variant="h4" component="h2">Database</Typography>
          { 
            skillsDatabase.map((skill) => {
              return (
                <Skill
                  key={skill[0]}
                  theme="progressDatabase"
                  language={skill[0]}
                  percentage={skill[1]}
                  desc={skill[2]}
                  proficiency={skill[3]}
                />  
              );
            })
          }
          </div>

          <Divider />

          <div className={classes.section}>
          <Typography className={classes.subtitle} variant="h4" component="h2">Other</Typography>
          { 
            skillsOther.map((skill) => {
              return (
                <Skill
                  key={skill[0]}
                  theme="progressOther"
                  language={skill[0]}
                  percentage={skill[1]}
                  desc={skill[2]}
                  proficiency={skill[3]}
                />  
              );
            })
          }
          </div>

          <Divider />

          <div className={classes.section}>
            <Typography className={classes.subtitle} variant="h4" component="h2">Modules Taken</Typography>
            
            <Typography className={classes.subtitle} variant="h6" component="h3">Year 1 Modules</Typography>
            <ul className={classes.listitem}>
              <li>CS118: Programming for Computer Scientists</li>
              <li>CS126: Design of Information Structures</li>
              <li>CS130: Mathematics for Computer Scientists I</li>
              <li>CS131: Mathematics for Computer Scientists II</li>
              <li>CS132: Computer Organisation and Architecture</li>
              <li>CS133: Professional Skills</li>
              <li>
                CS139: Web Development Technologies
                <ArrowRightAltIcon className={classes.arrow} />
                <Link className={classes.link} to="/projects/todo-list">
                  To Do List
                </Link>
                , <Link className={classes.link} to="/projects/bsplit">
                  BSplit
                </Link>
                </li>
              <li>CS140: Computer Security</li>
            </ul>

            <Typography className={classes.subtitle} variant="h6" component="h3">Year 2 Modules</Typography>
            <ul className={classes.listitem}>
              <li>CS241: Operating Systems and Computer Networks</li>
              <li>CS256: Functional Programming</li>
              <li>CS258: Database Systems</li>
              <li>CS259: Formal Languages</li>
              <li>CS260: Algorithms</li>
              <li>CS261: Software Engineering</li>
              <li>
                CS262: Logic and Verification
                <ArrowRightAltIcon className={classes.arrow} />
                <Link className={classes.link} to="/projects/rscbot">
                  RSCBot
                </Link>
                </li>
              <li>CS263: Cyber Security</li>
            </ul>

            <Typography className={classes.subtitle} variant="h6" component="h3">Year 3 Modules</Typography>
            <ul className={classes.listitem}>
              <li>
                CS310: Computer Science Project (Dissertation) 
                <ArrowRightAltIcon className={classes.arrow} />
                <Link className={classes.link} to="/projects/cave-exploration">
                  Using Swarm AI to Map a Cave Network
                </Link>
              </li>
              <li>CS313: Mobile Robotics</li>
              <li>
                CS324: Computer Graphics
                <ArrowRightAltIcon className={classes.arrow} />
                <Link className={classes.link} to="/projects/roller-coaster">
                  Roller Coaster
                </Link>
              </li>
              <li>CS331: Neural Computing</li>
              <li>CS342: Machine Learning</li>
              <li>CS352: Project Management</li>
              <li>CS355: Digital Forensics</li>
            </ul>

            <Typography className={classes.subtitle} variant="h6" component="h3">Year 4 Modules</Typography>
            <ul className={classes.listitem}>
              <li>CS402: High Peformance Computing</li>
              <li>
                CS407: Group Project
                <ArrowRightAltIcon className={classes.arrow} />
                <Link className={classes.link} to="/projects/lucidlab">
                  LucidLab
                </Link>
              </li>
              <li>CS413: Image and Video Analysis</li>
              <li>CS419: Quantum Computing</li>
              <li>CS904: Computational Biology</li>
              <li>CS910: Foundations of Data Analytics</li>
              <li>CS915: Advanced Computer Security</li>
            </ul>
          </div>          

      </Container>
    );
  }
}

// Higher-Order component.
About.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(About);