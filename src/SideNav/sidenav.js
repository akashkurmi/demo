import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
class SideNav extends Component{
  state={
    Types:[]
  }
  componentDidMount(){
   axios.get("http://localhost:3001/Types").then(res=>{
     this.setState({
       Types:res.data
     })
   }); 
  }

  render(){
return (
    <div>
      <p>Types</p>
      <Nav vertical hover >
        <NavItem>
          {this.state.Types.map(ele=>{
            return(
            <NavLink><Link to={"/items/"+ele} value="Link">{ele}</Link></NavLink>
            )})}
        </NavItem>
      </Nav>
      <hr />
      <p>Link based</p>
      <Nav vertical>
    <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
      </Nav>
    </div>
  );
}
}

export default SideNav;