import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "./../home/HomePage";
import AboutPage from "./../about/AboutPage";
import Header from "./../common/header/Header";
import Footer from '../common/footer/Footer';
import InvalidPage from '../invalid/InvalidPage';
import UsersPage from '../users/UsersPage';
const App = () => (    
    <>
      <Header />
      <main>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/users" component={UsersPage} />
            <Route component={InvalidPage} />
        </Switch>
      </main>
      <Footer />
    </>
  )

export default App;
