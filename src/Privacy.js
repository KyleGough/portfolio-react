import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import useStyles from './Styles';


const pageStyles = theme => ({
  intro: {
    marginBottom: "3em"
  },
  date: {
    color: theme.palette.textSecondary
},
});


class Privacy extends React.Component {

  componentDidMount(){
    document.title = "Privacy Policy";
  }

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          <div className={classes.section}>
          <Typography className={classes.title} variant="h3" component="h1">Privacy Policy</Typography>
          <p className={classes.date}>Last Revised: 19<sup>th</sup> May 2020</p>
          <p className={classes.intro}>
            Your data is not stored by myself or by any third party.
          </p>
          </div>
      </Container>
    );
  }
}

// Higher-Order component.
Privacy.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(pageStyles)(withStyles(useStyles)(Privacy));