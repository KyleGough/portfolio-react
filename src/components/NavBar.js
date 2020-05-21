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
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = ({
    title: {
        color: "#FFFFFF",
        outline: "0px",
        fontFamily: "Lato",
        fontWeight: 300,
        flexGrow: 1
    },
    nav: {
        backgroundColor: "#424242",
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
    drawerLink: {
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
        /*"&:focus": {
            backgroundColor: "#5BB183",
            outline: "0px",
        },*/
        color: "#FFFFFF",
        outline: "0px",
        "&:focus": { color: "#A8A8A8" },
        "&:hover": { color: "#A8A8A8" },
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

                <a className={classes.drawerLink} href="http://github.com/KyleGough" target="_blank" rel="noopener noreferrer">
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
                    <a className={classes.link} variant="inherit" href="http://github.com/KyleGough" target="_blank" rel="noopener noreferrer">
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