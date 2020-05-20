import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = ({
    root: {
        marginTop: "0.1em",
        marginBottom: "0.1em",
    },
    desc: {
        marginTop: 0,
        marginBottom: 0,
        fontFamily: "Lato",
        fontSize: "14px",
    },
    language: {
        fontFamily: "Lato",
        fontSize: "15px",
        fontWeight: 700,
    },
    proficiency: {
        color: "#4CAF50",
    },
});


class Skill extends React.Component {
    
    render() {
        const { classes, theme, percentage, language, desc, proficiency } = this.props;
        
        return (
            <Grid className={classes.root} container spacing={2}>
                <Grid container item xs={3} lg={4}>
                    <div className={"progress " + theme}>
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
    theme: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    proficiency: PropTypes.string.isRequired,
};

export default withStyles(useStyles)(Skill);