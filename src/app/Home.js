import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
//import AbieFund from '../../build/contracts/AbieFund.json'

import '../www/styles/Home.scss'

class Home extends Component {

  state = {
    web3: false,
    // balance: 0,
    // addressContract: null,
    // delegate: null,
    // metaContract: null,
    // accounts: null,
    // askMembership: null,
    // web3RPC: null,
    // name: '',
    // valueDeposit: 0,
    // dataDeposit: '',
  }

  componentDidMount() {

    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        // web3 = new Web3(web3.currentProvider);
        this.setState({web3: true})
        let provider = new Web3.providers.HttpProvider(`http://${TESTRPC_HOST}:${TESTRPC_PORT}`)
        const web3RPC = new Web3(provider)
        this.setState({web3RPC})

      } else {
        alert("install Metamask or use Mist")
      }
    }, 1000)
  }

  // handleChangeDelegate = (event) => {
  //   this.setState({delegate: event.target.value})
  // }

  render() {
    return (
      <div id="container">
        <h1>DETHER</h1>
        <br></br>
        <br></br>
        <br></br>
        <button> Create my wallet </button>
      </div>
    )
  }
}

export default Home