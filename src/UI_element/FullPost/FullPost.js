import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios';
class FullPost extends Component {
   state={
       post:{}
   }
    componentDidMount=()=>{
        axios.get("http://localhost:3001/posts/"+this.props.match.params.id).then(response=>{
            console.log(response);    
            this.setState({
                post:response.data
            })
        })
    }
    render() {
        console.log(this.state.post);
        return (
            <div>
                <Container>
                    <Row>
                    <Col sm={6}>
                            <h1>this is 1st block</h1>
                            <img src={"/images/"+this.state.post.source } width="300px" height="300px"></img>
                        </Col>
                        <Col sm={6}>
                        <h1>{this.state.post.Product}</h1>
                        <h2>{this.state.post.id}</h2>
                        <h2>{this.state.post.weight}</h2>
                        <h2>{this.state.post.MRP}</h2>
                        <h2>{this.state.post.Type}</h2>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default FullPost