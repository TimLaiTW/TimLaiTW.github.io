import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import About from './views/About';
import Contact from './views/Contact';
import Index from './views/Index';
import NotFound from './views/NotFound';
import Projects from './views/Projects';
import Resume from './views/Resume';
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
