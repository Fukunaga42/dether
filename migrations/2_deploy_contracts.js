var DetherTx = artifacts.require("./DetherTx.sol");
//var Web3 = require('../node_modules/web3');

module.exports = function(deployer) {
	//var web3RPC = new Web3(deployer.provider);
	deployer.deploy(DetherTx);
	/*web3RPC.eth.getAccounts((error, accounts) => {
  		deployer.deploy(AbieFund,[accounts[0],accounts[1],accounts[2]]);
  	});*/
};
