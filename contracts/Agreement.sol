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
        address to,
        uint validUntil,
        string memory multiaddrReference,
        bytes memory signature,
        bytes memory digest
    ) 
    public returns (uint) {
        count++;
        agreements[count] = AgreementDocument({
            from: Party({ signatory: msg.sender }),
            to: Party({ signatory: to }),
            signed: false,
            escrowed: false,
            validUntil: 0,
            file: Content({
                multiaddressReference: multiaddrReference,
                signature: signature,
                digest: digest
            }),
            terms: Terms({
                clauses: [Clause({
                            party: address(0),
                            x: 0,
                            operator: keccak256("0"),
                            y: 0,
                            expiry: 0,
                            oracleType: keccak256("tokenPriceFeed")
                        })]
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
        uint id,
        uint validUntil,
        string memory multiaddrReference,
        bytes memory signature,
        bytes memory digest        
    )
    public returns (bool) {
        require(
            agreements[id].validUntil != 0,
            "Invalid agreement id"
        );        
        require(
            agreements[id].from.signatory == msg.sender,
            "Must be modified by owner"
        );   
        if (validUntil != 0) {
            agreements[id].validUntil = validUntil;
        }
        if (multiaddrReference != "") {
            agreements[id].file.multiaddressReference = multiaddrReference;
        }
        if (signature != bytes(0)) {
            agreements[id].file.signature = signature;
        }
        if (digest != bytes(0)) {
            agreements[id].file.digest = digest;
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