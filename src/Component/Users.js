import React, { Component } from 'react'
import axios from 'axios'
import AddUser from './AddUser';
import {Button} from 'react-bootstrap'


    export class Users extends Component {

     state={
       
           user:null,
           selectedUserId:null
              
          
      }

      requestData=async () => {
      const response= await axios.get('http://localhost:3004/users');
      this.setState({user:response.data})

      }
 
      componentDidMount(){
  
        this.requestData();

     }

     Onredirect=()=>{

      window.location="/post";

    


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
               <ul>
               { this.state.user.map((user) => (
              <li key={user.id} onClick={() => this.onClickUser(user.id)}>Name:-{user.name}</li>
                )
               )
              }
              </ul>
            
            <Button className="btn btn-sm" onClick={this.Onredirect}>show posts</Button>


              <AddUser requestData={this.requestData} selectedUserId={this.state.selectedUserId}/>
            </div>
          )
       }
    } 

export default Users
