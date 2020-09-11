pragma solidity ^0.6.10;

import "./BaseWorkflow.sol";

abstract contract IWorkflowFactory {
    function createWorkflow(address owner) 
    public virtual returns (BaseWorkflow);
}