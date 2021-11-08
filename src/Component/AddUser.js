import axios from 'axios';
import React from 'react'
import { useState,useEffect } from 'react';
import {Button} from 'react-bootstrap'
export default function AddUser(props) {

    const [user, setUser] = useState(null);
    useEffect(() => {

        const requestData = async ()=>{

            const response=await axios.get('http://localhost:3004/users');
            setUser(response.data);


        };
        if(!props.selectedUserId) return    requestData(props.selectedUserId);

        
    },  [props.selectedUserId])

    const handleChangeName = (event) => {
        const { name, value } = event.target;
        const nextUser = { ...user, [name]: value };
        setUser(nextUser.data);
        
      };

      const requestUpdateUser = async (user) => {
        const response = await axios.put(`/users`, { ...user });
        setUser(response.data);
        props.requestData();
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        requestUpdateUser(user);
      }

      if (!props.selectedUserId) return "No Data Display";
      if (props.selectedUserId && !user) return "Loading";

    return (
        <div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={user.name} onChange={handleChangeName} />
        <Button type="submit">Submit</Button>
      </form>
        </div>
    )
}
