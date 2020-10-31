import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import './App.css';


const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
};


export default App;