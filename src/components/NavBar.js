import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const useStyles = ({
    title: {
        flexGrow: 1,
        textAlign: "left",
        fontSize: "1.25rem",
        outline: "0px",
    },
    nav: {
        backgroundColor: "#424242",
    },
    titleLink: {
        color: "#FFFFFF",
        outline: "0px",
        fontFamily: "Lato",
    },
    link: {
        color: "#FFFFFF",
        outline: "0px",
        fontFamily: "Lato",
        transition: "border-bottom 0.2s ease-out 0.05s",
        borderBottom: "2px solid transparent",
        height: "64px",
        lineHeight: "64px",
        textAlign: "center",
        "&:hover": {
            borderBottom: "2px solid #FFFFFF"
        }
    },
    linkTitle: {
        marginLeft: "1.2em",
        marginRight: "1.2em",
        fontFamily: "Lato",
        fontSize: "15px",
        display: "inline-block",
        verticalAlign: "middle",
        lineHeight: "normal",
    },
    iconLink: {
        "&:focus": {
            backgroundColor: "#5BB183",
            outline: "0px",
        },
    },
});

class NavBar extends React.Component {
    
    render() {
        const { classes, title } = this.props;
        
        return (
            <AppBar className={classes.nav} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <Link className={classes.titleLink} variant="inherit" to="/">{title}</Link>
                    </Typography>

                    <Link className={classes.link} variant="inherit" to="/">
                        <Typography variant="h6" className={classes.linkTitle}>Home</Typography>
                    </Link>

                    <Link className={classes.link} variant="inherit" to="/about">
                        <Typography variant="h6" className={classes.linkTitle}>Skills</Typography>
                    </Link>
                
                    <Link className={classes.link} variant="inherit" to="/projects">
                        <Typography variant="h6" className={classes.linkTitle}>
                            Projects
                        </Typography>
                    </Link>
                
                    <Tooltip title="GitHub">
                        <a className={classes.link} variant="inherit" href="http://github.com/KyleGough" target="_blank" rel="noopener noreferrer">
                            <IconButton className={classes.iconLink} color="inherit">
                                <GitHubIcon />
                            </IconButton>
                        </a>
                    </Tooltip>

                </Toolbar>
            </AppBar>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title:   PropTypes.string.isRequired,
};

export default withRouter(withStyles(useStyles)(NavBar));