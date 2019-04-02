/*
 * @Author: David M. Rojas Gonzalez // davidr.info 
 * @Date: 2019-03-04 19:02:41 
 * @Last Modified by: David M. Rojas Gonzalez // davidr.info
 * @Last Modified time: 2019-03-28 15:11:08
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
import HomePage from './components/pages/Home/HomePage';
import BlogPage from './components/pages/Blog/BlogPage/BlogPage';
import BlogRangePage from './components/pages/Blog/BlogRangePage/BlogRangePage';
import BlogPostPage from './components/pages/Blog/BlogPostPage/BlogPostPage';


class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <div className="App-content bg-glass">
              <Header />
              <div id="PageWrapper">
                <Switch>
                  <Route path="/" component={HomePage} exact/>
                  <Route path="/blog" component={BlogPage} exact/>
                  <Route path="/blog/:year/:month" component={BlogRangePage} exact/>
                  <Route path="/blog/:year/:month/:id" component={BlogPostPage} exact/>
                  <Route component={()=>{return( <h1>Error 404</h1> );}} />
                </Switch>
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
