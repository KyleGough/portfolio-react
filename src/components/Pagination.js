import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = ({
    section: {
        paddingBottom: "4em",
        paddingTop: "2em",
        fontSize: "15px",
        fontFamily: "Lato",
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
    deadLink: {
        color: "rgba(0, 0, 0, 0.40)",
    },
    leftArrow: {
        float: "left",
        marginTop: "1.2em",
        marginRight: "1em"
    },
    previousLink: {
        float: "left",
        textAlign: "center"
    },
    rightArrow: {
        float: "right",
        marginTop: "1.2em",
        marginLeft: "1em"
    },
    nextLink: {
        float: "right",
        textAlign: "center"
    },
    small: {
        fontSize: "12.5px"
    }
});


class Pagination extends React.Component {
    
    render() {
        const { classes, previousTitle, previousLink, nextTitle, nextLink } = this.props;
        
        return (
            <div className={classes.section}>
              { previousLink ? 
                <Link className={classes.link} to={previousLink}> 
                  <ArrowBackIosIcon className={classes.leftArrow} />
                  <p className={classes.previousLink}>
                    <span className={classes.small}>Previous Project</span>
                    <br />
                    {previousTitle}
                  </p>
                </Link>
                :
                <div className={classes.deadLink}>
                  <ArrowBackIosIcon className={classes.leftArrow} />
                  <p className={classes.previousLink}>
                    <span className={classes.small}>Previous Project</span>
                    <br />
                    -
                  </p>
                </div>
              }     
              { nextLink ? 
                <Link className={classes.link} to={nextLink}> 
                  <ArrowForwardIosIcon className={classes.rightArrow} />
                  <p className={classes.nextLink}>
                    <span className={classes.small}>Next Project</span>
                    <br />
                    {nextTitle}
                  </p>
                </Link>
                :
                <div className={classes.deadLink}>
                  <ArrowForwardIosIcon className={classes.rightArrow} />
                  <p className={classes.nextLink}>
                    <span className={classes.small}>Next Project</span>
                    <br />
                    -
                  </p>
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