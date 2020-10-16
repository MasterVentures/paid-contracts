// SPDX-License-Identifier: MIT
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
    constructor (string memory multiaddrReferencead,bytes memory signaturead, bytes memory digestad)public{
        address signatoryA;
        address signatoryB;
        uint validUntil;
        string memory multiaddrReference;
        bytes memory signature;
        bytes memory digest;
    }
    constructor (uint) {
        count++;
        agreements[count] = AgreementDocument({
            partyASignatory: Party({ fromSigner: signatoryA }),
            partyBSignatory: Party({ recipientSigner: signatoryB }),
            signed: false,
            escrowed: false,
            validUntil: 0,
            file: Content({
                multiaddressReference: multiaddrReference,
                signature: signature,
                digest: digest
            })
           // terms: Terms({
             //   clauses: []
            //})
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
        string memory multiaddrReference,
        bytes memory signature,
        bytes memory digest        
    )
    public returns (bool) {
        require(
            agreements[this.id()].validUntil != 0,
            "Invalid agreement id"
        );        
        require(
            agreements[this.id()].signatoryA.partyASignatory == msg.sender,
            "Must be modified by owner"
        );   
        if (validUntil != 0) {
            agreements[this.id()].validUntil = validUntil;
        }
        if (multiaddrReference != "") {
            agreements[this.id()].multiaddressReference = multiaddrReference;
        }
        if (signature != bytes(0)) {
            agreements[this.id()].signature = signature;
        }
        if (digest != bytes(0)) {
            agreements[this.id()].digest = digest;
        }                        
        return true;
    }

      //id = AgreementModels(msg.sender);
   function get(
       bytes32 id
    ) 

    
    public returns (bool) {
        require(
            agreements[id].validUntil != 0,
            "Invalid agreement id"
        );
        return agreements[id];
    }
//function validateAgreementDocument(bytes32 id){
    
  // ecrecover for bytes32;
   //ecrecover(agreements[id]==signature)
    //require(ecrecover!=0,msg.sender("Invalid Signature"));

//}
// function recover(bytes32 id)
  //      public pure returns (address)
    //{
      //  bytes memory prefix = "";
       // bytes32 prefixedHash = keccak256(prefix, message);
        //return ecrecover(prefixedHash, v, r, s);
    //}
}
   // function validateAgreementDocument(bytes32 id)
     //   public
   // {
       // bytes32 id = keccak256(, to, amount, count);
       // require(recover(id,signature, digest) ==signature );
       // to.transfer(amount);
       // count++;
       // LogMoneySent(to, amount);
  //  }
//Require EC recover (s recover, hash del documento, firma) slv. Si el sender firmo el documento
//Require EC recover (s recover, hash del documento, firma) slv. Recibe un address y valida si el documento fue firmado por ese usuario
