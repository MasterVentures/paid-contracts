pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AgreementModels {
    struct Party {
        address signatory;
    }

    struct Content {
        string multiaddressReference; // multiaddress
        bytes32 r;
        bytes32 s;
        uint v;
        bytes digest;
    }

    struct AgreementDocument {
        Party fromSigner;
        Party toSigner;
        bool signed;
        bool escrowed;
        uint validUntil;
        Content file;
    }
}
