/* Part of this contract is from the solidity documentation
TODO: Set a license.
*/

pragma solidity ^0.4.8;

/// @title Dether
contract DetherUser {
    struct Details {
        // if possible check if it is an uniq username
        string username;
        uint volumeTrade;
        uint nbTrade;
        uint localizationGps;
        uint commentIpfsId;
    }

    mapping(address => Details) public users;

    function DetherUser () {
    }

    /// add and change the wallet of a passager
    function addCustomer
    (
      string _username,
      uint _volumeTrade,
      uint _nbTrade,
      uint _localizationGps,
      uint _commentIpfsId
    ) returns (
      string,
      uint,
      uint,
      uint,
      uint
    ) {
       Details details = users[msg.sender];
       details.username = _username;
       details.volumeTrade = _volumeTrade;
       details.nbTrade = _nbTrade;
       details.localizationGps = _localizationGps;
       details.commentIpfsId = _commentIpfsId;

       return (
         _username,
         _volumeTrade,
         _nbTrade,
         _localizationGps,
         _commentIpfsId
       );
    }
}
