import React, {Component} from 'react'
import request from 'superagent'
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
//import AbieFund from '../../build/contracts/AbieFund.json'

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
    web3RPC: null,
    name: '',
    valueDeposit: 0,
    dataDeposit: '',
  }

  componentDidMount() {
    let testAbie = ''
    setTimeout(() => {
      if (typeof web3 !== 'undefined') {
        // web3 = new Web3(web3.currentProvider);
        this.setState({web3: true})
        //let meta = contract(AbieFund)
        //this.setState({metaContract: meta})
        let provider = new Web3.providers.HttpProvider(`http://${TESTRPC_HOST}:${TESTRPC_PORT}`)
        //let metaCoinBalance = 0
        //meta.setProvider(provider)
        const web3RPC = new Web3(provider)
        this.setState({web3RPC})
        // Get accounts.
        /*
        web3RPC.eth.getAccounts((err, acc) => {
          console.log(err)
          console.log(acc)
          this.setState({accounts: acc})
          return meta.deployed()
            .then((contract) => this.setState({addressContract: contract.address}))
            .catch((err) => console.error(err))
        })*/
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

  handleChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  handleChangeValueDeposit = (event) => {
    this.setState({valueDeposit: event.target.value})
  }

  handleChangeDataDeposit = (event) => {
    this.setState({dataDeposit: event.target.value})
  }

  setDelegate = () => {
    this.state.metaContract.at(this.state.addressContract)
      .then((contract) => contract.setDelegate(
        0,
        this.state.delegate,
        {from: this.state.accounts[0]}
      ))
      .then((result) => console.log(result))
      .catch((err) => {
        console.error(err);
      })
  }

  askMembership = () => {
    this.state.metaContract.at(this.state.addressContract)
      .then((contract) => {
        return contract.askMembership(
        {
          value: web3.toWei(10, "ether"),
          from: this.state.accounts[4],
          gas: 4000000
        }
      )})
      .then((result) => console.log(result))
      .catch((err) => {
        console.error(err);
      })
  }

  addProposal = () => {
    this.state.metaContract.at(this.state.addressContract)
      .then((contract) => {
        return contract.addProposal(
          this.state.name,
          this.state.valueDeposit,
          this.state.dataDeposit,
        {
          value: web3.toWei(1, "ether"),
          from: this.state.accounts[0],
          gas: 4000000
        }
      )})
      .then((result) => console.log(result))
      .catch((err) => {
        console.error(err);
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Abie</h1>
        <p>Balance : {this.state.balance}</p>
        <p>
            Set Delegate <input type="text" onChange={this.handleChangeDelegate} />
            <button onClick={this.setDelegate}>Add address</button>
        </p>
        <p>
            Ask Membership <input type="text" onChange={this.handleChangeAskMembership} />
            <button onClick={this.askMembership}>Ask membership</button>
        </p>
        <p>
          Add proposal&nbsp;
          <input type="text" onChange={this.handleChangeName} placeholder="Name of the proposition (hex)" />
          <input type="text" onChange={this.handleChangeRequestAmount} placeholder="Requested amount (Wei)" />
          <input type="text" onChange={this.handleChangeDescription} placeholder="Link IPFS" />
          <button onClick={this.addProposal}>Submit add proposal</button>
        </p>
      </div>
    )
  }
}

export default Proposal
