// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.6.10;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";

contract AgreementModels {
    struct Party {
        address signatory;
    }

    struct Content {
        string multiaddressReference; // multiaddress
        bytes digest;
    }

    struct AgreementDocument {
        Party fromSigner;
        Party toSigner;
        bool escrowed;
        uint256 validUntil;
        bytes agreementForm;
        bytes32 agreementFormTemplateId;
        uint status;
        uint created_at;
        uint updated_at;
        Content file;
    }
}
