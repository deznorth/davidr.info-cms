/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-04-07 22:23:47
*/

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import PRoute from './middleware/ProtectedRoute';

//Components
import Footer from './components/containers/Footer/Footer';

//Pages
import LoginPage from './components/pages/Login/LoginPage';
import SideMenu from './components/elements/SideMenu/SideMenu';
import DashboardPage from './components/pages/Dashboard/DashboardPage';
import ErrorPage from './components/pages/Error/ErrorPage';
import SitemetaPage from './components/pages/Sitemeta/SitemetaPage';


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="AppWrapper">
              <SideMenu />
              <div className="App-content bg-glass">
                <div id="PageWrapper">
                  <Switch>
                    <Route path="/" component={() => {
                      return <LoginPage showSideMenu={this.handleShowSideMenu} />;
                    }} exact/>
                    <PRoute path="/dashboard" component={DashboardPage} exact/>
                    <PRoute path="/sitemeta" component={SitemetaPage} exact/>
                    <Route component={ErrorPage} />
                  </Switch>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
