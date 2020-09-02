pragma solidity ^0.6.10;

contract WorkflowStep {


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

    struct Step {
        // Alice or Bob
        uint partyActor;
        // Current step
        uint currentStep;
        // Next step
        uint nextStep;
        // Fork step
        uint forkStep;
    }
}