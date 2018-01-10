import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Content from './Shared/Content/Content';

import Home from '../routes/Home';
import Test from '../routes/Test';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Content>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/test" component={Test} />
      </Switch>
    </Content>
    <Footer />
  </div>
);

export default App;
