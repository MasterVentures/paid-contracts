pragma solidity ^0.6.10;

interface IPAIDWorkflow {
    function requestPartySignature() returns(uint);
    function execute() returns(bool);
    function completed() returns(bool);
    function canceled() returns(bool);
    function getFactory() returns(address);
}