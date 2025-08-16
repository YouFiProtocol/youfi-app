// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "forge-std/Test.sol";
import "../src/GoalRegistry.sol";

contract GoalRegistryTest is Test {
    GoalRegistry reg;

    function setUp() public {
        reg = new GoalRegistry();
    }

    function testCreateGoal() public {
        reg.createGoal("save-100", 100e6);
        (string memory id, uint256 target, bool exists) = reg.goals(address(this), "save-100");
        assertTrue(exists);
        assertEq(target, 100e6);
        assertEq(keccak256(bytes(id)), keccak256(bytes("save-100")));
    }
}
