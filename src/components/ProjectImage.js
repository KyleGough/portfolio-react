import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = ({
    root: {
        marginTop: "2.5em",
        marginBottom: "2.5em"
    },
    image: {
        width: "100%",
        display: "block",
        height: "auto",
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px"
    },
});


class ProjectImage extends React.Component {
    
    render() {
        const { classes, src, alt } = this.props;
        
        return (
            <Grid className={classes.root} container spacing={1} alignItems="center" justify="center">
              <Grid container item xs={12} lg={8}>
                <img className={classes.image} src={src} alt={alt} />
              </Grid>
            </Grid>
        );
    }
}

ProjectImage.propTypes = {
    classes: PropTypes.object.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};

export default withStyles(useStyles)(ProjectImage);