import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import '../www/styles/Dether.scss'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {browserhistory} from 'react-router'


class Sell extends Component {

  state = {
    qty: null,
    address: ""
  }

  componentDidMount() {

  }

  goHome  = () => {
    console.log("We're bringing you home")
    window.location.assign('/#/home')
  }

  verifyFunction = () => {
    alert("Are these informations correct ? \n Quantity to sell: " + this.state.qty +"\n Address of buyer: "+ this.state.address)
  }

  handleQtyChange = (e) => {
    this.setState({qty: e.target.value})
  }

  handleAddressChange = (e) => {
    this.setState({address: e.target.value})
  }


  render() {
    return (
      <div id="container">
        <h1 id="start">DETHER</h1>
        <br></br>
        <form id="sellForm">
          <div id="inputdiv">
            <br></br>
            <input onChange={this.handleQtyChange} type="number" aria-describedby="emailHelp" placeholder="Enter the amount you are selling in €"></input>
          </div>
          <div id="inputdiv">
            <br></br>
            <input onChange={this.handleAddressChange} type="text" aria-describedby="emailHelp" placeholder="Enter the address of your buyer"></input>
          </div>
        </form>
        <br></br>
        <br></br>
        <button onClick={this.verifyFunction}>Validez les informations</button>

        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default Sell