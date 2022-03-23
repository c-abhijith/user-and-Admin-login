import React from 'react'
import "./Navbar.css"

import { Link } from "react-router-dom";
import { useContext } from "react";
import {Nav,Navbar} from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import Admin from '../Views/Admin';


import { Container,Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

const Navba = () => {
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user)
  
  return (

  
  <Navbar bg="primary" variant="dark">
    <Container>
      
    
    {user ? (
      <>
            <Navbar.Brand href="#home">
            {/* {user?(user.is_superuser?(<Admin>ieh</Admin>):(<h1 className="text-center mt-5">N</h1>)} */}
            {user.is_superuser == 1 ? 'Admin': 'Navbar'}
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            
            </Nav>
            
            <Button onClick={logoutUser} >Logout</Button>
            {/* className='btn btn-success'   variant="contained" */}
            </>
    ) : (
      <>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <div>
          <Link style={{color:"white", margin:"10px"}} to="/login">Login</Link>
          <Link style={{color:"white"}}  to="/signup">Register</Link>
      </div>
      </>
      )}
    </Container>
  </Navbar>

 

  )
}

export default Navba