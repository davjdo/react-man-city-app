import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Home from './components/Home';
import Login from './components/Login';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Login} path="/login" />
        <Route exact component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
