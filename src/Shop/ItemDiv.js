import React,{ Component } from 'react';
import {Row,Col,Button,CardDeck,Card} from 'react-bootstrap';
import './ItemDiv.css';
import { Link } from 'react-router-dom';


class ItemDiv extends Component {
    

    render() {
        console.log(this.props)
        return (
            <div>
                <Row>
                    {this.props.itemsdetail.map(p=>{
                        return(<Link className={"Link"} to={"/FullPage/"+p.id} key={p.Product}>
                            <Col  className="column" sm={4} >
                                {/* <div className="division">
                                    <div className="Image"><img src={"/images/"+p.source} width="100%" height="100%"></img>
                                        </div>
                                <span className="ProductTitle">{p.Product}</span>
                               
                                <h5>{p.MRP}$</h5>
                                </div> */}
                                  <Card className="CardDiv" style={{width:'18rem'}}>
            <Card.Img className="ImageDiv" variant="top" src={"/images/"+p.source} />
            <Card.Body>
              <Card.Title style={{height:"10px"}}>
                {p.Product}
                <p className="MRP">{p.MRP}$</p>
                <p className="CardText">{p.Type}</p>
                </Card.Title>
              <Card.Text>
             
               </Card.Text>
            </Card.Body>
            <Card.Footer>
            <div className="Button"><Button className="btn btn-dark"> Add to cart </Button></div>
              {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            </Card.Footer>
          </Card>
          
                            </Col>
                            </Link>
                        )
                    })}
                    
                </Row>
 {/* <CardDeck>
     {this.props.itemsdetail.map(p=>{
         return(
            <Card>
            <Card.Img variant="top" src={"/images/"+p.source+"/100px160"} />
            <Card.Body>
              <Card.Title>{p.Product}</Card.Title>
              <Card.Text>
                {p.Title}
               </Card.Text>
            </Card.Body>
            <Card.Footer>
            <div className="Button"><Button className="btn btn-dark"> Add to cart </Button></div>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
             
         )
     })}
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck> */}
            </div>
        )

}
}

export default ItemDiv;