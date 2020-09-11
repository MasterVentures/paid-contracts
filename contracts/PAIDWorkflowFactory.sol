pragma solidity ^0.6.10;

import "./workflow/BaseWorkflow.sol";
import "./PAIDWorkflow.sol";
import "./workflow/IWorkflowFactory.sol";

contract PAIDWorkflowFactory is IWorkflowFactory {
    function createWorkflow(address owner) 
    public override returns (BaseWorkflow) {
        PAIDWorkflow instance = new PAIDWorkflow(owner);
        return BaseWorkflow(instance);
    }
}