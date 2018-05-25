const TokenSale = artifacts.require("./TokenSale")
const DappToken = artifacts.require("./DappToken.sol")

const { TOKEN_SALE_TOKENS_AVAILABLE, TOKEN_SALE_PRICE } = require("../constants")
let dappTokenInstance;
let tokenSaleInstance;
let tokenSaleAddress;
let tokenSaleContract;
let tokenSaleTokenPrice;

beforeEach(async () => {
  dappTokenInstance = await DappToken.deployed()
  tokenSaleInstance = await TokenSale.deployed()
  tokenSaleAddress = await tokenSaleInstance.address
  tokenSaleContract = await tokenSaleInstance.tokenContract()
  tokenSaleTokenPrice = await tokenSaleInstance.tokenPrice()
})

contract("TokenSale", (accounts) => {
  const admin = accounts[0]
  const buyer = accounts[1]
  const numberOfTokens = 10

  it("initiates the tokensale with the correct values", async () => {
    assert.notEqual(tokenSaleAddress, 0x0, "has a contract address")
    assert.notEqual(tokenSaleContract, 0x0, "has a token address")
    assert.equal(TOKEN_SALE_PRICE, tokenSaleTokenPrice, "token price is correct")
  })

  it("facilitates token buying", async () => {
    // transfer 75 % tokens to token sale address
    await dappTokenInstance.transfer(tokenSaleAddress, TOKEN_SALE_TOKENS_AVAILABLE, { from: admin })
    const receipt = await tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: TOKEN_SALE_PRICE * numberOfTokens })
    const tokensSold = await tokenSaleInstance.tokensSold()
    const contractBalanceAfterPurchase = await dappTokenInstance.balanceOf(tokenSaleInstance.address)
    const balanceOfBuyer = await dappTokenInstance.balanceOf(buyer)

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

    try {
      await tokenSaleInstance.buyTokens((TOKEN_SALE_TOKENS_AVAILABLE + 1000), { from: buyer, value: (TOKEN_SALE_TOKENS_AVAILABLE + 1000) * TOKEN_SALE_PRICE })
      assert(false, "could purchase more tokens than are available")
    } catch (error) {
      const message = [...error.message].slice(0, 43).join('')
      assert.equal(message, "sender doesn't have enough funds to send tx", "cannot purchase more tokens than are available")
    }
    assert.equal(contractBalanceAfterPurchase.toNumber(), TOKEN_SALE_TOKENS_AVAILABLE - numberOfTokens, "token balance of sales address is decremented after sale")
    assert.equal(balanceOfBuyer.toNumber(), numberOfTokens, "buyer recieves correct amount of tokens")
  })

  it("ends token sale", async () => {
    // try to end sale by account other than admin
    try {
      await tokenSaleInstance.endSale({ from: buyer })
      assert(false, "only admin should be able to end token sale")
    } catch (error) {
      assert.equal(error.message, "VM Exception while processing transaction: revert", "only admin can end token sale")
    }

    // try to end sale with admin account
    try {
      await tokenSaleInstance.endSale({ from: admin })
      const adminBalance = await dappTokenInstance.balanceOf(admin)
      assert(true, "admin can end token sale")
      assert.equal(adminBalance.toNumber(), 999990, "returns unsold tokens to admin")
    } catch (error) {
      assert.equal(error.message, "VM Exception while processing transaction: revert", "admin should be able to end token sale")
    }

  })
})