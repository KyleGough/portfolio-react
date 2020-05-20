import React from 'react';
import '../App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
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
    const { classes, title, subtitle, date, desc, chips } = this.props;

    return (   
        <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">{title}</Typography>
          { subtitle ? <Typography className={classes.title} variant="h6" component="h2">{subtitle}</Typography> : null }
          <p className={classes.date}>{date}</p>
          <p className={classes.intro}>{desc}</p>
          {
            chips.map((item) => {
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
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    chips: PropTypes.array.isRequired
};  

export default withStyles(useStyles)(ProjectIntro);