import React from 'react';
import '../App.css';
import { Navbar, Nav, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className='mb-4 Header'>
			<Link to="/">
				<Navbar.Brand href="#" style={{fontWeight:'700'}} className="text-info">Brand Name</Navbar.Brand>
			</Link>
			<Nav className="justify-content-center" style={{flex:'1'}}>
				<Link className='navLink' to="/">
					Home
				</Link>
				<Link className='navLink' to="/">
					Shop
				</Link>	
				<Link className='navLink' to="/">
					Contact
				</Link>	
			</Nav>
			<Form className="d-flex">
      
      <Button variant="outline-info">Login</Button>
    </Form>
  </Navbar>
  )
}

export default Header