import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import './App.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

// Main Pages.
import HomePage from './HomePage';
import AboutPage from './About';
import ProjectsPage from './Projects';
import PrivacyPage from  './Privacy';

// Error Pages.
import NotFound from './NotFound';

// Project Pages.
import Portfolio from './projects/Portfolio';
import LucidLab from './projects/LucidLab';
import Sudoku from './projects/Sudoku';
import Qurve from './projects/Qurve';
import CaveExploration from './projects/CaveExploration';
import RollerCoaster from './projects/RollerCoaster';
import RSCBot from './projects/RSCBot';
import URLShortener from './projects/URLShortener';
import GraphVisualiser from './projects/GraphVisualiser';
import CavernMinesweeper from './projects/CavernMinesweeper';
import BSplit from './projects/BSplit';
import TodoList from './projects/TodoList';
import DeliveryPlanner from './projects/DeliveryPlanner';
import SortingVisualiser from './projects/SortingVisualiser';


//Global Themes.
const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    h1: { fontFamily: "Merriweather" },
    h2: { fontFamily: "Merriweather" },
    h3: { fontFamily: "Merriweather" },
    h4: { fontFamily: "Merriweather" },
    h5: { fontFamily: "Merriweather" },
    h6: { fontFamily: "Merriweather" },
    p: {  fontFamily: "Lato" },
  },
  palette: {
    textPrimary: "rgba(0, 0, 0, 0.87)",
    textSecondary: "#4CAF50",
    link: "#03B0EE",
    linkHover: "#4CAF50",
    deadLink: "rgba(0, 0, 0, 0.40)",
    navText: "#FFFFFF",
    navBackground: "#424242",
    copyrightBackground: "#353535",
    copyrightText: "rgba(255,255,255,0.8)",
    footerLink: "#EEEEEE",
    footerLinkHover: "#A8A8A8",
    footerText: "#FFFFFF"
  },
  font: {
    primary: "Lato",
    secondary: "Merriweather"
  },
  decoration: {
    imageShadow: "rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px",
    linkButtonBackground: "linear-gradient(149deg, rgba(238,78,45,1) 0%, rgba(231,133,8,1) 60%, rgba(233,118,14,1) 100%)",
    linkButtonColour: "white",
    linkButtonShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  },
  linkButton: {
    marginTop: "1em",
    background: "linear-gradient(149deg, rgba(238,78,45,1) 0%, rgba(231,133,8,1) 60%, rgba(233,118,14,1) 100%)", 
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    textTransform: "none",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontWeight: 375,
  },
}));


class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ScrollTop>
          <div className="App">
            <NavBar title="Kyle Gough" />
            <main>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/privacy" component={PrivacyPage} />
                <Route path="/projects/portfolio" component={Portfolio} />
                <Route path="/projects/lucidlab" component={LucidLab} />
                <Route path="/projects/sudoku" component={Sudoku} />
                <Route path="/projects/qurve" component={Qurve} />
                <Route path="/projects/cave-exploration" component={CaveExploration} />
                <Route path="/projects/roller-coaster" component={RollerCoaster} />
                <Route path="/projects/rscbot" component={RSCBot} />
                <Route path="/projects/url-shortener" component={URLShortener} />
                <Route path="/projects/graph-algorithm-visualiser" component={GraphVisualiser} />
                <Route path="/projects/cavern-minesweeper" component={CavernMinesweeper} />
                <Route path="/projects/bsplit" component={BSplit} />
                <Route path="/projects/todo-list" component={TodoList} />
                <Route path="/projects/delivery-route-planner" component={DeliveryPlanner} />
                <Route path="/projects/sorting-algorithm-visualiser" component={SortingVisualiser} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/404" component={NotFound} />
                <Route path="*" component={NotFound} />
              </Switch>
            </main>
            <Footer />
          </div>
          </ScrollTop>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
