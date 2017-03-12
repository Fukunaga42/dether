pragma solidity ^0.4.8;


import "./SafeMath.sol";

contract DetherTx {
  struct Details {
      // if possible check if it is an uniq username
      string username;
      uint balance;
      uint volumeTrade;
      uint nbTrade;
      uint localizationGps;
      uint commentIpfsId;
  }

  mapping(address => Details) public users;

	event Transfer (address indexed _from, address indexed _to, uint256 _value);

	function DetherTx() {
	}

	function sendCoin (address receiver, uint amount) returns(bool sufficient) {
		if (users[msg.sender].balance < amount) return false;
/*
		users[msg.sender].balance -= amount;
    users[msg.sender].volumeTrade += amount;
    users[receiver].volumeTrade += amount;
    ++users[receiver].nbTrade;
    ++users[msg.sender].nbTrade;
    uint amountWithoutFees = amount - (amount * 1/100);
		users[receiver].balance += amountWithoutFees;
		Transfer(msg.sender, receiver, amountWithoutFees);
*/

    users[msg.sender].balance = SafeMath.safeSub(users[msg.sender].balance, amount);
    users[msg.sender].volumeTrade = SafeMath.safeAdd(users[msg.sender].volumeTrade, amount);
    users[receiver].volumeTrade = SafeMath.safeAdd(users[receiver].volumeTrade, amount);
    ++users[receiver].nbTrade;
    ++users[msg.sender].nbTrade;
    uint amountWithoutFees = SafeMath.safeSub(amount, (amount * 1/100));
    users[receiver].balance = SafeMath.safeAdd(users[receiver].balance, amountWithoutFees);
    Transfer(msg.sender, receiver, amountWithoutFees);

		return true;
	}

	function getBalance () constant returns(uint) {
		return users[msg.sender].balance;
	}

  function getVolume () constant returns(uint) {
    return users[msg.sender].volumeTrade;
  }

  function getNbTrade () constant returns(uint) {
    return users[msg.sender].nbTrade;
  }


  function deposit () payable returns (uint) {
    return  users[msg.sender].balance += msg.value ;
    //return SafeMath.safeAdd(users[msg.sender].balance,msg.value );
  }

  /// add and change the wallet of a passager
  function addAccount
  (
    string _username,
    uint _balance,
    uint _volumeTrade,
    uint _nbTrade,
    uint _localizationGps,
    uint _commentIpfsId
  ) returns (
    string,
    uint,
    uint,
    uint,
    uint,
    uint
  ) {
     Details details = users[msg.sender];
     details.username = _username;
     details.balance = 0;
     details.volumeTrade = _volumeTrade;
     details.nbTrade = _nbTrade;
     details.localizationGps = _localizationGps;
     details.commentIpfsId = _commentIpfsId;

     return (
       _username,
       _balance,
       _volumeTrade,
       _nbTrade,
       _localizationGps,
       _commentIpfsId
     );
  }

  function withdraw (uint _amount) {
    if (users[msg.sender].balance < _amount) throw;
    // It is important to set this to zero because the recipient
    // can call this function again as part of the receiving call
    // before `send` returns.

    //users[msg.sender].balance -= _amount;
    users[msg.sender].balance = SafeMath.safeSub(users[msg.sender].balance,_amount);

    var amount = _amount;

    if(!msg.sender.send(amount)) throw;
  }

  // fallback
  function () payable {}
}
