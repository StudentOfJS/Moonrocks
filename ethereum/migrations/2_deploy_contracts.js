var DappToken = artifacts.require("./DappToken.sol");
var TokenSale = artifacts.require("./TokenSale.sol");
var price = require("../constants").TOKEN_SALE_PRICE;
module.exports = function (deployer) {
  deployer.deploy(DappToken, 1000000).then(function () {
    return deployer.deploy(TokenSale, DappToken.address, price);
  });
};
