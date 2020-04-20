import React from 'react'
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import { Button } from 'react-bootstrap';
const Modal=(props)=>{
    return (<div>
            <Backdrop show={props.show}></Backdrop>  
            <div className="Modal"
                 style={{
                     transform:props.show ? 'translateY(0)':'translateY(-150vh)',
                     top:props.top
                 }}>
                     <Button variant="danger" onClick={props.modelClose} style={{float:'right'}}>X</Button>
                     <hr></hr>
      
                {props.children}
            </div>
            </div>
        )
    }

export default Modal;