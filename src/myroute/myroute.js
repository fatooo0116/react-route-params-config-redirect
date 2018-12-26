import Home from '../components/home';
import About from '../components/about';
import Topic from '../components/topic';

import Start from '../components/start';

import Timer from '../components/timer';
import Timeup from '../components/timeup';

const routes = [
  {
    path:'/',
    exact: true,
    component: Home
  },
  {
    path:'/about',
    exact: true,
    component: About
  },
  {
    path:'/topic',
    exact: true,
    component: Topic
  },
  {
    path:'/start',
    exact: true,
    component: Start
  },
  {
    path:'/timer',
    exact: true,
    component: Timer
  },
  {
    path:'/timeup',
    exact: true,
    component: Timeup
  }
];


export default routes ;
