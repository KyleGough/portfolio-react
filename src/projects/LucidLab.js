import React from 'react';
import '../App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import ProjectIntro from '../components/ProjectIntro';
import ProjectImage from '../components/ProjectImage';
import ImageList from '../components/ImageList';
import Pagination from '../components/Pagination';
import Divider from '@material-ui/core/Divider';
import useStyles from '../Styles';
import ProjectList from './ProjectList';


const projectInfo = ProjectList["lucidlab"];

const imageData = [
  {
    url: "/img/lucidlab1.jpg",
    title: "Upload test page"
  },
  {
    url: "/img/lucidlab2.jpg",
    title: "Metrics page"
  },
  {
    url: "/img/lucidlab3.jpg",
    title: "Upload IoT controller"
  },
  {
    url: "/img/lucidlab4.jpg",
    title: "Upload image page"
  }
];


class LucidLab extends React.Component {

  render() {
    const { classes } = this.props;

    return (
        <Container className={classes.root} maxWidth="lg">
          
          <ProjectIntro data={projectInfo} />

          <Divider /> 

          <ProjectImage img={imageData[0]} />
          
          <Divider /> 

          <div className={classes.section}>
            <Typography className={classes.subtitle} variant="h5" component="h2">Abstract</Typography>
            <p>
              With the advent of smarter, low-power wireless sensor hardware (or “motes”) along with the
              influx of Internet of Things (IoT) devices, researchers are leveraging these technologies to
              form the networks underpinning “smart” homes and cities. Of vital importance in this process
              are wireless sensor network (WSN) testbeds, which allow researchers to debug the firmware
              that runs on motes. A particularly challenging exercise is presented when combining
              heterogeneous wireless sensor hardware and proprietary IoT devices on a single network,
              enabling development of applications that interact with both motes and IoT devices. Whilst
              existing WSN testbeds permit the use of a variety of sensor hardware, they do not allow
              interaction with off-the-shelf IoT devices, which already have a strong presence in many
              households. This report presents LucidLab, a WSN testbed designed to directly integrate IoT
              devices, facilitating the debugging of richer applications. In addition to the standard
              features of a WSN testbed, such as logging of output through a serial connection, LucidLab
              provides an adaptable architecture through simple and scalable addition of hardware. IoT
              integration is enabled using openHAB as an IoT substrate. Userscan control IoT devices on the
              network through scripts uploaded alongside firmware that interpret mote output to manage IoT
              devices accordingly. By virtue of LucidLab’s prompt logging process, mote output is quickly
              passed to the user-specified script,  allowing responsive actuation of IoT devices. The
              proposed implementation provides a practical system combining IoT and WSN devices whilst
              offering a simple and intuitive deployment process, thereby enabling rapid testing of the
              applications forming the backbone of “smart”homes and cities
            </p>
          </div>

          <Divider />

          <ImageList data={imageData} />

          <Divider />

          <Pagination
            previousTitle="Logical Sudoku Solver"
            previousLink="/projects/sudoku"
            nextTitle="Portfolio"
            nextLink="/projects/portfolio"
          />

      </Container>
    );
  }
}

// Higher-Order component.
LucidLab.propTypes = {
    classes: PropTypes.object.isRequired
};  

export default withStyles(useStyles)(LucidLab);