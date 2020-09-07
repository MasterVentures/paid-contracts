pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AgreementModels {

    struct Party {
        address signatory;
    }

    struct Terms {
       Clause[]  clauses;
    }

    // if X complies then a
    // if X does not comply b
    struct Clause {
        address party;
        uint x; // Subject{symbol,p}
        bytes32 operator; // && || > < ===
        uint y;
        uint expiry;
        bytes32 oracleType; // token price
    }

    struct Content {
        string multiaddressReference; // multiaddress
        bytes signature;
        bytes digest;
    }
    
    struct AgreementDocument {
        Party from;
        Party to;
        bool signed;
        bool escrowed;
        uint validUntil;
        Content file;
        Terms terms;
    }
}
