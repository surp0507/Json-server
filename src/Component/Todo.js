import React, { Component } from 'react'
import axios from 'axios';

  export default class Todo extends Component {
  
  state = {
    todo:null,
  }
    
  requestData = async ()=> {
    const {user_id}=this.props.match.params
    console.log(user_id);
    const response= await axios.get(`http://localhost:3004/users/${user_id}/todos`);
    this.setState({todo:response.data});
  }
                        
  componentDidMount() {
  this.requestData();
  }
  
  render() {
    if(!this.state.todo) return "Loading..."
    return (
      <div>
        <h2 className="text-center">Todo Details</h2>
          <table border="1" className="mx-auto">
            <tr>
              <td>UserId</td>
              <td>TodoId</td>
              <td>TodoTitle</td>
            </tr>
            {this.state.todo.map((todos)=>(
              <tr>
                <td>{todos.userId}</td>
                <td>{todos.id}</td>
                <td>{todos.title}</td>
              </tr>
              ))}
          </table>
        </div>
      )
   }
 }


