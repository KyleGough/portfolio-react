import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Skeleton from '@material-ui/lab/Skeleton';
import {Link} from 'react-router-dom';


const useStyles = theme => ({
    root: {
        marginBottom: "2em",
        marginTop: "2em",
    },
    desc: {
        fontSize: "1rem",
    },
    date: {
        color: theme.palette.textSecondary
    },
    columnBlock: {
        display: "block",
    },
    image: {
        width: "100%",
        //position: "absolute",
        //top: "50%",
        //transform: "translateY(-50%)",
        height: "auto",
        boxShadow: theme.decoration.imageShadow,
        verticalAlign: "middle"
    },
    imageHelper: {
        //position: "relative",
        height: "100%"
    },
    viewButton: theme.linkButton,
    viewButtonLink: {
        [theme.breakpoints.down("sm")]: {
            display: "inline-block"    
        }
    },
    viewButtonWrapper: {
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    github: {
        marginTop: "0.85em",
        marginLeft: "1em",
        marginRight: "1em",
    },
    githubLink: {
        float: "right"
    },
    skeleton: {
        height: "19em",
        [theme.breakpoints.down("sm")]: {
            height: "10px"
        }
    },
    skeletonNoImage: {
        height: "19em",
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    }
});


class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        };
    }

    imageLoad() {
        this.setState({ loaded: true });
    }
  
    render() {
        const { classes, data } = this.props;
        
        return (
            <Grid className={classes.root} container spacing={3}>
                <Grid className={classes.columnBlock} container item xs={12} md={7}>
                    { data.github ? 
                      <a className={classes.githubLink} href={data.github} target="_blank" rel="noopener noreferrer">
                        <IconButton color="secondary" aria-label="github">
                          <GitHubIcon />
                        </IconButton>
                      </a>
                      : null
                    }
                    <Typography className={classes.title} variant="h5" component="h2">{data.title}</Typography>
                    { data.subtitle ? <Typography className={classes.subtitle} variant="h6" component="h3">{data.subtitle}</Typography> : null }
                    <p className={classes.date}>{data.date}</p>
                    <p className={classes.desc}>{data.desc}</p>
                    { data.link ? 
                        <div className={classes.viewButtonWrapper}>
                          <Link className={classes.viewButtonLink} to={data.link}>
                            <Button className={classes.viewButton}>View Project</Button>
                          </Link>
                        </div>
                        : null
                    }
                </Grid>
                <Grid className={classes.columnBlock} alignContents="center" alignItems="center" container item xs={12} md={5}>
                    {
                      data.image ?
                        this.state.loaded ?
                            <div className={classes.imageHelper}>
                              <img className={classes.image} src={data.image} alt={data.alt} onLoad={this.imageLoad.bind(this)} />
                            </div>
                            : 
                            <React.Fragment>
                              <Skeleton className={classes.skeleton} variant="rect" animation="wave" />
                              <img style={{ display: "none" }} className={classes.image} src={data.image} alt={data.alt} onLoad={this.imageLoad.bind(this)} />
                            </React.Fragment>
                        :
                        <Skeleton className={classes.skeletonNoImage} variant="rect" animation={false} />
                    }
                </Grid>
            </Grid>  
        );
    }
}

Project.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(Project);