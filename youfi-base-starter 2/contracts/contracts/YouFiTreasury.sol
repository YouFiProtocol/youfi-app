// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract YouFiTreasury is Ownable {
    IERC20 public immutable usdc;
    address public rewardsSink; // pool/estrategia (stub)

    event Deposited(address indexed user, uint256 amount);
    event Supported(address indexed supporter, uint256 goalId, uint256 amount);

    constructor(address _usdc) Ownable(msg.sender) {
        usdc = IERC20(_usdc);
    }

    function setRewardsSink(address sink) external onlyOwner {
        rewardsSink = sink;
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "amount=0");
        usdc.transferFrom(msg.sender, address(this), amount);
        emit Deposited(msg.sender, amount);
    }

    function support(uint256 goalId, uint256 amount) external {
        require(amount > 0, "amount=0");
        usdc.transferFrom(msg.sender, address(this), amount);
        emit Supported(msg.sender, goalId, amount);
    }
}
