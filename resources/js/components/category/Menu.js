import React, {Component} from 'react';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Add from './Add';
import Category from './Category';

export default class Menu extends Component{

  render(){
    return(
      <div>
      <Router>
            <Link to="/category">ListData</Link>
            <Link to="/category/add">AddData</Link>

            <Route exact path="/category" component={ListData} />
            <Route exact path="/category/add" component={AddData} />

      </Router>
      </div>
    );
  }
}
