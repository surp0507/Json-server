import React, { Component } from 'react'
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


  export class Users extends Component {

  state = {
    user:null,
    show:false,
    name:null,
    email:null,
    phone:null
  }

  handleClose = () =>{

    this.setState({show:false});
  }

  handleShow = () =>{
   
    this.setState({show:true});
  }

  requestData = async () => {
    const response= await axios.get('http://localhost:3004/users');
    this.setState({user:response.data})
    this.setState({name:response.data[0].name})
    this.setState({email:response.data[0].email})
    this.setState({phone:response.data[0].phone})
    this.setState({userId:response.data[0].id})
  }
 
  componentDidMount() {
    this.requestData();
  }

  onClickUser = (userId) => {
    const {selectedUserId}=this.state
    this.setState({ selectedUserId: userId });
    console.log(selectedUserId)
  }

  saveUser = async (e) => {
    const {name,email,phone}=this.state
    let data={name,email,phone};
    console.log(data);
    const res= await axios.post(' http://localhost:3004/users',{...data});
    console.log(res.data);
  }

  selectUser = (Id) => {
    const {user}=this.state
    console.log(user[Id-1])
    const item=user[Id-1]
    this.setState({name:item.name})
    this.setState({email:item.email})
    this.setState({phone:item.phone})
    this.setState({userId:item.id})
  }

  UpdateUser = async (e) => {
    const {name,email,phone,userId}=this.state
    let item={name,email,phone}
    const response = await axios.put(`http://localhost:3004/users/${userId}`, {...item}); 
    console.log(response.data);    
    this.requestData();
  }

  render() {
    if(!this.state.user) return "Loading..."
    const {name,email,phone}=this.state
    return (    
      <div>
        <h2 className="text-center">User Details</h2>
          <Button variant="primary" onClick={this.handleShow}>
            Add User
          </Button>
          <table border="1px" className="mx-1" >
            <tr >
              <td>UserId</td>
              <td>UserName</td>
              <td>UserEmail</td>
              <td>UserPhone</td>
            </tr>
             { this.state.user.map((user) => (
             <tr>
               <td>{user.id}</td>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td> 
                 <Link to={`/todo/${user.id}`}>
                   <Button className="btn btn-sm">Todo
                   </Button>
                 </Link>
               </td>
               <td> 
                 <Link to={`/post/${user.id}`}>
                   <Button className="btn btn-sm" > Posts 
                   </Button>
                 </Link>
                </td>
               <td>
                 <Button onClick={()=>this.selectUser(user.id)} 
                   className="btn btn-sm">EditUser
                 </Button></td>
              </tr>
               ))}
            </table >
               <Modal show={this.state.show} onHide={this.handleClose}>
                   <Modal.Header closeButton>
                     <Modal.Title>Add User</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>
                     <input 
                       type="text" 
                       value={name} 
                       onChange={(e)=>this.setState({name:e.target.value})}
                       name="name" placeholder="name"
                     /> <br/> <br />
                     <input 
                       type="text" 
                       value={email}
                       onChange={(e)=>this.setState({email:e.target.value})} 
                       name="email" placeholder="email" 
                     /> <br/> <br />
                     <input 
                       type="text" 
                       value={phone}
                       onChange={(e)=>this.setState({phone:e.target.value})} 
                       name="phone"  placeholder="phone"
                     /> <br/><br />
                     </Modal.Body>
                       <Modal.Footer>
                         <Button variant="secondary" onClick={this.handleClose}>
                           Close
                         </Button>
                         <Button variant="primary" onClick={this.saveUser}>
                          Save changes
                         </Button>
                       </Modal.Footer>
                  </Modal>
                    <br/>
                   <div className="mx-5">
                     <input 
                       type="text" 
                       value={name}
                       onChange={(e)=>this.setState({name:e.target.value})} 
                       name="name" 
                     /> <br/><br />
                     <input 
                       type="text" 
                       value={email}onChange={(e)=>this.setState({email:e.target.value})} 
                       name="email" 
                     /> <br/><br />
                     <input 
                       type="text" 
                       value={phone}onChange={(e)=>this.setState({phone:e.target.value})}
                       name="phone" 
                     /> <br />
                     <Button className="btn btn-sm" onClick={this.UpdateUser}>update</Button>
                   </div>
                 </div>
                )
            }
       } 

export default Users