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
    mapping (uint256 => AgreementDocument) public agreements;

    constructor() public {
    }

    // Creates an agreement document 
    // Contains a reference for content stored off chain
    function create(
        address signatoryA,
        address signatoryB,
        uint validUntil,
        string memory multiaddrReference,
        bytes32 r,
        bytes32 s,
        uint v,
        bytes memory digest
    ) 
    public returns (uint) {
        count++;
        agreements[count] = AgreementDocument({
            fromSigner: Party({ signatory: signatoryA }),
            toSigner: Party({ signatory: signatoryB }),
            signed: false,
            escrowed: false,
            validUntil: 0,
            file: Content({
                multiaddressReference: multiaddrReference,
                r: r,
                s: s,
                v: v,
                digest: digest
            })
        });

        emit AgreementCreated(
            signatoryA, 
            signatoryB,
            multiaddrReference
        );
        return count;
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