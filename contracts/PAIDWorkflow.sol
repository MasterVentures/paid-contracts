pragma solidity ^0.6.10;


import "./IPAIDWorkflow.sol";


contract PAIDWorkflow is IPAIDWorkflow {


    function requestPartySignature() returns(uint) {
        // Bob signs
        // Alice sign on behalf (DID)
    }

    function create() returns(uint) {
        // Must have been sign by parties
        // Payable
        // must have been paid before allowing creation
        // Transfer funds to Escrow account
        // Accounting
        // Emit events
        // Change state to next
    }

    function execute() returns(bool) {
        // Must called oracle and get real time data
    }
    function completed() returns(bool);
    function canceled() returns(bool);
}