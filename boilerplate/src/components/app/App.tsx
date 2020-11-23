import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AboutPage from "../../pages/about/AboutPage";
import Header from "./../common/header/Header";
import Footer from '../common/footer/Footer';
import InvalidPage from '../../pages/invalid/InvalidPage';
import UsersPage from '../../pages/users/UsersPage';
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
