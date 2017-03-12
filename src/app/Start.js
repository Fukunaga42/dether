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


class Start extends Component {

/*  constructor(props) {
    super(props)

  }*/

 componentDidMount() {
 }

  state = {
  }

  clickYes = () => {
          console.log(this.props.children)
  console.log("Bringing you to Home Component baby!")
  window.location.assign('/#/home')
  }

  clickNo = () => {
    console.log("Bringing you in the past!")
    window.location.assign('https://localbitcoins.com/fr/')
  }

  render() {
    return (
      <div id="container">
        <br></br>
        <br></br>
        <br></br>
        <h1 id="start">DETHER</h1>
        <br></br>
        <br></br>
        <br></br>
        <h1>Are you #dether ?</h1>
        <span>
        <button onClick={this.clickYes}> YES </button>
        <button onClick={this.clickNo}> NO </button>
        </span>
        <br></br>
      </div>
    )
  }
}

export default Start