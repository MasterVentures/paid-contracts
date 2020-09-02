pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";
// 
// @dev Contains agreements templates or documents created by user
// 
contract WorkflowRegistry {
    event AgreementCreated(uint256 indexed id);
    event AgreementModified(uint256 indexed id);
    event AgreementDisputed(uint256 indexed id);
    event AgreementClosed(uint256 indexed id);

    uint256 private count;
    mapping (uint256 => AgreementDocument) public agreements;

    constructor() public {
    }

    // Registers a PAID workflow contract
    // With states and steps to execute
    // Add msg.sender as owner
    // Each step/status pair gets and id
    function createWorkflow(
        address signatoryA,
        address signatoryB,
        uint validUntil,
        string multiaddrReference,
        bytes signature,
        bytes digest
    ) 
    public returns (uint) {
        count++;
        agreements[count] = AgreementDocument({
            partyASignatory: Party({ partyASignatory: signatoryA }),
            partyBSignatory: Party({ partyBSignatory: signatoryB }),
            signed: false,
            escrowed: false,
            validUntil: 0,
            file: Content({
                multiaddressReference: multiaddrReference,
                signature: signature,
                digest: digest
            }),
            terms: Terms({
                clauses: []
            })
        });
        return true;
    }


}