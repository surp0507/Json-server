import React, { Component } from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'


    export class Users extends Component {

    state = {
       
                user:null,
                selectedUserId:null
          }

    requestData = async () => {
                                
                                  const response= await axios.get('http://localhost:3008/users');
                                  this.setState({user:response.data})
                             }
 
    componentDidMount() {
  
                            this.requestData();
                       }

    

    onClickUser = (userId) => {
                                  const {selectedUserId}=this.state
                                  this.setState({ selectedUserId: userId });
                                  console.log(selectedUserId)
                             }


    render() {
   
               if(!this.state.user) return "Loading..."
    
    return (
    
              <div>
                   <h2 className="text-center">User Details</h2>
                   <table border="1px" className="mx-auto my-5">
                        <tr >
                            <td>UserId</td>
                            <td>UserName</td>
                            <td>UserEmail</td>
                        </tr>
                        { this.state.user.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><Button className="btn btn-sm">Todo</Button></td>
                            <td><Button className="btn btn-sm" > Posts </Button></td>
                            <td><Button className="btn btn-sm">EditUser</Button></td>
                        </tr>
                        ))}
                   </table>
              </div>
          )
       }
    } 

export default Users
