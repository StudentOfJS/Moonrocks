const DappToken = artifacts.require("./DappToken.sol");


contract("DappToken", accounts => {
  it("sets the total supply upon deployment", async () => {
    const tokenInstance = await DappToken.deployed()
    const totalSupply = await tokenInstance.totalSupply()
    assert.equal(totalSupply.toNumber(), 1000000, "sets total supply to 1m")
    assert(totalSupply.toNumber() < 1000001 && totalSupply.toNumber() > 999999)
  })
})