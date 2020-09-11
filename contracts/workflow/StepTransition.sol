pragma solidity ^0.6.10;

// @dev Defines a state transition from a current state to next
struct StepTransition {
    uint256 partyType;
    uint256 currentStep;
    uint256 nextStep;
}

struct Step {
    // Alice or Bob
    uint256 partyActor;
    // Current step
    uint256 currentStep;
    // Next step
    uint256 nextStep;
    // Fork step
    uint256 forkStep;
    // extension to ue
    address extension;
}
