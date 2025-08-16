// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract GoalRegistry {
    event GoalCreated(address indexed user, string id, uint256 targetUSDC);

    struct Goal {
        string id;
        uint256 targetUSDC;
        bool exists;
    }

    mapping(address => mapping(string => Goal)) public goals;

    function createGoal(string calldata id, uint256 targetUSDC) external {
        require(!goals[msg.sender][id].exists, "already exists");
        goals[msg.sender][id] = Goal({id: id, targetUSDC: targetUSDC, exists: true});
        emit GoalCreated(msg.sender, id, targetUSDC);
    }
}
