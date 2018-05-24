pragma solidity ^0.4.23;

contract DappToken {
    // name
    string public name = "dApp Token";
    string public symbol = "DTU";
    string public standard = "dApp Token v1.0.0";
    // symbol
    uint256 public totalSupply;
    
    mapping(address => uint256) public balanceOf;

    constructor(uint256 _initialSupply) public {
        balanceOf[msg.sender] = _initialSupply;
        totalSupply = _initialSupply;
    }
}