pragma solidity ^0.4.23;

import "./Token.sol";
import "./SafeMath.sol";
contract TokenSale {
    address admin;
    Token public tokenContract;
    uint256 public tokenPrice;
    uint256 public tokensSold;

    event Sell(address _buyer, uint256 _amount);

    constructor(Token _tokenContract, uint256 _tokenPrice) public {
        admin = msg.sender;
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    function buyTokens(uint256 _numberOfTokens) public payable {
        require(
            msg.value == SafeMath.mul(_numberOfTokens, tokenPrice),
            "error, incorrect value"
        );
        require(
            tokenContract.balanceOf(this) >= _numberOfTokens,
            "not enough tokens available to fullfil request"
            );
        require(
            tokenContract.transfer(msg.sender, _numberOfTokens),
            "transfer failed"
            );
        tokensSold = SafeMath.add(tokensSold, _numberOfTokens);
        emit Sell(msg.sender, _numberOfTokens);
    }

    function endSale() public {
        require(
            msg.sender == admin,
            "not authorized"
            );
        require(tokenContract.transfer(admin, tokenContract.balanceOf(this)));
        selfdestruct(admin);
    }
}