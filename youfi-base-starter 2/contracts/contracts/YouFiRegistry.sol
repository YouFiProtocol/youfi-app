// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract YouFiRegistry is Ownable {
    mapping(address => bool) public isUniqueHuman;
    mapping(address => bool) public isAdult;

    event HumanVerified(address indexed user, bool uniqueHuman, bool adult);

    constructor() Ownable(msg.sender) {}

    function setProofs(address user, bool uniqueHuman, bool adult) external onlyOwner {
        isUniqueHuman[user] = uniqueHuman;
        isAdult[user] = adult;
        emit HumanVerified(user, uniqueHuman, adult);
    }

    modifier requireUniqueHuman(address user) {
        require(isUniqueHuman[user], "require unique human");
        _;
    }

    modifier requireAdult(address user) {
        require(isAdult[user], "require age >= 18");
        _;
    }
}
