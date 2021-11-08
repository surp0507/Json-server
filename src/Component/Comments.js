import React, { Component } from 'react'
import axios from 'axios';

export class Comments extends Component {

    state={comment:null}

    requestData=async ()=>{
    const response= await axios.get('http://localhost:3004/comments');
    this.setState({comment:response.data})
    
    
    
    }
    componentDidMount(){
    this.requestData();
    
    }
    render() {
        if(!this.state.comment) return "Loading.."
        return (
            <div>
                <h2 className="text-center ">Comments Details</h2>
                <ul>
                    {this.state.comment.map((comment)=>(
                        <>
                        <li>PostId:- {comment.postId}</li>
                        <li>Name:- {comment.name}</li>
                        <li>Id:-{comment.id}</li>
                        <li>Email:-{comment.email}</li>
                        <li>Body:-{comment.body}</li> 
                             </>
                        
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default Comments

