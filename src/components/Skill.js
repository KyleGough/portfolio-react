import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = theme => ({
    root: {
        marginTop: "0.1em",
        marginBottom: "0.1em",
    },
    progressGrid: {
        marginTop: "0.45em"
    },
    desc: {
        marginTop: 0,
        marginBottom: 0,
        fontFamily: theme.font.primary,
        fontSize: "14px",
    },
    language: {
        fontFamily: theme.font.primary,
        fontSize: "15px",
        fontWeight: 700,
    },
    proficiency: { 
        color: theme.palette.textSecondary,
    },
});


class Skill extends React.Component {
    
    render() {
        const { classes, colour, percentage, language, desc, proficiency } = this.props;
        
        return (
            <Grid className={classes.root} container spacing={2}>
              <Grid className={classes.progressGrid} container item xs={3} lg={4}>
                <div className={"progress " + colour}>
                  <div className="progressBar" data-skill={percentage} style={{width: percentage + "%"}}></div>
                </div>
              </Grid>
              <Grid container item xs={9} lg={8}>
                <p className={classes.desc}><span className={classes.language}>{language}</span> - {desc}
                  <br />
                <small className={classes.proficiency}>{proficiency}</small></p>
              </Grid>
            </Grid>  
        );
    }
}

Skill.propTypes = {
    classes: PropTypes.object.isRequired,
    colour: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    proficiency: PropTypes.string.isRequired,
};

export default withStyles(useStyles)(Skill);