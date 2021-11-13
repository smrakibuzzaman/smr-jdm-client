import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Navigation = () => {
  const {user, logOut} = useAuth();
    return (
        <div>
              <Navbar   sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
            
            <Container>
            
            <Navbar.Brand href="#home" style={{ color: 'goldenRod',fontWeight: 'bold',fontSize: '30px' }}>SMR JDM Vehicles</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/aboutUs">About Us</Nav.Link>
              <Nav.Link as={NavLink} to="/exploreVehicles">Explore Vehicles</Nav.Link>
              <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
              
              
              {user?.email ? <Button onClick={logOut} variant="light">Logout</Button> : 
     <Nav.Link as={NavLink} to="/login">Login</Nav.Link>}
              <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{user?.email}</a>
              </Navbar.Text>
            </Navbar.Collapse>
            </Nav>
            </Container>
          </Navbar>
        </div>
    );
};

export default Navigation;