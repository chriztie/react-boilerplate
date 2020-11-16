import { User } from "../models/user";

const path = `${process.env.REACT_APP_API_URL}/users`;

const getUser = async (id: number) : Promise<User> => {
    const response = await fetch(`${path}/${id}`);
    return response.json();
}

const getUsers = async () : Promise<User[]> => {    
    const response = await fetch(path);
    return response.json();
}

const postUser = async (newUser: User) : Promise<void> => {    
    const response = await fetch(path, { headers: {'Content-Type':'application/json'}, method: 'POST', body: JSON.stringify(newUser)});        
    return response.json();
}

const deleteUser = async (id: number) : Promise<void> => {    
    const response = await fetch(`${path}/${id}`, { method: 'DELETE' });        
    return response.json();
}

const updateUser = async(user: User) : Promise<void> =>{
    const response = await fetch(path, { headers: {'Content-Type':'application/json'}, method: 'PATCH', body: JSON.stringify(user)});        
    return response.json();
}

export { getUser, getUsers, postUser, deleteUser, updateUser };