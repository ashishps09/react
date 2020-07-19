import React from 'react';
import './App.css';
import axios from "axios";
import 'react-dropdown/style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import createOrder from './components/createOrder/createOrder';
import orderStatus from './components/orderStatus/orderStatus';
import getOrder from './components/getOrder/getOrder';


class App extends React.Component {
  
  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to Your Own Kitchen</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/createOrder'} className="nav-link"> createOrder </Link></li>
            <li><Link to={'/orderStatus'} className="nav-link">orderStatus</Link></li>
            <li><Link to={'/getOrder'} className="nav-link">getOrder</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/createOrder' component={createOrder} />
              <Route path='/orderStatus' component={orderStatus} />
              <Route path='/getOrder' component={getOrder} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;