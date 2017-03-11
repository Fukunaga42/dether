var DetherTx = artifacts.require("./DetherTx.sol");

contract('DetherTx', function(accounts) {
  it("should put 1 DetherTx in the first account", () => {
    return DetherTx.deployed().then((instance) => {
      detherTx = instance;
      return detherTx.deposit.call({value: web3.toWei(42, "ether"), from: accounts[0]})
    })
    .then(result => {
      assert.equal(result.toNumber(), 41580000000000000000, "error balance")
    })
  })
});
