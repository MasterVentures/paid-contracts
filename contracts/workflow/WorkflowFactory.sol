pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/utils/EnumerableSet.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Address.sol";

// Creates IPaidWorkflow Instances
contract WorkflowFactory {
    using SafeMath for uint256;
    using Address for address payable;

    event Withdrawn(address indexed payee, uint256 weiAmount);

    address public owner;
    uint256 fee = 0.002 * 1e18;
    constructor() public {
        owner = msg.sender;
    }


    // payWorkflowTemplate - payable
    function createWorkflow(address iworkflowLike)
    public returns (address) {
        address wf = BaseWorkflow(iworkflowLike).create(
            owner
        );
        return wf;
    }

}