import React, { ReactElement, useState, useEffect, useContext } from 'react';
import { IAdministratorContext, AdministratorContext } from "../../components/app/App";
import { getUsers, postUser } from "../../api/usersApi";
import { User } from "../../models/user";
import "./UsersPage.css"

const UsersPage = () : ReactElement => {
    const adminContext = useContext<IAdministratorContext>(AdministratorContext);
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState<User>(
        {
            firstName:'', 
            lastName:'', 
            title:'', 
            email:'', 
            id: 0,            
            avatar:'https://via.placeholder.com/100'
        });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
        await postUser(newUser);
        const newUsers = await getUsers();
        setUsers(newUsers);
    }

    const handleTextChange = ({currentTarget}: React.FormEvent<HTMLInputElement>) => {        
        setNewUser({...newUser, [currentTarget.name]: currentTarget.value});        
    }

    useEffect(()=>
    {
        const fetchUsers = async () => {
            const allUsers = await getUsers();
            setUsers(allUsers);
        }
        fetchUsers();        
    }, 
    []);

    return (
        <>
        <h1>Add User</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name: </label>
            <input id="firstName" onChange={handleTextChange} value={newUser?.firstName} type="text" name="firstName"/>
            <label htmlFor="lastName">Last Name: </label>
            <input id="lastName" onChange={handleTextChange} value={newUser?.lastName} type="text" name="lastName"/>
            <label htmlFor="email">Email: </label>
            <input id="email" onChange={handleTextChange} value={newUser?.email} type="email" name="email"/>
            <label htmlFor="title">Title: </label>
            <input id="title" onChange={handleTextChange} value={newUser?.title} type="text" name="title"/>
            <input type="submit" value="Add"></input>
        </form>
        <h1>Users</h1>
        <div className="user-container">
        {users.map(user =>
        <div key={user.id} className="user-card">
            <img className="avatar" alt="Avatar" src={user.avatar}></img>
            <div className="user-details">
                <span>{user.lastName}, {user.firstName}</span> 
                <span>{user.title}</span>                                 
                <span><a href={"mailto:" + user.email}>{user.email}</a></span> 
            </div>   
            {adminContext.adminEmails.includes(user.email) ? 
                <button onClick={() => adminContext.removeAdmin(user.email)}>Remove Admin</button> :
                <button onClick={() => adminContext.addAdmin(user.email)}>Make Admin</button>         
            }
        </div>        
        )}
        </div>
        </>
    )
}

export default UsersPage;