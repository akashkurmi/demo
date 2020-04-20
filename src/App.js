import React, { Component } from 'react';
import './App.css';
import  NavigationBar from './NavBar/navbar'
import {Row,Col,Container} from 'react-bootstrap';
import SideNav from './SideNav/sidenav';
import {Route,Switch} from 'react-router-dom';
import Items from './Shop/Items';
import Recipes from './Recipes/Recipes';
import Blog from './Blog/blog';
import Footer from './footer/footer';
import Modal from './UI_element/Modal/Modal';
import UserLogin from './Login_And_SignUp/UserLogin';
import UserSignUp from './Login_And_SignUp/UserSignUp';
import FullPost from './UI_element/FullPost/FullPost';
import CarouselEle from './UI_element/Carousel/CarouselEle';
import Admin from './Admin/admin';
import NewProduct from './Admin/NewProdcut/NewProduct';
import AUI from './UI_element/AUI/AUI';
import {connect} from 'react-redux'

class App extends Component {
  state={
    Login:false,
    SignUp:false
  }
 
  LoginHandler=()=>{
 
    this.setState({
      Login:true,
      SignUp:false
    })
  }

  SignUpHandler=()=>{
 
    this.setState({
      SignUp:true,
      Login:false
    })
  }

  LoginCancelHandler=()=>{
 
    this.setState({
      Login:false,
      SignUp:false
    })
  }

  render(){
    // console.log(this.state.SignUp)
  return (
    <div className="App">
      <Container  >

      <Container>
      <NavigationBar Login={this.LoginHandler} SignUp={this.SignUpHandler}></NavigationBar>
      </Container>

      <AUI flag={this.props.UserName}>
      <Modal show={this.state.Login} modelClose={this.LoginCancelHandler} >
      <UserLogin></UserLogin>
      </Modal>
      
      <Modal show={this.state.SignUp} modelClose={this.LoginCancelHandler} top="15%" >
        <UserSignUp></UserSignUp>
      </Modal>
      </AUI>      

      <Row>
        <Col className="Gape"> 
        <CarouselEle></CarouselEle>
        </Col>
      </Row>
    
     <Row className="Row">
      <Col className="SideNav" sm={2}>
        <SideNav Ele="Types"></SideNav>
        <SideNav Ele="Categories"></SideNav>
      </Col>

      <Col className="G"sm={10}>
         <Switch>
         <Route path="/items/:id" component={Items} ></Route>
         <Route path="/FullPage/:id" component={FullPost}></Route>
         <Route path="/Blog" component={Blog}></Route>
         <Route path="/Recipes" component={Recipes}></Route>
         <Route path="/" exact component={Items}></Route>
         <Route path="/FMadmin/login" component={Admin}></Route>
       <Route path="/FMadmin/NewProduct" component={NewProduct}></Route>
  
        </Switch>
       
      </Col>
    
  </Row>
  
  <Row>
    <Col>
      <Footer></Footer>
    </Col>
  </Row>
</Container>
    </div>
  );
}
}

const StateHandler=(state)=>{
  // console.log("SteteHandler"+state.UserName)
return{
  UserName:state.UserName
  // Password:state.PassWord
}
}

export default connect(StateHandler)(App);
