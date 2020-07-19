import React, { Component } from 'react';
import axios from "axios";

class createOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {ID: "", Name: "", prdId: "", quantity: ""};
      }
      handleSubmit = (event) => {
        var quantity = []
        var orderId = ''
        event.preventDefault()
        console.log(event.target.quantityB.value)
        var Order = {
            "id" : this.state.Id,
            "name" : this.state.Name,
            "productID" : this.state.prdId,
            "productQuantity" : this.state.quantity,
            "orderId" : orderId
        }
        axios.post(`http://127.0.0.1:8081/placeOrder/`, {Order})
        .then(res => {
            if(res.data){
                alert(JSON.stringify(res))
            }
          console.log(res);
        })
      }
    
    handleChangeName(event) {
        this.setState({ Name: event.target.elements.name.value })
      }
    
    handleChangeId(event) {
        this.setState({ ID: event.target.elements.ID.value })
      }
    
    handleChangeQuantity(event) {
        this.setState({ quantity: event.target.elements.quantity.value })
      }
    handleChangeProductId(event) {
        this.setState({ prdId: event.target.elements.product.value })
    }
    render() {
    
    return (
        <form onSubmit={this.handleSubmit}>
        <p>Enter your name:</p>
        <input id='cust_name'
          type="text"
          name="name"
          onChange={this.handleChangeName}
         
        /><br></br><br></br>
        <p>Enter your Id:</p>
        <input id='cust_name'
          type="text"
          name="ID"
          onChange={this.handleChangeId}
         
        /><br></br><br></br>
        <input type="radio" id="Burger" name="product" value="Burger" onChange={this.handleChangeProductId}/>
        <label for="Burger">Burger</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" id="quantity" name="quantity" min="1" max="5" onChange={this.handleChangeQuantity}/>
        <br></br><br></br>
        <input type="radio" id="Pizza" name="product" value="Pizza" onChange={this.handleChangeProductId}/>
        <label for="Pizza">Pizza</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" id="quantity" name="quantity" min="1" max="5" onChange={this.handleChangeQuantity}/>
        <br></br><br></br><input type="radio" id="Sandwich" name="product" value="Sandwich" onChange={this.handleChangeProductId}/>
        <label for="Sandwich">Sandwich</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="number" id="quantity" name="quantity" min="1" max="5" onChange={this.handleChangeQuantity}/>
        <br></br><br></br>
      
        <input
        type='submit'
      />
      </form>
    );
  }
}

export default createOrder;