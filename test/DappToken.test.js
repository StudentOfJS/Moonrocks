const DappToken = artifacts.require("./DappToken.sol");


contract("DappToken", accounts => {
  it("initializes the contract with the correct values", async () => {
    const tokenInstance = await DappToken.deployed()
    const tokenName = await tokenInstance.name()
    const tokenSymbol = await tokenInstance.symbol()
    const tokenStandard = await tokenInstance.standard()
    assert.equal(tokenName, "dApp Token", "has the correct name")
    assert.equal(tokenSymbol, "DTU", "has the correct symbol")
    assert.equal(tokenStandard, "dApp Token v1.0.0", "has the correct standard")
  })

  it("sets and allocates the initial supply upon deployment", async () => {
    const tokenInstance = await DappToken.deployed()
    const totalSupply = await tokenInstance.totalSupply()
    const adminBalance = await tokenInstance.balanceOf(accounts[0])

    assert.equal(totalSupply.toNumber(), 1000000, "sets total supply to 1m")
    assert(totalSupply.toNumber() < 1000001 && totalSupply.toNumber() > 999999)
    assert.equal(adminBalance.toNumber(), 1000000, "it allocates an initial supply to the admin account")
  })
})