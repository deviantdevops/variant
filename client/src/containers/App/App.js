import React, {Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {BrowserRouter as Router, Route, Link, useLocation, withRouter} from "react-router-dom";
import { createBrowserHistory } from 'history';
import {isBrowser,isMobile} from "react-device-detect";
import Cookie from 'js-cookie';
import {v1 as uuid} from 'uuid';
import './App.css';
import randomString from 'randomstring';
import Config from '../../config';
import axios from 'axios';


import Login from '../Login/Login';
import Register from '../Register/Register';
import Chat from '../Chat/Chat'

const COOKIE_PARAMS = {"expires":3,"domain":window.location.hostname,"secure":true,"path":"/","httponly": false};
const history = createBrowserHistory();

const App = (props) => {

  const dispatch = useDispatch();
  const [updated, setUpdated] = useState(false);

  useEffect(() => {

    console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
    console.log(`REACT_APP_ENV: ${process.env.REACT_APP_ENV}`)

    if(Cookie.get('preferences') === undefined){
        let prefs = {}
        Cookie.set('preferences', prefs)
    }
    if(!updated){
      
      setSession();
      genKey();
      setUpdated(true);
    }
    
  }, [])

  

  const setSession = () => {
    let session_id = Cookie.get('session');
    if (session_id === undefined) {
        session_id = uuid();
        Cookie.set('session', session_id, COOKIE_PARAMS)
    }
    return session_id;
  }

  const genKey = () => {
    let KEY = window.localStorage.getItem('APP_KEY')
    if(KEY === undefined || KEY === null){
        KEY = randomString.generate({
            length: 64,
            charset: 'alphabetic'
        });
        window.localStorage.setItem('APP_KEY', KEY)
    }
    return KEY;
  }

  /** 
  const authMiddleware = (role, scope, referer = '/', loginUrl, component) => {
    if(AUTH.isAuthorized(role, scope, referer, loginUrl) === true){
        return (
            <Fragment>{component}</Fragment>
        )
    }
  }
  **/

  function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
  }
  const ScrollToTop = withRouter(_ScrollToTop)
    
  const UI = () => {
      return (
          <Router history={history} basename={process.env.PUBLIC_URL} >
              <ScrollToTop>
                <Route exact path="/" component={Login}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
{/**
                <Route exact path="/auth/callback" render={() => AUTH.callback()}/>
*/}
                <Route exact path="/chat" component={Chat}/>
       

              </ScrollToTop>
          </Router>
      )
  }

  return (
    <Fragment>{UI()}</Fragment>
  )

}


export default withRouter(App);