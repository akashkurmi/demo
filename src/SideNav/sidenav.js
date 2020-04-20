import React, { Component } from 'react';
import axios from 'axios';
import SideNavBar from '../UI_element/SideNavBar/SideNavBar';
class SideNav extends Component{
  state={
    Types:[]
  }
  componentDidMount(){
    if(this.props.Ele)
    axios.get("http://localhost:3001/"+this.props.Ele).then(res=>{
     this.setState({
       Types:res.data
     })
   }); 
  }

  render(){
return (
    <div>
      <p center>{this.props.Ele}</p>
      <SideNavBar Types={this.state.Types}></SideNavBar>     
    </div>
  );
}
}

export default SideNav;