import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';


const useStyles = theme => ({
  title: {
    marginTop: "1em",      
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
  intro: {
    marginBottom: "2em"
  },
  centre: {
    textAlign: "center"
  },
  date: {
    color: "#4CAF50",
  },
  chip: {
    fontFamily: "Lato",
    margin: "4px"
  }
});


class ProjectIntro extends React.Component {

  render() {
    const { classes, data } = this.props;

    return (   
        <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">{data.title}</Typography>
          { data.subtitle ? <Typography className={classes.title} variant="h6" component="h2">{data.subtitle}</Typography> : null }
          <p className={classes.date}>{data.date}</p>
          <p className={classes.intro}>{data.desc}</p>
          {
            data.chips.map((item) => {
              return (
                <Chip className={classes.chip} label={item} color="primary" variant="outlined" />
              )   
            })
          }
        </div>
    );
  }
}

// Higher-Order component.
ProjectIntro.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};  

export default withStyles(useStyles)(ProjectIntro);