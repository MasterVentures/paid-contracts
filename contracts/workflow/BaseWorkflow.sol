pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "./StepTransition.sol";

abstract contract BaseWorkflow {
    // Registered workflow count and workflow mapping
    uint public workflowCount;
    mapping (bytes32 => mapping(uint => Step)) public workflows;

    // find next workflow step
    mapping (uint => mapping (uint => uint)) public findNext;
    mapping (bytes32 => uint) public workflowStepsCount;

    constructor() 
    public {

    }

    function hasStep(
        bytes32 workflowId,
        uint stepId
    )
    public returns (bool) {
        if(workflows[workflowId][stepId].nextStep == 0 
            && workflows[workflowId][stepId].currentStep == 0) {
            return false;
        }
        return true;
    }    
    
    function compile(
        bytes32 workflowId,
        uint[] memory parties, 
        Step[] memory steps, 
        StepTransition[] memory transitions
    )
    public returns (uint[] memory stepIds) {
        for (uint i = 0; i < steps.length; i++) {
            uint wfStepId = workflowStepsCount[workflowId];
            workflows[workflowId][wfStepId] = Step({
                partyActor: steps[i].partyActor,
                currentStep: steps[i].currentStep,
                nextStep: steps[i].nextStep,
                forkStep: steps[i].forkStep,
                extension: steps[i].extension
            });
            workflowStepsCount[workflowId] = workflowStepsCount[workflowId] + 1;
            workflowCount++;

            // add step
            stepIds[workflowStepsCount[workflowId]] = wfStepId;
        }

        // Create from to next state transition table
        for (uint i = 0;i < transitions.length; i++) {
            findNext[
                transitions[i].partyType
            ][
                transitions[i].currentStep
            ] = transitions[i].nextStep;
        }
    }

    function requestPartySignature() 
    public virtual returns(uint);

    function execute() 
    public virtual returns(bool);

    function completed()
    public virtual returns(bool);

    function canceled()
    public virtual returns(bool);

    function applyWorkflow() 
    external virtual returns(uint);
}