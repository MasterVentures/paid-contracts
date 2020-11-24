pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";

//
// @dev Contains agreements templates or documents created by user
//
// Create AgreementUtils
contract Agreement is Ownable, AgreementModels {
    enum AgreementStatus {
        PARTY_INIT,
        COUNTERPARTY_SIGNED,
        PUBLISHED,
        DISPUTE_INIT,
        DISPUTE_ACCEPTED,
        DISPUTE_REJECTED,
        VERDICT_PARTY_FOR,
        VERDICT_PARTY_AGAINST,
        ARBRITRATION
    }

    event AgreementPartyCreated(
        uint256 indexed id,
        bytes32 formTemplateId,
        address indexed partySource,
        address indexed partyDestination,
        string agreementStoredReference,
        uint status
    );

    uint256 private count;
    // Agreement documents, which has references to decentralized storage and
    // onchain metadata
    mapping(uint256 => AgreementDocument) public agreements;
    // user - plantilla - metadata
    mapping(address => mapping(bytes32 => bytes)) public agreementForms;

    // Agreement templates - preloaded from migration
    mapping(bytes32 => bytes) agreementTemplates;

    constructor() public {}

    function partyCreate(
        uint256 validUntil,
        string memory multiaddrReference,
        bytes32 agreementFormTemplateId,
        bytes memory agreementForm,
        bytes memory digest
    )
        public
        returns (
            uint256
        )
    {
        return execute(
            msg.sender,
            address(0),
            validUntil,
            multiaddrReference,
            agreementFormTemplateId,
            agreementForm,
            uint(AgreementStatus.PARTY_INIT),
            digest
        );
    }

    function counterPartiesSign(
        uint agreementId,
        uint256 validUntil,
        string memory multiaddrReference,
        bytes32 agreementFormTemplateId,
        bytes memory agreementForm,
        bytes memory digest
    )
        public
        returns (
            uint256
        )
    {
        AgreementDocument memory doc = agreements[agreementId];
        return execute(
            doc.fromSigner.signatory,
            msg.sender,
            validUntil,
            multiaddrReference,
            agreementFormTemplateId,
            agreementForm,
            uint(AgreementStatus.COUNTERPARTY_SIGNED),
            digest
        );
    }

    // Creates an agreement document
    // Contains a reference for content stored off chain
    function execute(
        address party,
        address counterparty,
        uint256 validUntil,
        string memory multiaddrReference,
        bytes32 agreementFormTemplateId,
        bytes memory agreementForm,
        uint status,
        bytes memory digest
    )
        internal
        returns (
            uint256
        )
    {
        count++;
        agreements[count] = AgreementDocument({
            fromSigner: Party({ signatory: party }),
            toSigner: Party({ signatory: counterparty }),
            escrowed: false,
            validUntil: 0,
            status: uint(AgreementStatus.PARTY_INIT),
            agreementForm: agreementForm,
            file: Content({
                multiaddressReference: multiaddrReference,
                digest: digest
            })
        });
        //       (uint256 myNum, ,address a) = abi.decode(data, (uint256, bytes,address));
        emit AgreementPartyCreated(
            count,
            agreementFormTemplateId,
            party,
            counterparty,
            multiaddrReference,
            uint(AgreementStatus.PARTY_INIT)
        );
        return count;
    }

    function setAgreementTemplate(bytes32 id, bytes memory content)
        public
        returns (bool)
    {
        // TODO: add requires
        agreementTemplates[id] = content;
        return true;
    }


    function getFormById(uint agreementId, bool isCounterparty, bytes32 formId) public returns (bytes memory) {
        require(isCounterparty == true &&
         msg.sender == agreements[agreementId].toSigner.signatory);

        return agreementForms[msg.sender][formId];
    }

    function has(uint256 id) public view returns (bool) {
        return agreements[id].validUntil != 0;
    }

    function get(uint256 id) public returns (AgreementDocument memory) {
        require(agreements[id].validUntil != 0, "Invalid agreement id");
        return agreements[id];
    }
}
