// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.6.10 <=0.8.4;
pragma experimental ABIEncoderV2;

contract AgreementModels {

	/** ====================== Struct of Smart Agreements ============================*/
    struct Party {
        address signatory;
    }

    struct Content {
        string multiaddressReference; // multiaddress
        bytes32 digest;
    }

    struct AgreementDocument {
        bool escrowed;
		bool peersSigned;
        uint32 status;
		uint32 amountSigner;
        uint32 created_at;
        uint32 updated_at;
		uint32 validUntilSign;
		uint32 validUntilSA;
		Party createSigner;
		bytes32 agreementForm;
        bytes32 agreementFormTemplateId;
        Content file;
    }

	struct WhiteListed {
		bool whiteListed;
		bool signed;
		bool creator;
		uint32 AgreementId;
		Party peerSigner;
	}

	/** ====================== Event of Smart Agremeents ============================*/

	//Events of Agreements
	event AgreementEvents(
        uint256 indexed id,
        bytes32 formTemplateId,
        address indexed partySource,
        address indexed partyDestination,
        string agreementStoredReference,
        uint status
    );

    //Events of Payments
    event PaymentEvents(
        uint payments,
        address sender,
        address token
    );
    //Events of Change Payments
    event ChangePaymentEvents(
        uint oldPayment,
        uint newPayment,
        address owner
    );
    // Event of change Recipient
    event ChangeRecipientEvents(
        address oldRecipient,
        address newRecipient,
        address owner
    );
}
