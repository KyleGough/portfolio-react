import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = theme => ({
    section: {
        paddingBottom: "4em",
        paddingTop: "2em",
        fontSize: "15px",
        fontFamily: theme.font.primary,
        [theme.breakpoints.down("sm")]: {
          paddingBottom: "1em"
        }
    },
    link: {
        color: theme.palette.link,
        transitionDelay: "0.1s",
        transitionDuration: "0.2s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
        "&:hover": {
          color: theme.palette.linkHover
        },
        whiteSpace: "nowrap",
        [theme.breakpoints.down("sm")]: {
          display: "inline-block" 
        }
    },
    deadLink: {
        color: theme.palette.deadLink,
        [theme.breakpoints.down("sm")]: {
          display: "inline-block"
        }
    },
    leftArrow: {
        float: "left",
        marginTop: "1.2em",
        marginRight: "1em",
        [theme.breakpoints.down("sm")]: {
          marginRight: "0.33em"
        },
    },
    previousLink: {
        float: "left",
        textAlign: "center"
    },
    rightArrow: {
        float: "right",
        marginTop: "1.2em",
        marginLeft: "1em",
        [theme.breakpoints.down("sm")]: {
          marginLeft: "0.33em"
        }
    },
    nextLink: {
        float: "right",
        textAlign: "center"
    },
    small: {
        fontSize: "12.5px"
    },
    linkWrapper: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center"
      }
    }
});


class Pagination extends React.Component {
    
    render() {
        const { classes, previousTitle, previousLink, nextTitle, nextLink } = this.props;
        
        return (
            <div className={classes.section}>
              { previousLink ? 
                <div className={classes.linkWrapper}>
                  <Link className={classes.link} to={previousLink}> 
                    <ArrowBackIosIcon className={classes.leftArrow} />
                    <p className={classes.previousLink}>
                      <span className={classes.small}>Previous Project</span>
                      <br />
                      {previousTitle}
                    </p>
                  </Link>
                </div>
                :
                <div className={classes.linkWrapper}>
                  <div className={classes.deadLink}>
                    <ArrowBackIosIcon className={classes.leftArrow} />
                    <p className={classes.previousLink}>
                      <span className={classes.small}>Previous Project</span>
                      <br />
                      -
                    </p>
                  </div>
                </div>
              }     
              { nextLink ? 
                <div className={classes.linkWrapper}>
                  <Link className={classes.link} to={nextLink}> 
                    <ArrowForwardIosIcon className={classes.rightArrow} />
                    <p className={classes.nextLink}>
                      <span className={classes.small}>Next Project</span>
                      <br />
                      {nextTitle}
                    </p>
                  </Link>
                </div>
                :
                <div className={classes.linkWrapper}>
                  <div className={classes.deadLink}>
                    <ArrowForwardIosIcon className={classes.rightArrow} />
                    <p className={classes.nextLink}>
                      <span className={classes.small}>Next Project</span>
                      <br />
                      -
                    </p>
                  </div>
                </div>
              }       
            </div>
        );
    }
}

Pagination.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Pagination);