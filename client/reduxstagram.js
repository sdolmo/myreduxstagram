import React from 'react';

// This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as react to npm.
// This SO post explains the difference between React and ReactDOM: http://stackoverflow.com/questions/34114350/react-vs-reactdom
import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'));
