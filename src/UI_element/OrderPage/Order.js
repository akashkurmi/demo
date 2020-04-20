import React, { Component } from 'react'
import { Row, Card, Table } from 'react-bootstrap'

class Order extends Component {
    
    render() {
        return (
            <div>
                <Row>
                    <Table responsive="sm"> 
                        <thead><tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Weight</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delivery Charge</th>
                            <th>Total</th>
                            </tr></thead>
                        
                    </Table>
                </Row>
            </div>        
        )
    }
}

export default Order