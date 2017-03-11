var DetherTx = artifacts.require("./DetherTx.sol");

contract('DetherTx', function(accounts) {
  it("add a account, deposit fund, sendCoin", () => {
    var customer1 = accounts[0]
    var customer2 = accounts[1]
    var customer3 = accounts[2]
    var customer4 = accounts[3]

    let structUser = ["Bob", 0, 0, 0, 123, 0]

    return DetherTx.new().then((instance) => {
      dether = instance
      return dether.addAccount("Bob", 0, 0, 0, 123, 0)
    }).then(
      () => dether.addAccount.call("Bob", 0, 0, 0, 123, 0)
    ).then(result => {
      assert.equal(result[0].toString(), "Bob", "error username")
      assert.equal(result[1].toNumber(), 0, "error balance")
      assert.equal(result[2].toNumber(), 0, "error volume")
      assert.equal(result[3].toNumber(), 0, "error nb transaction")
      assert.equal(result[4].toNumber(), 123, "error localization")
      assert.equal(result[5].toNumber(), 0, "error comment id")
      return dether.deposit({value: 42000000, from: accounts[0]})
    }).then(() => dether.getBalance.call(accounts[0])
    ).then(result => {
      assert.equal(result.toNumber(), 42000000, "error balance")
      return dether.sendCoin(accounts[1], 10000000, {from: accounts[0]})
    }).then(() => dether.getBalance.call(accounts[0])
    ).then(result => assert.equal(result.toNumber(), 32000000, "error balance customer1 after transaction")
    ).then(() => dether.getBalance.call(accounts[1])
  ).then(result => assert.equal(result.toNumber(), 9900000, "error balance customer2 after transaction"))
  })
});
