import React, { createContext, useState} from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import HomePage from "../../pages/home/HomePage";
import AdminPage from "../../pages/admin/AdminPage";
import Header from "./../common/header/Header";
import Footer from '../common/footer/Footer';
import InvalidPage from '../../pages/invalid/InvalidPage';
import UsersPage from '../../pages/users/UsersPage';

export interface IAdministratorContext {
  adminEmails: string[];
  addAdmin: Function;
  removeAdmin: Function;
}

export const AdministratorContext = createContext<IAdministratorContext>({adminEmails:[], addAdmin:()=>{}, removeAdmin:()=>{} });

const App = () => {

    const [administrators, setAdministrators] = useState<string[]>([]);

    const addAdministrator = (email: string)=>{
      setAdministrators([...administrators, email]);
    }

    const removeAdministrator = (email: string) => {
      setAdministrators(administrators.filter(adminEmail => adminEmail !== email ));
    }

    return <AdministratorContext.Provider value={{adminEmails: [...administrators], addAdmin:addAdministrator, removeAdmin: removeAdministrator }}>
      <Header />
      <main>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/users" component={UsersPage} />
            <Route component={InvalidPage} />
        </Switch>
      </main>
      <Footer />
    </AdministratorContext.Provider>
}

export default App;
