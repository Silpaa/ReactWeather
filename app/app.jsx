import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router,IndexRoute,hashHistory} from 'react-router';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';

//Load foundation-sites
import foundationsites from 'style!css!foundation-sites/dist/foundation.min.css';

ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <route path="examples" component={Examples}/>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app'));
