pragma solidity ^0.6.10;

abstract contract BaseWorkflow {
    // Registered workflow count and workflow mapping
    uint public workflowCount;
    mapping (bytes32 => mapping(uint => Step)) public workflows;

    struct Step {
        // Alice or Bob
        uint partyActor;
        // Current step
        uint currentStep;
        // Next step
        uint nextStep;
        // Fork step
        uint forkStep;
        // extension to ue
        address extension;
    }

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
        return workflows[workflowId][stepId];
    }    
    
    function compile(
        bytes32 workflowId,
        uint[] memory parties, 
        Step[] memory steps, 
        StepTransition[] memory transitions
    )
    public returns (uint[] stepIds) {
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
    function create(address owner)
    public virtual returns(address);
}