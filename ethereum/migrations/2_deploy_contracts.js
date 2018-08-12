var DappToken = artifacts.require("./Token.sol");
var TokenSale = artifacts.require("./TokenSale.sol");
var price = require("../constants").TOKEN_SALE_PRICE;
module.exports = function(deployer) {
  deployer.deploy(Token, 38000000).then(function() {
    return deployer.deploy(TokenSale, DappToken.address, price);
  });
};
