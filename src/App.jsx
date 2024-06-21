import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/* eslint-disable */
import ErrorPage from '@/pages/error/ErrorPage';
/* eslint-enable */

import './styles/theme.scss';
import Layout from './components/Layout';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';
import { logoutUser } from '@/actions/user';

function PrivateRoute({ component, ...rest }) {
  const dispatch = useDispatch();

  if (!Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
    dispatch(logoutUser());
    return <Redirect to="/login" />;
  }
  return (
    // eslint-disable-line
    <Route {...rest} render={(props) => React.createElement(component, props)} />
  );
}

function CloseButton({ closeToast }) {
  return <i onClick={closeToast} className="la la-close notifications-close" />;
}

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <ToastContainer autoClose={5000} hideProgressBar closeButton={<CloseButton />} />
      <HashRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/app/main" />} />
          <Route path="/app" exact render={() => <Redirect to="/app/main" />} />
          <PrivateRoute path="/app" dispatch={dispatch} component={Layout} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/error" exact component={ErrorPage} />
          <Route component={ErrorPage} />
          <Redirect from="*" to="/app/main/dashboard" />
        </Switch>
      </HashRouter>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
