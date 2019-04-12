import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route  exact component={Home} path="/"/>
        <Route  exact component={Portfolio} path="/portfolio"/>
        <Route  component={PortfolioItem} path="/portfolio/:id"/>
        <Route  component={Contact} path="/contact"/>
        <Route  component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;