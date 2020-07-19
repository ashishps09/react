import React, { Component } from 'react';
import axios from "axios";


class getOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {ID: ""};
      }
      handleSubmit = (event) => {
        event.preventDefault()
       axios.get(`http://127.0.0.1:8081/order/`+this.state.Id+`/`)
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
    render() {
    
    return (
        <form onSubmit={this.handleSubmit}>
        
        <p>Enter your ID to see all your orders!!</p>
        <input id='cust_id'
          type="text"
          name="ID"
          onChange={this.handleChangeId}
          
        /><br></br><br></br>
        
        <input
        type='submit'
      />
      </form>
    );
  }
}

export default getOrder;