import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = theme => ({
    root: {
        marginTop: "2.5em",
        marginBottom: "2.5em"
    },
    image: {
        width: "100%",
        display: "block",
        height: "auto",
        boxShadow: theme.decoration.imageShadow
    },
});


class ProjectImage extends React.Component {
    
    render() {
        const { classes, img } = this.props;
        
        return (
            <Grid className={classes.root} container spacing={1} alignItems="center" justify="center">
              <Grid container item xs={12} lg={10}>
                <img className={classes.image} src={img.url} alt={img.title} />
              </Grid>
            </Grid>
        );
    }
}

ProjectImage.propTypes = {
    classes: PropTypes.object.isRequired,
    img: PropTypes.object.isRequired
};

export default withStyles(useStyles)(ProjectImage);