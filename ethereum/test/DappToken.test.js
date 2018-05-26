const DappToken = artifacts.require("./DappToken.sol");

let tokenInstance;
beforeEach(async () => {
  tokenInstance = await DappToken.deployed()
})

contract("DappToken", accounts => {
  it("initializes the contract with the correct values", async () => {
    const tokenName = await tokenInstance.name()
    const tokenSymbol = await tokenInstance.symbol()
    const tokenStandard = await tokenInstance.standard()
    assert.equal(tokenName, "dApp Token", "has the correct name")
    assert.equal(tokenSymbol, "DTU", "has the correct symbol")
    assert.equal(tokenStandard, "dApp Token v1.0.0", "has the correct standard")
  })

  it("sets and allocates the initial supply upon deployment", async () => {
    const totalSupply = await tokenInstance.totalSupply()
    const adminBalance = await tokenInstance.balanceOf(accounts[0])

    assert.equal(totalSupply.toNumber(), 1000000, "sets total supply to 1m")
    assert(totalSupply.toNumber() < 1000001 && totalSupply.toNumber() > 999999)
    assert.equal(adminBalance.toNumber(), 1000000, "it allocates an initial supply to the admin account")
  })

  it("transfers token ownership", async () => {
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

  it("approves tokens for delegated transfer", async () => {
    const approvedTransfer = await tokenInstance.approve.call(accounts[1], 100)
    assert(approvedTransfer, "it returns true")
    const txReceipt = await tokenInstance.approve(accounts[1], 100, { from: accounts[0] })
    assert.equal(txReceipt.logs.length, 1, "triggers one event")
    assert.equal(txReceipt.logs[0].event, "Approval", `should be the "Approval" event`)
    assert.equal(txReceipt.logs[0].args._owner, accounts[0], "logs the authorized by account")
    assert.equal(txReceipt.logs[0].args._spender, accounts[1], "logs the authorized account")
    assert.equal(txReceipt.logs[0].args._value, 100, "logs the transfer amount")
    const allowance = await tokenInstance.allowance(accounts[0], accounts[1]);
    assert.equal(allowance.toNumber(), 100, "stores the allowance for delegated transfer")
  })

  it("handles delegated token transfers", async () => {
    const fromAccount = accounts[2]
    const toAccount = accounts[3]
    const spendingAccount = accounts[4]
    await tokenInstance.transfer(fromAccount, 100, { from: accounts[0] })
    await tokenInstance.approve(spendingAccount, 10, { from: fromAccount })
    try {
      await tokenInstance.transferFrom(fromAccount, toAccount, 9999, { from: spendingAccount })
      assert(false, "transfer larger than balance should fail")
    } catch (error) {
      assert.equal(error.message, "VM Exception while processing transaction: revert", "cannot transfer value larger than balance")
    }
    try {
      await tokenInstance.transferFrom(fromAccount, toAccount, 15, { from: spendingAccount })
      assert(false, "transfer larger than approved balance should fail")
    } catch (error) {
      assert.equal(error.message, "VM Exception while processing transaction: revert", "cannot transfer more than approved value")
    }
    const isValidTransferFrom = await tokenInstance.transferFrom.call(fromAccount, toAccount, 10, { from: spendingAccount })
    assert(isValidTransferFrom, "an approved account can transfer the approved ammount")

    const txReceipt = await tokenInstance.transferFrom(fromAccount, toAccount, 10, { from: spendingAccount })
    assert.equal(txReceipt.logs.length, 1, "triggers one event")
    assert.equal(txReceipt.logs[0].event, "Transfer", `should be the "Transfer" event`)
    assert.equal(txReceipt.logs[0].args._from, fromAccount, "logs the account tokens are transferred from")
    assert.equal(txReceipt.logs[0].args._to, toAccount, "logs the account tokens are transferred to")
    assert.equal(txReceipt.logs[0].args._value, 10, "logs the transfer amount")

    const balanceFrom = await tokenInstance.balanceOf(fromAccount)
    assert.equal(balanceFrom.toNumber(), 90, "deducts the amount from the sending account")
    const balanceTo = await tokenInstance.balanceOf(toAccount)
    assert.equal(balanceTo.toNumber(), 10, "credits the amount to the recieving account")
    const updatedAllowance = await tokenInstance.allowance(fromAccount, spendingAccount)
    assert.equal(updatedAllowance.toNumber(), 0, "allowance is updated after successful transfer")
  })
})