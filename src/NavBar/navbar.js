import React,{ Component } from 'react';
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './navbar.css'

class NavigationBar extends Component{

    render(){
        return(
<div>
<Navbar bg="light" expand="sm"  sticky="top" id="NavBarEle">
  <Navbar.Brand href="#home" className="LinkEle">Flavor=Market</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    
    </Navbar.Collapse>
    <Button variant="outline-info" onClick={this.props.flag}>Login</Button>
 
 </Navbar>
   <Nav >
   <Nav.Link ><Link className="LinkEle" to="/">Shop</Link></Nav.Link>
   <Nav.Link ><Link className="LinkEle" to="/Recipes">Recipes</Link></Nav.Link>
   <Nav.Link ><Link className="LinkEle" to="/Blog">Blog</Link></Nav.Link>
   <Nav.Link ><Link className="LinkEle" to="/">WholeSale</Link></Nav.Link>
  
   <NavDropdown title="Dropdown" id="basic-nav-dropdown">
     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
     <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
     <NavDropdown.Divider />
     <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
   </NavDropdown>
 </Nav>
 </div>    )
    }
}

export default NavigationBar;