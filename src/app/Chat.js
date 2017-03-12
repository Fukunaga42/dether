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
      <div className="container">

        <img className="logo2" src="https://raw.githubusercontent.com/Fukunaga42/dether/master/src/www/public/logoapp.jpg"></img>

        <button onClick={this.goHome}>Return Home</button>
        <h2>Here will go the #whisper chat</h2>
      </div>
    )
  }
}

export default Chat
