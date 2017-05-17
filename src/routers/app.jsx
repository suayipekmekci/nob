import React from 'react';
import { render } from 'react-dom';
import { createHashHistory, createHistory, useBasename } from 'history';
import { Router } from 'react-router';
import "../common/styles/app.less";
import "../common/styles/index.scss";
import NProgress from 'nProgress';
import PostModule from '../components/modules/Post';

NProgress.configure({ showSpinner: false });

const history = useBasename(createHistory)({
   queryKey: false,
   basename: '/'
})
var rootRoute = ""
if(PostModule.accessTokenParams() == ""){
  if(PostModule.getVerificationType() == "" || PostModule.getVerificationType() == "login" || PostModule.getVerificationType() == "Login"){
    rootRoute = {
      path: '/',
      component: require('../components/layouts/BaseVerification'),
      indexRoute: {component: require('../components/pages/Login')},
      childRoutes: [
        {
          path: '/Login',
          component: require('../components/pages/Login'),
          childRoutes: []
        },
        {
          path: '/login',
          component: require('../components/pages/Login'),
          childRoutes: []
        }
      ]
    }
  }else if(PostModule.getVerificationType() == "accoutVerification" || PostModule.getVerificationType() == "userVerification"){
    rootRoute = {
      path: '/',
      component: require('../components/layouts/BaseVerification'),
      childRoutes: [
        {
          path: '/accoutVerification',
          component: require('../components/pages/Verification/Account'),
          childRoutes: []
        },
        {
          path: '/userVerification',
          component: require('../components/pages/Verification/User'),
          childRoutes: []
        }
      ]
    }
  }else{
    rootRoute = {
      path: '/',
      component: require('../components/layouts/Nav'),
      indexRoute: {component: require('../components/pages/Dashboard')},
      childRoutes: [
        {
          path: '*',
          indexRoute: {component: require('../components/pages/404')},
          childRoutes: [],
          key:"not",
        }
      ]
    }
  }
}else{
  rootRoute = {
    path: '/',
    component: require('../components/layouts/Nav'),
    indexRoute: {component: require('../components/pages/Dashboard')},
    childRoutes: [
      {
        path: '/Home',
        indexRoute: {component: require('../components/pages/Home')},
        childRoutes: []
      },
      {
        path: '/Dashboard',
        indexRoute: {component: require('../components/pages/Dashboard')},
        childRoutes: []
      },
      {
        path: '/Tables',
        indexRoute: {component: require('../components/pages/Tables')},
        childRoutes: []
      },
      {
        path: '/Maps',
        indexRoute: {component: require('../components/pages/Maps')},
        childRoutes: []
      },
      {
        path: '/GoogleCharts',
        indexRoute: {component: require('../components/pages/GoogleCharts')},
        childRoutes: []
      },
      {
        path: '/ReCharts',
        indexRoute: {component: require('../components/pages/ReCharts')},
        childRoutes: []
      },
      {
        path: '/Users',
        indexRoute: {component: require('../components/pages/Settings/Users')},
        childRoutes: []
      },
      {
        path: '/Groups',
        indexRoute: {component: require('../components/pages/Settings/Groups')},
        childRoutes: []
      },
      {
        path: '/Roles',
        indexRoute: {component: require('../components/pages/Settings/Roles')},
        childRoutes: []
      },
      {
        path: '/AddUser',
        indexRoute: {component: require('../components/pages/Settings/AddUser')},
        childRoutes: []
      },{
        path: '*',
        indexRoute: {component: require('../components/pages/404')},
        childRoutes: [],
        key:"not",
      }
    ]
  }
}

render(
  <Router history={history} routes={rootRoute}/>,
  document.getElementById('app')
)
