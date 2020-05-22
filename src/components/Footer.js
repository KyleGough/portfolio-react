import React from 'react';
import '../App.css';
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
        fontFamily: theme.font.primary,
        backgroundColor: theme.palette.navBackground,
        color: theme.palette.footerText,
        textAlign: "center"
    },
    copyright: {
        backgroundColor: theme.palette.copyrightBackground,
        verticalAlign: "middle",
        paddingTop: "0.75em",
        paddingBottom: "0.75em",
        color: theme.palette.copyrightText,
        fontWeight: 300
    },
    links: {
        backgroundColor: theme.palette.navBackground,
        verticalAlign: "middle",
        paddingBottom: "3em",
        paddingTop: "3em",
    },
    footerTitle: {
        fontWeight: "normal",
        fontFamily: theme.font.secondary,
        fontSize: "1.2rem"
    },
    iconLink: {
        color: theme.palette.footerLink,
        outline: "0px",
        "&:focus": { color: theme.palette.footerLinkHover },
        "&:hover": { color: theme.palette.footerLinkHover },
    },
    link: {
        color: theme.palette.footerLink,
        outline: "0px",
        "&:focus": { color: theme.palette.footerLinkHover },
        "&:hover": { color: theme.palette.footerLinkHover },
        transitionDelay: "0.1s",
        transitionDuration: "0.2s",
        transitionProperty: "all",
        transitionTimingFunction: "ease",
    },
    grid: {
        marginBottom: "1em",
        marginTop: "1em",
        textAlign: "center"
    },
    email: {
        fontSize: 19,
        lineHeight: 19,
        verticalAlign: "bottom",
        marginRight: "5px",
        marginBottom: "1px"
    },
    linkList: {
        textAlign: "center",
        listStyleType: "none",
        paddingLeft: 0
    }
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
                            <EmailIcon className={classes.email}/><span>  <a className={classes.link} href="mailto:kylegough@gmail.com">kylegough@gmail.com</a></span>
                        </Container>
                        </Grid>
                        <Grid className={classes.grid} item xs={6} lg={4}>
                            <h5 className={classes.footerTitle}>Projects</h5>
                            <ul className={classes.linkList}>
                                <li><Link className={classes.link} variant="inherit" to="/projects">All Projects</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/sudoku">Logical Sudoku Solver</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/cave-exploration">Cave Exploration</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/sorting-algorithm-visualiser">Sorting Visualiser</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/graph-algorithm-visualiser">Graph Algorithm Visualiser</Link></li>
                                <li><Link className={classes.link} variant="inherit" to="/projects/bsplit">BSplit</Link></li>
                            </ul>
                        </Grid>
                        <Grid className={classes.grid} item xs={6} lg={4}>
                                <h5 className={classes.footerTitle}>Website</h5>
                                <ul className={classes.linkList}>
                                    <li><a className={classes.link} target="_blank" rel="noopener noreferrer" href="/CV.pdf">CV</a></li>
                                    <li><Link className={classes.link} variant="inherit" to="/about">Skills</Link></li>
                                    <li><Link className={classes.link} variant="inherit" to="/projects">Projects</Link></li>
                                    <li><Link className={classes.link} variant="inherit" to="/privacy">Privacy</Link></li>
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