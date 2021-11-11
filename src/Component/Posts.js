import React, { Component } from 'react'
import axios from 'axios';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

  export class Posts extends Component {
    state = {
      post:null,
      postId:null
    }

    requestData = async ()=>{
      const {post_id}=this.props.match.params;
      const response= await axios.get(`http://localhost:3004/users/${post_id}/posts`);
      this.setState({post:response.data})
    }
  
    componentDidMount() {
      this.requestData();
    }

    render() {
      if(!this.state.post) return "Loading.."
      return (
        <div>
          <h2 className="text-center">Posts Details</h2>
            <table border="1" className="mx-auto">
              <tr>
                <td>UserId</td>
                <td>PostId</td>
                <td>PostTitle</td>
              </tr>
              {this.state.post.map((posts)=>(
              <tr>
                <td>{posts.userId}</td>
                <td> {posts.id}</td>
                <td>{posts.title}</td>
                <td><Link to={`/comment/${posts.id}`}><Button>comments</Button></Link></td>
              </tr>
             ))}
          </table>
       </div>
     )
   }
 }

export default Posts
