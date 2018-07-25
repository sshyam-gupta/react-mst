import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Products, PageNotFound } from '..';

const appRoutes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/products',
    component: Products
  },
  {
    path: '*',
    component: PageNotFound
  }
];

const routes = appRoutes.map(route => <Route key={route.path} {...route} />);

export default routes;
