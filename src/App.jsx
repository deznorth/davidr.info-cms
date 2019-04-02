/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-04-02 00:02:23
*/

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';

//Components
import Header from './components/containers/Header/Header';
import Footer from './components/containers/Footer/Footer';
//Pages
import LoginPage from './components/pages/Login/LoginPage';
import SideMenu from './components/elements/SideMenu/SideMenu';


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="AppWrapper">
              <SideMenu />
              <div className="App-content bg-glass">
                <Header />
                <div id="PageWrapper">
                  <Switch>
                    <Route path="/" component={LoginPage} exact/>
                    <Route component={()=>{return( <h1>Error 404</h1> );}} />
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
