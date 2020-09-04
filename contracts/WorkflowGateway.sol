pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";
// 
// @dev Controls and executes steps by whitelisted users
// 
contract WorkflowGateway is AgreementModels {
    event AgreementCreated(uint256 indexed id);
    event AgreementModified(uint256 indexed id);
    event AgreementDisputed(uint256 indexed id);
    event AgreementClosed(uint256 indexed id);

    uint256 private count;
    mapping (uint256 => AgreementDocument) public agreements;

    constructor() public {
    }


    function executeStep(
        uint id,
        uint stepId
    ) 
    public returns (bool) {
        // Validates msg.sender
        // Validates workflow exists in registry
        // Validates steps exists in registry *** New
        // Executes steps
        // must call workflow execute -> oracle, smart contract
        return true;
    }
    
    function addUserToWhitelist(
        address user,
        address agreementContract
    ) 
    public returns (bool) {
        // Adds user to agreement contract
        return true;
    }

    function removeUserFromWhitelist(
        address user,
        address agreementContract
    ) 
    public returns (bool) {
        // Removes user to agreement contract
        return true;
    }

    

}