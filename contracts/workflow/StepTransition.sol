pragma solidity ^0.6.10;

// @dev Defines a state transition from a current state to next
struct StepTransition {
    uint partyType;
    uint currentStep;
    uint nextStep;
}
