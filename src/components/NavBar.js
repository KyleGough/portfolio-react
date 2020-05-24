import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const useStyles = theme => ({
    title: {
        color: theme.palette.navText,
        outline: "0px",
        fontFamily: theme.font.primary,
        fontWeight: 300,
        flexGrow: 1
    },
    nav: {
        backgroundColor: theme.palette.navBackground
    },
    link: {
        color: theme.palette.navText,
        outline: "0px",
        fontFamily: theme.font.primary,
        transition: "border-bottom 0.2s ease-out 0.05s",
        borderBottom: "2px solid transparent",
        height: "64px",
        lineHeight: "64px",
        textAlign: "center",
        "&:hover": {
            borderBottom: "2px solid " + theme.palette.navText,
        }
    },
    drawerLink: {
      color: theme.palette.link,
      transitionDelay: "0.1s",
      transitionDuration: "0.2s",
      transitionProperty: "all",
      transitionTimingFunction: "ease",
      "&:hover": {
        color: theme.palette.linkHover
      },
      whiteSpace: "nowrap",
    },
    linkTitle: {
        marginLeft: "1.2em",
        marginRight: "1.2em",
        fontFamily: theme.font.primary,
        fontSize: "15px",
        display: "inline-block",
        verticalAlign: "middle",
        lineHeight: "normal",
    },
    iconLink: {
        color: theme.palette.navText,
        outline: "0px"
    },
});


class NavBar extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        drawerOpen: false
      };
    }

    toggleDrawer(open) {
      return event => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
          return;
        }
      
        this.setState({ drawerOpen: open });
      }
    };

    render() {
        const { classes, title } = this.props;
        
        return (
          <React.Fragment>
            
            <Drawer anchor="right" open={this.state.drawerOpen} onClose={this.toggleDrawer(false).bind(this)}>
              <List>
                <Link className={classes.drawerLink} to="/">
                  <ListItem button key="home">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    Home
                  </ListItem>
                </Link>

                <Link className={classes.drawerLink} to="/projects">
                  <ListItem button key="projects">
                    <ListItemIcon><AccountTreeIcon /></ListItemIcon>
                    Projects
                  </ListItem>
                </Link>

                <Link className={classes.drawerLink} to="/about">
                  <ListItem button key="about">
                    <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
                    About Me
                  </ListItem>
                </Link>

                <a className={classes.drawerLink} href="https://github.com/KyleGough" target="_blank" rel="noopener noreferrer">
                  <ListItem button key="github">
                    <ListItemIcon><GitHubIcon /></ListItemIcon>
                    GitHub
                  </ListItem>
                </a>
              </List>
            </Drawer>

            <AppBar className={classes.nav} position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>{title}</Typography>
                <Hidden smUp>
                <IconButton onClick={this.toggleDrawer(true).bind(this)} color="inherit" aria-label="menu" >
                  <MenuIcon />
                </IconButton>
                </Hidden>
                <Hidden xsDown>
                  <Link className={classes.link} variant="inherit" to="/">
                    <Typography variant="h6" className={classes.linkTitle}>Home</Typography>
                  </Link>
                  <Link className={classes.link} variant="inherit" to="/projects">
                    <Typography variant="h6" className={classes.linkTitle}>Projects</Typography>
                  </Link>
                  <Link className={classes.link} variant="inherit" to="/about">
                    <Typography variant="h6" className={classes.linkTitle}>Skills</Typography>
                  </Link>
                  <Tooltip title="GitHub">
                    <a className={classes.link} variant="inherit" href="https://github.com/KyleGough" target="_blank" rel="noopener noreferrer">
                      <IconButton className={classes.iconLink} color="inherit">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                </Hidden>
              </Toolbar>
            </AppBar>
          </React.Fragment>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
    title:   PropTypes.string.isRequired,
};

export default withRouter(withStyles(useStyles)(NavBar));