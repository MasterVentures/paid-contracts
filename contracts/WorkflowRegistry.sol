pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";
import "./StepTransition.sol";
import "./WorkflowFactory.sol";
// 
// @dev A registries for workflows
// 
contract WorkflowRegistry {
    event WorkflowRegistered(bytes32 indexed workflowId, uint[] stepIds);
    event WorkflowStepStart(
        address indexed sender, 
        uint indexed current, 
        uint indexed actorId
    );
    event WorkflowStepCompleted(
        address indexed recipient, 
        uint indexed next, 
        uint indexed actorId, 
        uint  documentId
    );

    address subowner;
    address delegatedOwner;
    
    // find next workflow step
    mapping (uint => mapping (uint => uint)) public findNext;

    uint public workflowCount;
    mapping (bytes32 => mapping(uint => Step)) public workflows;
    mapping (bytes32 => uint) public workflowStepsCount;

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

    constructor() public {
    }

    // Registers a PAID workflow contract
    // With states and steps to execute
    // Add msg.sender as owner
    // Each step/status pair gets and id
    function createWorkflow(
        bytes32 workflowId,
        address workflowContract,
        uint[] memory parties, 
        Step[] memory steps, 
        StepTransition[] memory transitions) 
        public returns (uint[] memory stepIds) {
        // TODO: link with DID eth
        require(msg.sender == delegatedOwner, "INVALID_USER");

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

        emit WorkflowRegistered(
            workflowId,
            stepIds
        );
        return stepIds;
    }  


}