pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";

//
// @dev Contains agreements templates or documents created by user
//
contract Agreement is Ownable, AgreementModels {
    event AgreementCreated(
        uint256 indexed id,
        bytes32 agreementFormTemplateId,
        address indexed from,
        address indexed to
        // string multiaddrReference
    );
    event AgreementModified(
        address indexed from,
        address indexed to,
        string indexed multiaddrReference
    );
    event AgreementDisputed(
        address indexed from,
        address indexed to,
        string indexed multiaddrReference
    );
    event AgreementClosed(
        address indexed from,
        address indexed to,
        string indexed multiaddrReference
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

    // Creates an agreement document
    // Contains a reference for content stored off chain
    function create(
        address signatoryA,
        address signatoryB,
        uint256 validUntil,
        // string memory multiaddrReference,
        bytes32 agreementFormTemplateId,
        bytes calldata agreementForm
    )
        external
        returns (
            // bytes32 r,
            // bytes32 s,
            // uint256 v,
            // bytes memory digest
            uint256
        )
    {
        count++;
        agreements[count] = AgreementDocument({
            fromSigner: Party({signatory: signatoryA}),
            toSigner: Party({signatory: signatoryB}),
            signed: false,
            escrowed: false,
            validUntil: 0,
            agreementForm: agreementForm
            // file: Content({
            //     multiaddressReference: multiaddrReference,
            //     r: r,
            //     s: s,
            //     v: v,
            //     digest: digest
            // })
        });
        //       (uint256 myNum, ,address a) = abi.decode(data, (uint256, bytes,address));
        emit AgreementCreated(
            count,
            agreementFormTemplateId,
            signatoryA,
            signatoryB
            // multiaddrReference
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

    // // Use this code snippet to integrate form data with contracts
    // function toSellBuyStruct(
    //     bytes32 formId
    // )
    // internal
    // returns (SellBuyStruct) {
    //       (uint256 myNum, ,address a) = abi.decode(data, (uint256, bytes,address));
    //       return a;
    // }

    function getFormById(bytes32 formId) public returns (bytes memory) {
        // todo requires
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
