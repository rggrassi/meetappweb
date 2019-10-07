import React from 'react';
import { Route } from 'react-router-dom';
import AuthLayout from '../pages/layouts/auth';
import DefaultLayout from '../pages/layouts/default';

export default function RouteWrapper(props) {
  const { component: Component, ...rest } = props;
    
  const signed = false;
  const Layout = signed ? DefaultLayout : AuthLayout;

  return <Route { ...rest } render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
}