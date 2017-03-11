pragma solidity ^0.4.8;

import "./ConvertLib.sol";

contract DetherTx {
  mapping (address => uint) balances;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);

	function DetherTx() {
	}

	function sendCoin(address receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
    uint amountWithFees = amount - (amount * 1/100);
		balances[receiver] += amountWithFees;
		Transfer(msg.sender, receiver, amount);
		return true;
	}

	function getBalanceInEth(address addr) returns(uint){
		return ConvertLib.convert(getBalance(addr),2);
	}

	function getBalance(address addr) returns(uint) {
		return balances[addr];
	}

  // fallback
  function () payable {
    balances[msg.sender] += msg.value;
  }

  function deposit () payable returns (uint) {
    return balances[msg.sender] = msg.value - msg.value * 1/100;
  }
}
