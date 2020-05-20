import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';
import './index.css';
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
import CaveExploration from './projects/CaveExploration';
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
  }
}));


class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter >
        <React.Fragment>
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
              <Route path="/projects/cave-exploration" component={CaveExploration} />
              <Route path="/projects/url-shortener" component={URLShortener} />
              <Route path="/projects/graph-algorithm-visualiser" component={GraphVisualiser} />
              <Route path="/projects/cavern-minesweeper" component={CavernMinesweeper} />
              <Route path="/projects/bsplit" component={BSplit} />
              <Route path="/projects/todo-list" component={TodoList} />
              <Route path="/projects/delivery-route-planner" component={DeliveryPlanner} />
              <Route path="/projects/sorting-algorithm-visualiser" component={SortingVisualiser} />
              <Route path="/projects" component={ProjectsPage} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
        </ScrollTop>
        </ThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
