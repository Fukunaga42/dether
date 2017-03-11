/* Part of this contract is from the solidity documentation
TODO: Set a license.
*/

pragma solidity ^0.4.8;

/// @title Dether
contract Dether {
    struct Details {
        // if possible check if it is an uniq username
        string username;
        int rateTokenReputation;
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
      int _rateTokenReputation,
      uint _localizationGps,
      uint _commentIpfsId
    ) returns (
      string,
      int,
      uint,
      uint
    ) {
         Details details = users[msg.sender];
         details.username = _username;
         details.rateTokenReputation = _rateTokenReputation;
         details.localizationGps = _localizationGps;
         details.commentIpfsId = _commentIpfsId;

         return (
           _username,
           _rateTokenReputation,
           _localizationGps,
           _commentIpfsId);
    }
}
