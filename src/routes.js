import React from 'react';
import Layout from './hoc/Layout';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/AuthRoutes/PrivateRoutes';
import PublicRoute from './components/AuthRoutes/PublicRoutes';
// Public routes
import Home from './components/Home';
import Login from './components/Login';
import TheTeam from './components/TheTeam';
import TheMatches from './components/TheMatches';
import NotFound from './components/NotFound';
// Private routes
import Dashboard from './components/Admin/Dashboard';
import AdminMatches from './components/Admin/Matches';
import AddEditMatch from './components/Admin/Matches/AddEditMatch';
import AdminPlayers from './components/Admin/Players';
import AddEditPlayer from './components/Admin/Players/AddEditPlayer';

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          path="/admin_players/edit_player/:id"
          exact
          component={AddEditPlayer}
        />
        <PrivateRoute
          {...props}
          path="/admin_players/edit_player"
          exact
          component={AddEditPlayer}
        />
        <PrivateRoute
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        <PrivateRoute
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PublicRoute
          {...props}
          restricted={true}
          path="/login"
          exact
          component={Login}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/the_team"
          exact
          component={TheTeam}
        />
        <PublicRoute
          {...props}
          restricted={false}
          path="/the_matches"
          exact
          component={TheMatches}
        />
        <PublicRoute {...props} restricted={false} component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
