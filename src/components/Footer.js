import React from 'react';
import '../App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = theme => ({
    root: {
        top: "auto",
        bottom: 0,
        fontSize: "15px",
        fontFamily: "Lato",
        backgroundColor: "#424242",
        textAlign: "center"
    },
    copyright: {
        backgroundColor: "#353535",
        verticalAlign: "middle",
        paddingTop: "0.75em",
        paddingBottom: "0.75em",
        color: "rgba(255,255,255,0.8)",
        fontWeight: 300
    },
    links: {
        backgroundColor: "#424242",
        verticalAlign: "middle",
        color: "rgba(255,255,255,0.8)",
        paddingBottom: "3em",
        paddingTop: "3em",
    },
    footerTitle: {
        fontWeight: "normal",
        color: "#FFFFFF",
        fontFamily: "Merriweather",
        fontSize: "1.2rem"
    },
    iconLink: {
        color: "#EEEEEE",
        outline: "0px",
        "&:focus": { color: "#A8A8A8" },
        "&:hover": { color: "#A8A8A8" },
    },
    link: {
        color: "#EEEEEE",
        outline: "0px",
        "&:focus": { color: "#A8A8A8" },
        "&:hover": { color: "#A8A8A8" },
    },
    grid: {
        marginBottom: "1em",
        marginTop: "1em",
        textAlign: "center"
    },
    email: {
        fontSize: 19,
        lineHeight: 19,
        verticalAlign: "bottom"
    },
});


class Footer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <footer className={classes.root}> 
                <Container className={classes.links} maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid className={classes.grid} item xs={12} lg={4}>
                        <Container maxWidth="sm">
                            <h5 className={classes.footerTitle}>About Me</h5>
                            <p>4<sup>th</sup> Year Computer Science MEng Student at Warwick University. Programmer and Web Developer with interests in Bouldering, Cycling, Guitar, Movies and Physics.</p>
                            <EmailIcon className={classes.email}/><span>  kylegough@gmail.com</span>
                        </Container>
                        </Grid>
                        <Grid className={classes.grid} item xs={6} lg={4}>
                            <h5 className={classes.footerTitle}>Projects</h5>
                            <ul>
                                <li><Link className={classes.link} variant="inherit" to="/projects">All Projects</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/sudoku">Logical Sudoku Solver</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/cave-exploration">Cave Exploration</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/sorting-visualiser">Sorting Visualiser</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/graph-algorithm-visualiser">Graph Algorithm Visualiser</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/bsplit">BSplit</Link></li>
                            </ul>
                        </Grid>
                        <Grid className={classes.grid} item xs={6} lg={4}>
                                <h5 className={classes.footerTitle}>Website</h5>
                                <ul>
                                    <li><a className={classes.link} target="_blank" rel="noopener noreferrer" href="CV.pdf">CV</a></li>
                                    <li><Link className={classes.link} variant="inherit" to="/about">Skills</Link></li>
                                    <li><Link className={classes.link} variant="inherit" to="/projects">Projects</Link></li>
                                    <li><Link className={classes.link} variant="inherit" to="/privacy">Privacy Policy</Link></li>
                                    <li><a className={classes.link} href="http://github.com/KyleGough" target="_blank" rel="noopener noreferrer">
                                        <IconButton className={classes.iconLink} color="inherit">
                                            <GitHubIcon />
                                        </IconButton>
                                    </a></li>
                                </ul>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.copyright} maxWidth={false}>
                    <p>© 2018 - 2020 Kyle Gough</p>
                </Container>
            </footer>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Footer);