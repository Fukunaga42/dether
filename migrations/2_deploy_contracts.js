var ConvertLib = artifacts.require("./ConvertLib.sol");
var DetherTx = artifacts.require("./DetherTx.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
//var Web3 = require('../node_modules/web3');

module.exports = function(deployer) {
	//var web3RPC = new Web3(deployer.provider);
	deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, DetherTx);
  	deployer.deploy(SafeMath);
  deployer.link(SafeMath, DetherTx);
	deployer.deploy(DetherTx);
	/*web3RPC.eth.getAccounts((error, accounts) => {
  		deployer.deploy(AbieFund,[accounts[0],accounts[1],accounts[2]]);
  	});*/
};
