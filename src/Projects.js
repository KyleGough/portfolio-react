import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Project from './components/Project';
import ProjectList from './projects/ProjectList';
import useStyles from './Styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';


const CustomInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #4CAF50",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: theme.font.primary,
    "&:focus": {
      borderColor: "#4CAF50"
    },
  },
}))(InputBase);

const projectTitleList = [
  "portfolio", "lucidlab", "sudoku", "react-minesweeper", "qurve",
  "cave-exploration", "roller-coaster", "rscbot", "url-shortener",
  "graph-algorithm-visualiser", "cavern-minesweeper", "bsplit",
  "todo-list", "delivery-route-planner", "sorting-algorithm-visualiser"
];

const languageList = [
  "C#", "C++", "JavaScript", "PHP", "Python", "React", "SQL", "Games/Puzzles", "Group Projects", "Web"
];


class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "All"
    };
    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount(){
    document.title = "Project List";
  }

  handleChange(e) {
    this.setState({ language: e.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">Projects</Typography>
          </div>

          <FormControl className={classes.formControl}>
            <InputLabel id="language-select-label">Filter Projects</InputLabel>
            <Select
              
              id="language-select"
              value={this.state.language}
              onChange={this.handleChange}
              label="Language"
              input={<CustomInput />}
            >
              <MenuItem value="All">
                <em>All</em>
              </MenuItem>
              {
                languageList.map((language) => (
                  <MenuItem value={language}>{language}</MenuItem>
                ))
              }
            </Select>
          </FormControl>

          {
            projectTitleList.map((projectName) => {
              const chips = ProjectList[projectName].chips ? ProjectList[projectName].chips : [];
              const chipsOld = ProjectList[projectName].chipsOld ? ProjectList[projectName].chipsOld : [];
              const chipsOther = ProjectList[projectName].chipsOther ? ProjectList[projectName].chipsOther : []; 
              const categories = ProjectList[projectName].categories ? ProjectList[projectName].categories : []; 
              const allChips = chips.concat(chipsOld).concat(chipsOther).concat(categories);

              if (this.state.language === "All" || allChips.includes(this.state.language)) {
                return (
                  <React.Fragment>
                    <Divider />
                    <Project data={ProjectList[projectName]} />
                  </React.Fragment>
                );
              }
              else {
                return null;
              }               
            })
          }

          <Divider />

      </Container>
    );
  }
}

// Higher-Order component.
Projects.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(Projects);