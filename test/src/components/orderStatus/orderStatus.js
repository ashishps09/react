import React, { Component } from 'react';
import axios from "axios";

class orderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {Id: '', orderId : '', orderStatus: ''};
        console.log(this.state.Id)
      }
    handleSubmit = (event) => {
        event.preventDefault()
       var user = {
           "ID" : this.state.Id,
           "orderID" : this.state.orderId,
           "orderStatus" : this.state.orderStatus
       }
       axios.post(`http://127.0.0.1:8081/orderStatus/`, {user})
       .then(res => {
           if(res.data){
               alert(JSON.stringify(res))
           }
         console.log(res);
       })
    
     }
     handleChangeId(event) {
        this.setState({ Id: event.target.elements.ID.value })
      }
      handleChangeOrdId(event) {
        this.setState({ Id: event.target.elements.orderId.value })
      }
      handleChangeOrdStatus(event) {
        this.setState({ Id: event.target.elements.orderStatus.value })
      }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
         <p>Enter your Id:</p>
        <input id='cust_name'
          type="text"
          name="ID"
          onChange={this.handleChangeId}
          
        /><br></br><br></br>
        <p>Enter your order Id:</p>
        <input id='order_name'
          type="text"
          name="orderID"
          onChange={this.handleChangeOrdId}
        /><br></br><br></br>
        <p>Enter your order Status:</p>
        <input id='order_name'
          type="text"
          name="orderName"
          onChange={this.handleChangeOrdStatus}
          
        /><br></br><br></br>
        <input
        type='submit'
      />
      </form>
    );
  }
}

export default orderStatus;