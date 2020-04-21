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
import FullPost from './UI_element/FullPost/FullPost';
import CarouselEle from './UI_element/Carousel/CarouselEle';
import Admin from './Admin/admin';
import NewProduct from './Admin/NewProdcut/NewProduct';

class App extends Component {
  state={
    Login:false
  }
 
  LoginHandler=()=>{
 
    this.setState({
      Login:true
    })
  }

  LoginCancelHandler=()=>{
 
    this.setState({
      Login:false
    })
  }

  render(){
  return (
    <div className="App">
      <Container  >
      <Container  ><NavigationBar flag={this.LoginHandler}></NavigationBar></Container>
      <Modal show={this.state.Login} modelClose={this.LoginCancelHandler} >
        <UserLogin></UserLogin>
      </Modal>
      <Row>
        <Col className="Gape"> 
        <CarouselEle></CarouselEle>
     </Col>
      </Row>
      {/* <Row>
      <Col className="R" sm>1</Col>
      <Col className="Row" sm>2</Col>
      <Col className="R" sm>3</Col>
      <Col className="Row" sm>4</Col>
      </Row> */}
  <Row className="Row">
    <Col className="SideNav" sm={2}>
      <SideNav></SideNav>
      </Col>

    <Col className="G"sm={10}>
         <Switch>
   
         <Route path="/items/:id" component={Items}></Route>
         <Route path="/FullPage/:id" component={FullPost}></Route>
         <Route path="/Blog" component={Blog}></Route>
        <Route path="/Recipes" component={Recipes}></Route>
        <Route path="/" exact component={Items}></Route>
        <Route path="/FMadmin/login" component={Admin}></Route>
       <Route path="/FMadmin/NewProduct" component={NewProduct}></Route>
  
        </Switch>
       
      </Col>
    
  </Row>
  {/* <Row className="Row">
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row> */}
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

export default App;
