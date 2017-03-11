var Dether = artifacts.require("./Dether.sol");

contract('Dether', (accounts) => {
  it("add a customer", () => {
    var customer1 = accounts[0]
    var customer2 = accounts[1]
    var customer3 = accounts[2]
    var customer4 = accounts[3]

    let structUser = ["Bob", 0, 123, 0]

    return Dether.new().then((instance) => {
      // member 2 set delegate for AddMember to member 1
      dether = instance
      return dether.addCustomer("Bob", 0, 123, 0)
    }).then(() => {
      // verify
      return dether.addCustomer.call("Bob", 0, 123, 0)
    }).then((result) => {
      assert.equal(result[0].toString(), "Bob", "error username")
      assert.equal(result[1].toNumber(), 0, "error rate token")
      assert.equal(result[2].toNumber(), 123, "error localization")
      assert.equal(result[3].toNumber(), 0, "error comment id")
    })
  })
})
