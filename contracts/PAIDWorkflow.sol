pragma solidity ^0.6.10;


import "./IPAIDWorkflow.sol";


contract PAIDWorkflow is IPAIDWorkflow {

    event PartySignatureCompleted(bytes32 indexed id, bytes indexed documentDigest, address from, address, to);

    constructor()
    public {

    }

    struct AgreementWorkflowModel {
        address from,
        address to,
        bytes fromUserSignature,
        bytes toUserSignature,
        bytes documentDigest
    }

    mapping(bytes32 => AgreementWorkflowModel) signedAgreements;

    // Sets the agrement party signatures previously signed using
    // document wallet
    // Stores the IPFS reference to the signature and stores document digest
    function setPartySignature(
        address to,
        uint agreementId,
        bytes fromUserSignature,
        bytes toUserSignature,
        bytes documentDigest
    ) returns(uint) {
        // Store document signature and digest
        bytes32 id = keccak256(
            abi.encodePacked(
                msg.sender,
                to,
                agreementId
            )
        );
        signedAgreements[id] = AgreementWorkflowModel({
            msg.sender,
            from,
            fromUserSignature,
            toUserSignature,
            documentDigest
        });

        emit PartySignatureCompleted(
            id,
            documentDigest,
            msg.sender,
            from
        );
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

    function getFactory() returns(address) {
        return address(this);
    }

    function execute() returns(bool) {
        // Must called oracle and get real time data
    }
    function completed() returns(bool);
    function canceled() returns(bool);
}