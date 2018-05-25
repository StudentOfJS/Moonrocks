const price = require("../constants").TOKEN_SALE_PRICE;

const TokenSale = artifacts.require("./TokenSale")


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
  it("initiates the tokensale with the correct values", async () => {
    assert.notEqual(tokenSaleAddress, 0x0, "has a contract address")
    assert.notEqual(tokenSaleContract, 0x0, "has a token address")
    assert.equal(price, tokenSaleTokenPrice, "token price is correct")
  })
})