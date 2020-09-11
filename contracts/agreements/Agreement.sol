pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "./AgreementModels.sol";
// 
// @dev Contains agreements templates or documents created by user
// 
contract Agreement is AgreementModels {
    event AgreementCreated(uint256 indexed id);
    event AgreementModified(uint256 indexed id);
    event AgreementDisputed(uint256 indexed id);
    event AgreementClosed(uint256 indexed id);

    uint256 private count;
    address owner;
    mapping (uint256 => AgreementDocument) public agreements;

    constructor() public {
        owner  = msg.sender;
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
            })
        });
        
        agreements[count].clauses[0].party = address(0);
        agreements[count].clauses[0].x = 0;
        agreements[count].clauses[0].operator = keccak256("0");
        agreements[count].clauses[0].y = 0;
        agreements[count].clauses[0].expiry = 0;
        agreements[count].clauses[0].oracleType = keccak256("tokenPriceFeed");

        emit AgreementCreated(count);
        count++;

        return (count - 1);
    }

    function has(
        uint id
    ) 
    public view returns(bool) {
        return agreements[id].validUntil != 0;
    }

    // function modify(
    //     uint id,
    //     uint validUntil,
    //     string memory multiaddrReference,
    //     bytes memory signature,
    //     bytes memory digest        
    // )
    // public returns (bool) {
    //     require(
    //         agreements[id].validUntil != 0,
    //         "Invalid agreement id"
    //     );        
    //     require(
    //         agreements[id].from.signatory == msg.sender,
    //         "Must be modified by owner"
    //     );   
    //     if (validUntil != 0) {
    //         agreements[id].validUntil = validUntil;
    //     }
    //     if (multiaddrReference != "") {
    //         agreements[id].file.multiaddressReference = multiaddrReference;
    //     }
    //     if (signature != bytes(0)) {
    //         agreements[id].file.signature = signature;
    //     }
    //     if (digest != bytes(0)) {
    //         agreements[id].file.digest = digest;
    //     }                        
    //     return true;
    // }


    function get(
        uint id
    ) 
    public returns (Party memory from,
                    Party memory to,
                    bool signed,
                    bool escrowed,
                    uint validUntil,
                    Content memory file) {
        require(
            agreements[id].validUntil != 0,
            "Invalid agreement id"
        );
        return (
                agreements[id].from, 
                agreements[id].to,
                agreements[id].signed,
                agreements[id].escrowed,
                agreements[id].validUntil,
                agreements[id].file
        );  
    }
}