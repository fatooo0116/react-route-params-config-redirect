import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter,Route } from 'react-router-dom'

import { renderRoutes } from 'react-router-config';

// import App from './App';

// import Index from './components/index';
// import User from './components/user';

import routes from './myroute/myroute.js';




import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));




ReactDOM.render((


  <BrowserRouter>
    <div>
      { renderRoutes(routes) }
    </div>
  </BrowserRouter>
), document.getElementById('root'));





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
