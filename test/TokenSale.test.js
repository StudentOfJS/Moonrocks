const TokenSale = artifacts.require("./TokenSale")
const tokenPrice = require("../constants").TOKEN_SALE_PRICE;

let tokenSaleInstance;
let tokenSaleAddress;
let tokenSaleContract;
let tokenSaleTokenPrice;
beforeEach(async () => {
  tokenSaleInstance = await TokenSale.deployed()
  tokenSaleAddress = await tokenSaleInstance.address
  tokenSaleContract = await tokenSaleInstance.tokenContract()
  tokenSaleTokenPrice = await tokenSaleInstance.tokenPrice()
})

contract("TokenSale", (accounts) => {
  const buyer = accounts[1]
  it("initiates the tokensale with the correct values", async () => {
    assert.notEqual(tokenSaleAddress, 0x0, "has a contract address")
    assert.notEqual(tokenSaleContract, 0x0, "has a token address")
    assert.equal(tokenPrice, tokenSaleTokenPrice, "token price is correct")
  })
  it("facilitates token buying", async () => {
    const numberOfTokens = 10
    const value = tokenPrice * numberOfTokens
    const receipt = await tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value })
    const tokensSold = await tokenSaleInstance.tokensSold()
    assert.equal(tokensSold.toNumber(), numberOfTokens, "increments the number of tokens sold")
    assert.equal(receipt.logs.length, 1, "triggers one event")
    assert.equal(receipt.logs[0].args._buyer, buyer, "logs the account of the purchased tokens")
    assert.equal(receipt.logs[0].args._amount, numberOfTokens, "logs the number of tokens purchased")
    try {
      await tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: 1 })
      assert(false, "sale should fail if msg.value != number of tokens in wei")
    } catch (error) {
      assert.equal(error.message, "VM Exception while processing transaction: revert", "sale fails if msg.value != number of tokens in wei")
    }

  })
})