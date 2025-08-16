// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract YouFiSBT is ERC721, Ownable {
    struct Goal {
        uint256 targetValue;
        uint64 deadline;
        uint8 status; // 0 active, 1 completed, 2 expired
        uint64 createdAt;
    }

    uint256 private _nextId;
    mapping(uint256 => Goal) public goals;
    mapping(uint256 => address) public goalOwner;

    event GoalCreated(uint256 indexed goalId, address indexed owner, uint256 targetValue, uint64 deadline);
    event GoalCompleted(uint256 indexed goalId);
    event GoalExpired(uint256 indexed goalId);

    constructor() ERC721("YouFi Goal", "YFG") Ownable(msg.sender) {}

    function mintGoal(address to, uint256 targetValue, uint64 deadline) external onlyOwner returns (uint256) {
        require(deadline > block.timestamp, "deadline in past");
        uint256 id = ++_nextId;
        _safeMint(to, id);
        goals[id] = Goal({targetValue: targetValue, deadline: deadline, status: 0, createdAt: uint64(block.timestamp)});
        goalOwner[id] = to;
        emit GoalCreated(id, to, targetValue, deadline);
        return id;
    }

    function complete(uint256 goalId) external {
        require(ownerOf(goalId) == msg.sender, "not owner");
        Goal storage g = goals[goalId];
        require(g.status == 0, "not active");
        g.status = 1;
        emit GoalCompleted(goalId);
    }

    // Soul-bound: bloquear transferências
    function _update(address to, uint256 tokenId, address auth) internal override returns (address) {
        address from = super._update(to, tokenId, auth);
        require(from == address(0) || to == address(0), "SBT non-transferable");
        return from;
    }
}
