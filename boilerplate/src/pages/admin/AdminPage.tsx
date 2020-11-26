import React, {useContext, useEffect, useState} from "react";
import { getUsers } from "../../api/usersApi";
import { User } from "../../models/user";
import { AdministratorContext, IAdministratorContext } from "../../components/app/App";
import "./AdminPage.css";

const AdminPage = () =>{
    const adminContext = useContext<IAdministratorContext>(AdministratorContext);
    const [users, setUsers] = useState<User[]>([]);
    useEffect(()=>{
        const fetchUsers = async () => {
            const allUsers = await getUsers();
            setUsers(allUsers);
        }
        fetchUsers();  
    }, [])

    return <div>
    <h1>Admins</h1>
        <div className="user-container">
            {users.filter(user=> adminContext.adminEmails.includes(user.email)).map(user =>
            <div key={user.id} className="user-card">
                <img className="avatar" alt="Avatar" src={user.avatar}></img>
                <div className="user-details">
                    <span>{user.lastName}, {user.firstName}</span> 
                    <span>{user.title}</span>                                 
                    <span><a href={"mailto:" + user.email}>{user.email}</a></span> 
                </div>                 
                <button onClick={() => adminContext.removeAdmin(user.email)}>Remove</button>           
                
            </div>        
            )}
        </div>
    </div>;
}

export default AdminPage;