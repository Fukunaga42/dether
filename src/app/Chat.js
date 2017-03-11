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


class Chat extends Component {

  state = {

  }

  componentDidMount() {

  }

  goHome  = () => {
    console.log("We're bringing you home")
    window.location.assign('/#/home')
  }

  render() {
    return (
      <div id="container">
        <h1 id="start">DETHER</h1>
        <br></br>
        <button onClick={this.goHome}>Return Home</button>
        <br></br>
        <br></br>
        <h1>Here will go the #whisper chat</h1>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}

export default Chat