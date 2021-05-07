// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.6.10 <=0.8.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";
//
// @dev Contains agreements templates or documents created by user
//
contract WorkflowRegistry is AgreementModels {
    event AgreementCreated(uint256 indexed id);
    event AgreementModified(uint256 indexed id);
    event AgreementDisputed(uint256 indexed id);
    event AgreementClosed(uint256 indexed id);

    uint256 private count;
    mapping (uint256 => AgreementDocument) public agreements;

    constructor() {
    }

    // Registers a PAID workflow contract
    // With states and steps to execute
    // Add msg.sender as owner
    // Each step/status pair gets and id
    function createWorkflow(
        address party,
        address counterparty,
        uint256 validUntil,
        string memory multiaddrReference,
        bytes32 agreementFormTemplateId,
        bytes memory agreementForm,
        uint status,
        uint created_at,
        uint updated_at,
        bytes memory digest
    )
    public returns (uint) {
        count++;
        agreements[count] = AgreementDocument({
			fromSigner: Party({ signatory: party }),
			toSigner: Party({ signatory: counterparty }),
			escrowed: false,
			validUntil: validUntil,
			status: status,
			agreementForm: agreementForm,
			agreementFormTemplateId: agreementFormTemplateId,
			created_at: created_at,
			updated_at: updated_at,
			file: Content({
				multiaddressReference: multiaddrReference,
				digest: digest
			})
        });
        return count;
    }
}
