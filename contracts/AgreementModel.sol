pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AgreementModel {
    struct Content {
        bytes32 reference;
        string network;
        bytes signature;
        bytes digest;
    }
    struct AgreementDocument {
        address partyOneSignatory;
        address partyTwoSignatory;
        uint signed;
        bool isEscrowed;
        uint validUntil;
        RuleSet rules;
    }
    struct RuleSet {
        ;
    }
}
