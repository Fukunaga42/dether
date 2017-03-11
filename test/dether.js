var Dether = artifacts.require("./DetherUser.sol");

contract('Dether', (accounts) => {
  it("add a customer", () => {
    var customer1 = accounts[0]
    var customer2 = accounts[1]
    var customer3 = accounts[2]
    var customer4 = accounts[3]

    let structUser = ["Bob", 0, 0, 123, 0]

    return Dether.new().then((instance) => {
      dether = instance
      return dether.addCustomer("Bob", 0, 0, 123, 0)
    }).then(() => {
      return dether.addCustomer.call("Bob", 0, 0, 123, 0)
    }).then((result) => {
      assert.equal(result[0].toString(), "Bob", "error username")
      assert.equal(result[1].toNumber(), 0, "error volume")
      assert.equal(result[2].toNumber(), 0, "error nb transaction")
      assert.equal(result[3].toNumber(), 123, "error localization")
      assert.equal(result[4].toNumber(), 0, "error comment id")
    })
  })
})
