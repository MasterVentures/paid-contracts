pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";
// 
// @dev Contains agreements templates or documents created by user
// 
contract Agreement is Ownable, AgreementModels {
    event AgreementCreated(address indexed from, address indexed to, string indexed multiaddrReference);
    event AgreementModified(address indexed from, address indexed to, string indexed multiaddrReference);
    event AgreementDisputed(address indexed from, address indexed to, string indexed multiaddrReference);
    event AgreementClosed(address indexed from, address indexed to, string indexed multiaddrReference);

    uint256 private count;
    // Agreement documents, which has references to decentralized storage and
    // onchain metadata
    mapping (uint256 => AgreementDocument) public agreements;
    // user - plantilla - metadata
    mapping (address => (mapping (bytes32 => bytes)) public agreementForms;

    // Agreement templates - preloaded from migration
    mapping (bytes32 => string) agreementTemplates;


    constructor() public {
    }

    // Creates an agreement document 
    // Contains a reference for content stored off chain
    function create(
        address signatoryA,
        address signatoryB,
        uint validUntil,
        string memory multiaddrReference,
        bytes32 agreementFormTemplateId,
        bytes calldata agreementForm,
        bytes32 r,
        bytes32 s,
        uint v,
        bytes memory digest
    ) 
    external returns (uint) {
        count++;
        agreements[count] = AgreementDocument({
            fromSigner: Party({ signatory: signatoryA }),
            toSigner: Party({ signatory: signatoryB }),
            signed: false,
            escrowed: false,
            validUntil: 0,
            agreementForm: agreementForm,
            file: Content({
                multiaddressReference: multiaddrReference,
                r: r,
                s: s,
                v: v,
                digest: digest
            })
        });
//       (uint256 myNum, ,address a) = abi.decode(data, (uint256, bytes,address));
        emit AgreementCreated(
            signatoryA, 
            signatoryB,
            multiaddrReference
        );
        return count;
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


    function getFormById(
        bytes32 formId
    ) 
    external
    returns (bytes calldata) {
        // todo requires
        return agreementForms[msg.sender][formId];
    }

    function has(
        uint id
    ) 
    public view returns(bool) {
        return agreements[id].validUntil != 0;
    }

   
    function get(
        uint id
    ) 
    public returns (AgreementDocument memory) {
        require(
            agreements[id].validUntil != 0,
            "Invalid agreement id"
        );
        return agreements[id];
    }
}