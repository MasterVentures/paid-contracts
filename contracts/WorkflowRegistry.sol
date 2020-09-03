pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";
// 
// @dev Contains agreements templates or documents created by user
// 
contract WorkflowRegistry {
    event AgreementCreated(uint indexed id);
    event AgreementModified(uint indexed id);
    event AgreementDisputed(uint indexed id);
    event AgreementClosed(uint indexed id);

    address subowner;
    address delegatedOwner;
    
    // find next workflow step
    mapping (uint => mapping (uint => uint)) public findNext;

    uint public workflowCount;
    mapping (bytes32 => mapping(uint => WorkflowStep)) public workflows;
    mapping (bytes32 => uint) public workflowStepsCount;

    constructor() public {
    }

    // Registers a PAID workflow contract
    // With states and steps to execute
    // Add msg.sender as owner
    // Each step/status pair gets and id
    /*
        Generates the "decision tree" by using the WorkflowStep and uint[] 
    */
    function createWorkflow(
        bytes32 workflowId,
        uint[] memory parties, 
        WorkflowStep[] memory steps, 
        StepTransition[] memory transitions) public nonReentrant returns (uint[] memory stepIds) {
        // TODO: link with DID eth
        require(msg.sender == delegatedOwner, "INVALID_USER");

        for (uint i = 0; i < steps.length; i++) {
            uint temp = workflowStepsCount[workflowId];
            workflows[workflowId][temp] = WorkflowStep({
                partyActor: steps[i].partyActor,
                currentStep: steps[i].currentStep,
                nextStep: steps[i].nextStep,
                forkStep: steps[i].forkStep
            });
            workflowStepsCount[workflowId] = workflowStepsCount[workflowId] + 1;
            workflowCount++;

            stepIds.push(workflowStepsCount[workflowId]);
        }
        
        // TODO: link transitions
        while (_actorActions.hasNext()) {
            RLPReader.RLPItem[] memory linkStep = _actorActions.next().toList();
            findNext[linkStep[0].toUint()][linkStep[1].toUint()] = linkStep[2].toUint();
        }
        

        return stepIds;
    }  


}