import React, { Component } from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap'
export class Comments extends Component {

    state={comment:null}

  requestData = async () => {
     
                                const response= await axios.get('http://localhost:3008/comments');
                                this.setState({comment:response.data})
    
                            }
   
  
  componentDidMount() {
        
                         this.requestData();
    
                      }
    
  render() {
              
                if(!this.state.comment) return "Loading.."
     
  return (
            <div>
                <h2 className="text-center ">Comments Details</h2>
                <table border="1px" className="mx-auto my-5">
                   <tr >
                     <td>postId</td>
                     <td>email</td>
                     <td>name</td>
                   </tr>
               
                   { this.state.comment.map((comment) => (
                   <tr>
                     <td>{comment.postId}</td>
                     <td>{comment.email}</td>
                     <td>{comment.name}</td>
                   </tr>
                   ))}
               </table>
             </div>
           )
        }
    }

export default Comments

