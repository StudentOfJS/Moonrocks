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

  it("transfers token ownership", async () => {
    const tokenInstance = await DappToken.deployed()

    try {
      const assertMessage = await tokenInstance.transfer.call(accounts[1], 9999999999)
      assert(false, "error message must contain revert")
    } catch (error) {
      assert.equal(error.message, "VM Exception while processing transaction: revert", "error message must contain revert")
    }

    const txReceipt = await tokenInstance.transfer(accounts[1], 25000, { from: accounts[0] })
    const transferCall = await tokenInstance.transfer.call(accounts[1], 25000, { from: accounts[0] })
    const balanceOfRecievingAccount = await tokenInstance.balanceOf(accounts[1])
    const balanceOfSendingAccount = await tokenInstance.balanceOf(accounts[0])

    assert.equal(balanceOfRecievingAccount.toNumber(), 25000, "adds the amount to the recieving account")
    assert.equal(balanceOfSendingAccount.toNumber(), 1000000 - 25000, "deducts the amount from sending account")
    assert.equal(txReceipt.logs.length, 1, "triggers one event")
    assert.equal(txReceipt.logs[0].event, "Transfer", `should be the "Transfer" event`)
    assert.equal(txReceipt.logs[0].args._from, accounts[0], "logs account tokens transfered from")
    assert.equal(txReceipt.logs[0].args._to, accounts[1], "logs account tokens transfered to")
    assert.equal(txReceipt.logs[0].args._value, 25000, "logs the transfer amount")
    assert(transferCall, "transfer returns true")
  })
})