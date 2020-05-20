import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = ({
    root: {
        marginBottom: "2em",
        marginTop: "2em"
    },
    title: {
        //marginTop: "1em",
        //marginBottom: "1em",      
      },
    desc: {
        fontSize: "1rem",
    },
    language: {
        fontFamily: "Lato",
        fontSize: "15px",
        fontWeight: 700,
    },
    date: {
        color: "#4CAF50",
    },
    columnBlock: {
        display: "block",
    },
    image: {
        width: "100%",
        display: "block",
        height: "auto",
        boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px"
    },
    viewButton: {
        marginTop: "1em",
        background: "linear-gradient(149deg, rgba(238,78,45,1) 0%, rgba(231,133,8,1) 60%, rgba(233,118,14,1) 100%)", 
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 48,
        padding: "0 30px",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        textTransform: "none",
        fontFamily: "Lato",
        fontSize: "1rem",
        fontWeight: 375,
    },
    github: {
        marginTop: "0.85em",
        marginLeft: "1em",
        marginRight: "1em",
    }
});


class Project extends React.Component {
    
    render() {
        const { classes, title, subtitle, date, desc, image, alt, link, github } = this.props;
        
        return (
            <Grid className={classes.root} container spacing={3}>
                <Grid className={classes.columnBlock} container item xs={12} lg={7}>
                    <Typography className={classes.title} variant="h5" component="h2">{title}</Typography>
                    { subtitle ? <Typography className={classes.subtitle} variant="h6" component="h3">{subtitle}</Typography> : null }
                    <p className={classes.date}>{date}</p>
                    <p className={classes.desc}>{desc}</p>
                    { link ? <Button className={classes.viewButton} href={link}>View Project</Button> : null }
                    { github ? <IconButton className={classes.github} color="secondary" aria-label="github"><GitHubIcon /></IconButton> : null }
                </Grid>
                <Grid className={classes.columnBlock} container item xs={12} lg={5}>
                    <img className={classes.image} src={image} alt={alt} />
                </Grid>
            </Grid>  
        );
    }
}

Project.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};

export default withStyles(useStyles)(Project);