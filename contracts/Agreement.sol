// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.6.10 <=0.8.4;
pragma experimental ABIEncoderV2;

// import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "./AgreementModels.sol";


// @dev Contains agreements templates or documents created by user
//
// Create AgreementUtils
contract Agreement is Context, Ownable, AgreementModels {

    using SafeERC20 for IERC20;
    using Address for address;
	using SafeMath for uint256;
	using SafeMath for uint32;
	using SafeMath for uint8;

    enum AgreementStatus {
		CREATE_SMARTAGREEMENT,
        PENDING_SIGNATURE,
        COMPLETED,
		DECLINED,
		EXPIRED
        // DISPUTE_INIT,
        // DISPUTE_ACCEPTED,
        // DISPUTE_REJECTED,
        // VERDICT_PARTY_FOR,
        // VERDICT_PARTY_AGAINST,
        // ARBITRATION,
        // COUNTERPARTY_REJECTED
    }

    // Value of Payment Value
    uint private _payment;
    // Address to Receive the Payment
    address private _recipient;
    // ID for Smart Agreements
    uint32 private count;
    // Agreement documents, which has references to decentralized storage and
    // onchain metadata
    mapping(uint256 => AgreementDocument) public agreements;
	// WhiteList Peer Sign: Agreement Id -> address of creator -> Secuence of Peer Signer's -> Whitelisted
	mapping(uint32 => mapping(address => mapping(uint8 => WhiteListed))) public whiteListed;
    // user - plantilla - metadata
    // mapping(address => mapping(bytes32 => bytes)) public agreementForms;
    // Agreement templates - preloaded from migration
    mapping(bytes32 => bytes) agreementTemplates;

    constructor() {}

    function getPayment() public view returns (uint) {
        return _payment;
    }

    function setPayment(uint payment) public onlyOwner() returns (bool) {
        require(payment != 0, "Value of Payment are more than zero (0)");
        // Old Value
        uint oldPaymentValue = _payment;
        _payment = payment;
        // Event Change Payment
        emit ChangePaymentEvents(
            oldPaymentValue,
            _payment,
            msg.sender
        );
        return true;
    }

    function getRecipient() public view onlyOwner() returns (address) {
        return _recipient;
    }

    function setRecipient(address recipient) public onlyOwner() returns (bool) {
        require(recipient != address(0), "ERC20: Error to Set Recipient with zero address");
        require(address(recipient).isContract() == false, "ERC20: Error to Set Recipient with a contract address");
        // Old Value
        address oldRecipientValue = _recipient;
        _recipient = recipient;
        // Event Change Recipient
        emit ChangeRecipientEvents(
            oldRecipientValue,
            _recipient,
            msg.sender
        );
        return true;
    }

	function create(
		address token,
		uint32 validUntilSign,
		uint32 validUntilSA,
		uint32 amountSigner,
        string memory multiaddrReference,
		bytes32 agreementFormTemplateId,
		bytes32 agreementForm,
        bytes32 digest
	)
		public
		returns (
			uint256
		)
	{
		// Must be the signer allow the payment for this Smart Contract
		require(IERC20(token).allowance(msg.sender,address(this)) >= _payment,"Don't have allowance to pay for PAID services");
		return execute(
			[uint32(0),
			uint32(AgreementStatus.CREATE_SMARTAGREEMENT),
			amountSigner,
			uint32(block.timestamp),
            uint32(block.timestamp),
			validUntilSign,
			validUntilSA],
			[token,
            msg.sender,
			address(0)],
            multiaddrReference,
            agreementFormTemplateId,
            agreementForm,
            digest
        );
	}

    function pendingSign(
		address token,
		uint32 agreementId,
		uint32 validUntilSign,
		uint32 validUntilSA,
		string memory multiaddrReference,
        bytes32 agreementForm,
        bytes32 digest
    )
        public
        returns (
            uint256
        )
    {
		AgreementDocument memory doc = agreements[agreementId];
		// Validate if is Valid to Sign
		require(
			doc.status == uint8(AgreementStatus.EXPIRED),
			"Smart Agreements has Expired"
		);
		require(
			doc.status == uint8(AgreementStatus.DECLINED),
			"Smart Agreements has Declined"
		);
		if (!doc.peersSigned) {
			if (validUntilSign >= uint32(block.timestamp)) {
				doc.status = uint32(AgreementStatus.EXPIRED);
				revert("Time has expired to sign the Smart Agreement");
			}
		} else {
			revert("All Signer and Signed th Smart Agreement");
		}
		// Must be the signer allow the payment for this Smart Contract
		require(IERC20(token).allowance(msg.sender,address(this)) >= _payment,"Don't have allowance to pay for PAID services");
		uint8 peerSigner = getPeerSigner(agreementId, msg.sender);
		address creator = agreements[agreementId].createSigner.signatory;
		require(whiteListed[agreementId][creator][peerSigner].whiteListed, "Signer Don't Whitelisted");
		require(!whiteListed[agreementId][creator][peerSigner].signed, "Sign was execute, by Signer!!");

		if (iscompleted(agreementId)) {
			return execute(
				[
				agreementId,
				uint32(AgreementStatus.COMPLETED),
				doc.amountSigner,
				doc.created_at,
				uint32(block.timestamp),
				validUntilSign,
				validUntilSA],
				[token,
				doc.createSigner.signatory,
				msg.sender],
				multiaddrReference,
				doc.agreementFormTemplateId,
				agreementForm,
				digest
			);
		} else {
			return execute(
				[agreementId,
				uint32(AgreementStatus.PENDING_SIGNATURE),
				doc.amountSigner,
				doc.created_at,
				uint32(block.timestamp),
				validUntilSign,
				validUntilSA],
				[token,
				doc.createSigner.signatory,
				msg.sender],
				multiaddrReference,
				doc.agreementFormTemplateId,
				agreementForm,
				digest
			);
		}

    }


    function declined(
		uint32 agreementId,
		address token,
		string memory multiaddrReference,
        bytes32 agreementForm,
        bytes32 digest
    )
        public
        returns (
            uint256
        )
    {
		// Validate if is Valid to Sign
		require(
			agreements[agreementId].status == uint8(AgreementStatus.EXPIRED),
			"Smart Agreements has Expired"
		);
		require(
			agreements[agreementId].status == uint8(AgreementStatus.DECLINED),
			"Smart Agreements has Declined"
		);
		if (!agreements[agreementId].peersSigned) {
			if (agreements[agreementId].validUntilSign >= uint32(block.timestamp)) {
				agreements[agreementId].status = uint8(AgreementStatus.EXPIRED);
				revert("Time has expired to sign the Smart Agreement");
			}
		} else {
			revert("All Signer and Signed th Smart Agreement");
		}
        AgreementDocument memory doc = agreements[agreementId];
        return execute(
			[agreementId,
			uint32(AgreementStatus.DECLINED),
			doc.amountSigner,
			doc.created_at,
			uint32(block.timestamp),
			doc.validUntilSign,
			doc.validUntilSA],
			[token,
			doc.createSigner.signatory,
			msg.sender],
			multiaddrReference,
			doc.agreementFormTemplateId,
			agreementForm,
			digest
        );
    }

	/** Creates an agreement document
     * Contains a reference for content stored off chain
	 * @param _args[0] agreementId uint32 value, index of the Smart Agreement Id
	 * @param _args[1] status uint32 value (enum AgreementStatus), indicate status of Smart
	 * @param _args[2] amountSigner uint32 value, indicate amount of Signer
	 * @param _args[3] created_at uint32 value, indicate create date
	 * @param _args[4] update_at uint32 value, indicate update date
	 * @param _args[5] validUntilSign uint32 value, indicate valid date for signed, after that the Smart Agreement is Expired
	 * @param _args[6] validUntilSA uint32 value, indicate valid date of the Smart Agreement, After all Peer Signer, signed the Smart Agreement
	 * @param _address[0] token of token, used for pay the cost of Smart Agreement
	 * @param _address[1] party of party Creator of Smart Agreement
	 * @param _address[2] counterPrty of Peer Signer of Smart Agreement (can be any of the Peers Signer)
	 * @param multiaddrReference URL into IPFS of the Smart Agreement Template, full filled
	 * @param agreementFormTemplateId Id of Smart Agreement Template
	 * @param agreementForm SHA3, of Samrt Agreement Template Full Filled
	 * @param digest Digest of Document Signed
	 */
    function execute(
		uint32[7] memory _args,
		address[3] memory _address,
        string memory multiaddrReference,
		bytes32 agreementForm,
        bytes32 agreementFormTemplateId,
        bytes32 digest
    )
        internal
        returns (
            uint256
        )
    {
		uint8 peerSigner = getPeerSigner(_args[1], _address[2]);
		if ((peerSigner == uint(0)) && (_args[1] != uint(AgreementStatus.CREATE_SMARTAGREEMENT))) {
			revert("Must be Whitelisted all Peer Signer before!!");
		}
        if (_args[1] == uint(AgreementStatus.CREATE_SMARTAGREEMENT)) {
			// Create Agreement
            count++;
            agreements[count] = AgreementDocument({
				escrowed: false,
				peersSigned: false,
				status: _args[1],
				amountSigner: _args[2],
				created_at: _args[3],
                updated_at: _args[4],
                validUntilSign: _args[5],
				validUntilSA: _args[6],
				createSigner: Party({ signatory: _address[1] }),
                agreementForm: agreementForm,
                agreementFormTemplateId: agreementFormTemplateId,
                file: Content({
                    multiaddressReference: multiaddrReference,
                    digest: digest
                })
            });
			// Update Whitelist
			whiteListed[count][_address[1]][0] = WhiteListed({
				whiteListed: true,
				signed:  true,
				creator: true,
				AgreementId: count,
				peerSigner: Party({ signatory: _address[1] })
			});
			// Payment of PAID Services
            require(AgreementPayment(_address[0], _address[1]), "Error when Pay PAID Services");
            // Emit Event when Create Agreements
            emit AgreementEvents(
                count,
                agreementFormTemplateId,
                _address[1],
                _address[2],
                multiaddrReference,
                _args[1]
            );
            return count;
		} else if (_args[1]  == uint(AgreementStatus.PENDING_SIGNATURE)) {
			// Update Agreement
            agreements[_args[0]] = AgreementDocument({
				escrowed: false,
				peersSigned: false,
				status: _args[1],
				amountSigner: _args[2],
				created_at: _args[3],
                updated_at: _args[4],
                validUntilSign: _args[5],
				validUntilSA: _args[6],
				createSigner: Party({ signatory: _address[1] }),
                agreementForm: agreementForm,
                agreementFormTemplateId: agreementFormTemplateId,
                file: Content({
                    multiaddressReference: multiaddrReference,
                    digest: digest
                })
            });
			// Update Whitelist
			whiteListed[_args[0]][_address[1]][peerSigner] = WhiteListed({
				whiteListed: true,
				signed: true,
				creator: false,
				AgreementId: _args[0],
				peerSigner: Party({ signatory: _address[2] })
			});
            // Payment of PAID Services
            require(AgreementPayment(_address[0], _address[2]), "Error when Pay PAID Services");
            // Emit Event when Counterparty Sign the Agreementes
            emit AgreementEvents(
                _args[0],
                agreementFormTemplateId,
                _address[1],
                _address[2],
                multiaddrReference,
                _args[1]
            );
            return _args[0];
        } else if (_args[1]  == uint(AgreementStatus.COMPLETED)) {
            agreements[_args[0]] = AgreementDocument({
				escrowed: false,
				peersSigned: true,
				status: _args[1],
				amountSigner: _args[2],
				created_at: _args[3],
                updated_at: _args[4],
                validUntilSign: _args[5],
				validUntilSA: _args[6],
				createSigner: Party({ signatory: _address[1] }),
				agreementForm: agreementForm,
                agreementFormTemplateId: agreementFormTemplateId,
                file: Content({
                    multiaddressReference: multiaddrReference,
                    digest: digest
                })
            });
			// Update Whitelist
			whiteListed[_args[0]][_address[1]][peerSigner] = WhiteListed({
				whiteListed: true,
				signed: true,
				creator: false,
				AgreementId: _args[0],
				peerSigner: Party({ signatory: _address[2] })
			});
            // Payment of PAID Services
            require(AgreementPayment(_address[0], _address[2]), "Error when Pay PAID Services");
            // Emit Event when Counterparty Sign the Agreementes
            emit AgreementEvents(
                _args[0],
                agreementFormTemplateId,
                _address[1],
                _address[2],
                multiaddrReference,
                _args[1]
            );
            return _args[0];
        } else if (_args[1] == uint(AgreementStatus.DECLINED)) {
            agreements[_args[0]] = AgreementDocument({
				escrowed: false,
				peersSigned: true,
				status: _args[1],
				amountSigner: _args[2],
				created_at: _args[3],
                updated_at: _args[4],
                validUntilSign: _args[5],
				validUntilSA: _args[6],
				createSigner: Party({ signatory: _address[1] }),
				agreementForm: agreementForm,
                agreementFormTemplateId: agreementFormTemplateId,
                file: Content({
                    multiaddressReference: multiaddrReference,
                    digest: digest
                })
            });
			// Update Whitelist
			whiteListed[_args[0]][_address[1]][peerSigner] = WhiteListed({
				whiteListed: true,
				signed: true,
				creator: false,
				AgreementId: _args[0],
				peerSigner: Party({ signatory: _address[2] })
			});
            // Emit Event when Counterparty Sign the Agreementes
            emit AgreementEvents(
                _args[0],
                agreementFormTemplateId,
                _address[1],
                _address[2],
                multiaddrReference,
                _args[1]
            );
            return _args[0];
        } else {
            return uint256(0);
        }
    }

    function setAgreementTemplate(bytes32 id, bytes memory content)
        public
        returns (bool)
    {
        // TODO: add requires
        agreementTemplates[id] = content;
        return true;
    }

	function iscompleted(uint32 _agreementId)
		public
		view
		returns (bool)
	{
		uint8 amountSigner = uint8(agreements[_agreementId].amountSigner);
		address creator = agreements[_agreementId].createSigner.signatory;
		for (uint8 i = 0; i < amountSigner; i++) {
			if (!whiteListed[_agreementId][creator][i].signed) {
				return false;
			}
		}
		return true;
	}

	function getPeerSigner(uint32 _agreementId, address counterParty)
		internal
		view
		returns (uint8)
	{
		uint8 amountSigner = uint8(agreements[_agreementId].amountSigner);
		address creator = agreements[_agreementId].createSigner.signatory;
		for (uint8 i = 0; i < amountSigner; i++) {
			if (counterParty == whiteListed[_agreementId][creator][i].peerSigner.signatory) {
				return i;
			}
		}
		return 0;
	}

	function addWhitelisted (
		uint32 agreementId,
		uint8 amountSigner,
		address[] memory _addresses
	)
		external returns (bool)
	{
		require(
			agreements[agreementId].status == uint8(AgreementStatus.CREATE_SMARTAGREEMENT),
			"Can't add Peer Signer's"
		);
		require(
			_addresses.length == amountSigner.sub(uint(1)),
			"The number of signing peer is not the same Array length "
		);
		address creator = agreements[agreementId].createSigner.signatory;
		for (uint8 i = 0; i < amountSigner; i++) {
			address _address = _addresses[i];
			if (_address != msg.sender) {
				whiteListed[agreementId][creator][i.add(1)] =
						WhiteListed ({
							whiteListed: true,
							signed:false,
							creator:false,
							AgreementId: agreementId,
							peerSigner: Party({ signatory: _address })
						});
			}
		}
	}


    // function getFormById(uint agreementId, bool isCounterparty, bytes32 formId) public view returns (bytes memory) {
    //     require(isCounterparty == true &&
    //      msg.sender == agreements[agreementId].createSigner.signatory);

    //     return agreementForms[msg.sender][formId];
    // }

    function hasValidSA(uint256 _id) public view returns (bool) {
        return agreements[_id].validUntilSA >= uint32(block.timestamp);
    }

	function hasValidToSign(uint256 _id) public view returns (bool) {
		if (agreements[_id].peersSigned) {return true;}
		return agreements[_id].validUntilSign > uint32(block.timestamp);
	}
    function AgreementPayment(address token, address sender) private returns (bool) {
        require(msg.sender == sender, "Sender in not the Same to Sign the Transaction");
        require(_payment <= IERC20(token).balanceOf(sender), "Enough Balance for this Operation");
        // token.safeIncreaseAllowance(recipient, amount);
        IERC20(token).safeTransferFrom(msg.sender, _recipient, _payment);
        //Emit Event for Payment
        emit PaymentEvents(
            _payment,
            msg.sender,
            address(token)
        );
        return true;
    }
}
