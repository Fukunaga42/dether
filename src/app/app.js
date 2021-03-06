import React from 'react'
import {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Router, Route, hashHistory } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Proposal from './Proposal'
import Home from './Home'
import Config from './Config'
import Start from './Start'
import Buy from './Buy'
import Chat from './Chat'
import Sell from './Sell'
import Deposit from './Deposit'
import Withdraw from './Withdraw'


import '../www/styles/main.scss'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={hashHistory}>
      <Route path="/" component={Start}/>
      <Route path="/home" component={Home}/>
      <Route path="/sellerconfig" component={Config}/>
      <Route path="/buy" component={Buy}/>
      <Route path="/chat" component={Chat}/>
      <Route path="/sell" component={Sell}/>
      <Route path="/deposit" component={Deposit}/>
      <Route path="/withdraw" component={Withdraw}/>



    </Router>
  </MuiThemeProvider>
), document.getElementById('app'))
