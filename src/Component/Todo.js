import React, { Component } from 'react'
import axios from 'axios';

  export class Todo extends Component {

      state={todo:null}

  requestData = async ()=> {
                                const response= await axios.get(`/todos`);
                                this.setState({todo:response.data})
                           }

  componentDidMount() {
                        
                        this.requestData();
                     
                      }
  render() {
                if(!this.state.todo) return "Loading..."
                console.log(this.state.todo)
  
  return (
            <div>
                 <h2 className="text-center">Todo Details</h2>
                 <ul>
                     {this.state.todo.map((todo)=>(
                     <>
                       <li>{todo.userId}</li>
                       <li>{todo.id}</li>
                       <li>{todo.title}</li>
                     </>
                       ) )}
                 </ul>
            </div>
        )
    }


}

export default Todo
