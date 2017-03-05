import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
import AbieFund from '../../build/contracts/AbieFund.json'

import '../www/styles/Proposal.scss'

const TESTRPC_HOST = 'localhost'
const TESTRPC_PORT = '8545'

class Proposal extends Component {

  state = {
    web3: false,
    balance: 0,
    addressContract: null,
    delegate: null,
    metaContract: null,
    accounts: null,
    askMembership: null,

  }

  componentDidMount() {
    let testAbie = ''
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        // web3 = new Web3(web3.currentProvider);
        this.setState({web3: true})
        let meta = contract(AbieFund)
        this.setState({metaContract: meta})
        let provider = new Web3.providers.HttpProvider(`http://${TESTRPC_HOST}:${TESTRPC_PORT}`)
        let metaCoinBalance = 0
        meta.setProvider(provider)
        const web3RPC = new Web3(provider)
        // Get accounts.
        web3RPC.eth.getAccounts((err, acc) => {
          console.log(err)
          console.log(acc)
          return meta.deployed()
            .then((contract) => this.setState({addressContract: contract.address}))
            .catch((err) => console.error(err))
        })
      } else {
        alert("install Metamask or use Mist")
      }
    }, 1000)
  }

  handleChangeDelegate = (event) => {
    this.setState({delegate: event.target.value})
  }

  handleChangeAskMembership = (event) => {
    this.setState({askMembership: event.target.value})
  }

  setDelegate = () => {
    this.state.metaContract.at(this.state.addressContract)
      .then((contract) => contract.setDelegate(
        0,
        this.state.delegate,
        {from: this.state.addressContract}
      ))
      .then((result) => console.log(result))
      .catch((err) => {
        console.error(err);
      })
  }

  askMembership = () => {
    this.state.metaContract.at(this.state.addressContract)
      .then((contract) => contract.askMembership(
        {
          value: web3.toWei(this.state.askMembership, "ether"),
          from: this.state.addressContract
        }
      ))
      .then((result) => console.log(result))
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <div id="container">
        <h1>Abie</h1>
        <p>Balance : {this.state.balance}</p>
        <p>
            Set Delegate <input type="text" onChange={this.handleChangeDelegate} />
            <button onClick={this.setDelegate}>Submit address</button>
        </p>
        <p>
            Ask Membership <input type="text" onChange={this.handleChangeAskMembership} />
            <button onClick={this.askMembership}>Submit ask membership</button>
        </p>
      </div>
    )
  }
}

export default Proposal
