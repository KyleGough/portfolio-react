import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Typography from '@material-ui/core/Typography';

const useStyles = ({
    section: {
        paddingBottom: "2em",
        paddingTop: "2em",
        fontSize: "15px",
        fontFamily: "Lato",
    },
    subtitle: {
        marginTop: "1em",
        marginBottom: "1em",        
    },
    list: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        fontFamily: "Lato",
        fontWeight: 300,
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)',
    },
});


class ImageList extends React.Component {
    
    render() {
        const { classes, data } = this.props;
        
        return (
            <div className={classes.section}>
              <Typography className={classes.subtitle} variant="h5" component="h2">Screenshots</Typography>
              <div className={classes.list}>
                <GridList className={classes.gridList} cols={2.5}>
                  {data.map((tile) => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        classes={{ root: classes.titleBar, title: classes.title }}
                      />
                    </GridListTile>
                    ))}
                </GridList>
              </div>
            </div>
        );
    }
}

ImageList.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default withStyles(useStyles)(ImageList);