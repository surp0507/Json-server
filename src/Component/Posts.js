import React, { Component } from 'react'
import axios from 'axios';

export class Posts extends Component {

    state={post:null}

    requestData=async ()=>{
    const response= await axios.get('  http://localhost:3004/posts ');
    this.setState({post:response.data})
    
    }
    componentDidMount(){
    
                        this.requestData();
    
                       }

    render() {
              if(!this.state.post) return "Loading.."
     return (
              <div>
                  <h2 className="text-center">Posts Details</h2>
                  <ul>
                  {this.state.post.map((posts)=>(
                   <>
                     <li>userId:- {posts.userId}</li>
                     <li>Id:- {posts.id}</li>
                     <li>Title:-{posts.title}</li>
                     <li>Body:-{posts.body}</li>
                   </>
                    )
                  )
                }
                 </ul>
            </div>
        )
    }
}

export default Posts
