import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './style/scss/style.scss'
import Main from './pages/Main'

const Routes = () => {
  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Main}/>
          </Switch>
        </Router>
      </div>
  )
};
export default Routes;
