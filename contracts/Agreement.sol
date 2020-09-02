pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./AgreementModels.sol";
// 
// @dev Contains agreements templates or documents created by user
// 
contract Agreement is Ownable, AgreementModels {
    event AgreementCreated(uint256 indexed id);
    event AgreementModified(uint256 indexed id);
    event AgreementDisputed(uint256 indexed id);
    event AgreementClosed(uint256 indexed id);

    uint256 private count;
    mapping (uint256 => AgreementDocument) public agreements;

    constructor() public {
    }

    // Creates an agreement document 
    // Contains a reference for content stored off chain
    function create(
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

    function has(
        uint id
    ) 
    public view returns(bool) {
        return agreements[id].validUntil != 0;
    }

    function modify(
        uint validUntil,
        string multiaddrReference,
        bytes signature,
        bytes digest        
    )
    public returns (bool) {
        require(
            agreements[id].validUntil != 0,
            "Invalid agreement id"
        );        
        require(
            agreements[id].signatoryA.partyASignatory == msg.sender,
            "Must be modified by owner"
        );   
        if (validUntil != 0) {
            agreements[id].validUntil = validUntil;
        }
        if (multiaddrReference != "") {
            agreements[id].multiaddressReference = multiaddrReference;
        }
        if (signature != bytes(0)) {
            agreements[id].signature = signature;
        }
        if (digest != bytes(0)) {
            agreements[id].digest = digest;
        }                        
        return true;
    }


    function get(
        uint id
    ) 
    public returns (bool) {
        require(
            agreements[id].validUntil != 0,
            "Invalid agreement id"
        );
        return agreements[id];
    }
}