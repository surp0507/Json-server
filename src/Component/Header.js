import React, { Component } from 'react'
import { Nav,Container,Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types'




export default class Header extends Component {
    render() {
              return (
                       <div>
                        <Navbar bg="primary" variant="dark">
                          <Container>
                            <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            </Nav>
                          </Container>
                        </Navbar>  <br /> 
                       </div>
                  )
                }
              }



Header.propTypes={
                   title:PropTypes.string
                 }

Header.defaultProps={
                      title:"your app"
                    }
