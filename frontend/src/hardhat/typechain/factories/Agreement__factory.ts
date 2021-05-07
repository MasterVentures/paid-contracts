/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Agreement } from "../Agreement";

export class Agreement__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Agreement> {
    return super.deploy(overrides || {}) as Promise<Agreement>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Agreement {
    return super.attach(address) as Agreement;
  }
  connect(signer: Signer): Agreement__factory {
    return super.connect(signer) as Agreement__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Agreement {
    return new Contract(address, _abi, signerOrProvider) as Agreement;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "formTemplateId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "partySource",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "partyDestination",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "agreementStoredReference",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
    ],
    name: "AgreementEvents",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldPayment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPayment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ChangePaymentEvents",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ChangeRecipientEvents",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "payments",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "PaymentEvents",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "agreementForms",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "agreements",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "signatory",
            type: "address",
          },
        ],
        internalType: "struct AgreementModels.Party",
        name: "fromSigner",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "signatory",
            type: "address",
          },
        ],
        internalType: "struct AgreementModels.Party",
        name: "toSigner",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "escrowed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "validUntil",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "agreementForm",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "agreementFormTemplateId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "status",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "created_at",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updated_at",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "string",
            name: "multiaddressReference",
            type: "string",
          },
          {
            internalType: "bytes",
            name: "digest",
            type: "bytes",
          },
        ],
        internalType: "struct AgreementModels.Content",
        name: "file",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "validUntil",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "multiaddrReference",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "agreementFormTemplateId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementForm",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "digest",
        type: "bytes",
      },
    ],
    name: "counterPartiesReject",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "validUntil",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "multiaddrReference",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "agreementFormTemplateId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementForm",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "digest",
        type: "bytes",
      },
    ],
    name: "counterPartiesSign",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "address",
                name: "signatory",
                type: "address",
              },
            ],
            internalType: "struct AgreementModels.Party",
            name: "fromSigner",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "address",
                name: "signatory",
                type: "address",
              },
            ],
            internalType: "struct AgreementModels.Party",
            name: "toSigner",
            type: "tuple",
          },
          {
            internalType: "bool",
            name: "escrowed",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "validUntil",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "agreementForm",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "agreementFormTemplateId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "status",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "created_at",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updated_at",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "multiaddressReference",
                type: "string",
              },
              {
                internalType: "bytes",
                name: "digest",
                type: "bytes",
              },
            ],
            internalType: "struct AgreementModels.Content",
            name: "file",
            type: "tuple",
          },
        ],
        internalType: "struct AgreementModels.AgreementDocument",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "getBalanceToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "agreementId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCounterparty",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "formId",
        type: "bytes32",
      },
    ],
    name: "getFormById",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPayment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRecipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "has",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "validUntil",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "counterparty",
        type: "address",
      },
      {
        internalType: "string",
        name: "multiaddrReference",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "agreementFormTemplateId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "agreementForm",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "digest",
        type: "bytes",
      },
    ],
    name: "partyCreate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "content",
        type: "bytes",
      },
    ],
    name: "setAgreementTemplate",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
    ],
    name: "setPayment",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "setRecipient",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6127a38061007d6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80638da5cb5b116100a2578063bd14de9611610071578063bd14de9614610214578063cccf7a8e1461023d578063d6dfa13f14610250578063e35ed0f714610263578063f2fde38b146102765761010b565b80638da5cb5b146101d15780638e1b4f59146101d95780639507d39a146101ec578063bb328a7d1461020c5761010b565b80632fffa196116100de5780632fffa196146101815780633bbed4a014610194578063715018a6146101a757806381fd0b68146101b15761010b565b8063139b97651461011057806314d1cdb31461013957806315b95b541461014c5780631b88094d1461016c575b600080fd5b61012361011e366004612032565b610289565b60405161013091906121a5565b60405180910390f35b610123610147366004611e32565b61036c565b61015f61015a366004611e79565b610411565b6040516101309190612171565b610174610439565b60405161013091906120fc565b61015f61018f366004612002565b610493565b61015f6101a2366004611e16565b61053e565b6101af61062b565b005b6101c46101bf366004611ebe565b6106b4565b604051610130919061265c565b610174610733565b6101c46101e7366004611ef6565b610742565b6101ff6101fa366004612002565b610764565b6040516101309190612526565b6101c46109fe565b610227610222366004612002565b610a04565b6040516101309a999897969594939291906125de565b61015f61024b366004612002565b610c30565b6101c461025e366004611fb3565b610c47565b6101c4610271366004611fb3565b610f73565b6101af610284366004611e16565b6111e8565b606060018315151480156102b657506000848152600460205260409020600101546001600160a01b031633145b6102bf57600080fd5b336000908152600560209081526040808320858452909152902080546102e4906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610310906126cf565b801561035d5780601f106103325761010080835404028352916020019161035d565b820191906000526020600020905b81548152906001019060200180831161034057829003601f168201915b505050505090505b9392505050565b600560209081526000928352604080842090915290825290208054610390906126cf565b80601f01602080910402602001604051908101604052809291908181526020018280546103bc906126cf565b80156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b505050505081565b60008281526006602090815260408220835161042f92850190611c67565b5060019392505050565b60006104436112a8565b6001600160a01b0316610454610733565b6001600160a01b0316146104835760405162461bcd60e51b815260040161047a906123d3565b60405180910390fd5b506002546001600160a01b031690565b600061049d6112a8565b6001600160a01b03166104ae610733565b6001600160a01b0316146104d45760405162461bcd60e51b815260040161047a906123d3565b816104f15760405162461bcd60e51b815260040161047a90612235565b60018054908390556040517ff7a493f00ad4254fe0642ea1181467da775bacea6e4074c44f384fcfbfdb09439061052d90839086903390612684565b60405180910390a150600192915050565b60006105486112a8565b6001600160a01b0316610559610733565b6001600160a01b03161461057f5760405162461bcd60e51b815260040161047a906123d3565b6001600160a01b0382166105a55760405162461bcd60e51b815260040161047a906124d7565b6105b7826001600160a01b03166112ac565b156105d45760405162461bcd60e51b815260040161047a906122f7565b600280546001600160a01b038481166001600160a01b031983161792839055604051918116927f2733673eb7191ab77c4772afbf55984a872b50c4c30fd2e986ed37507c1fbf669261052d9285921690339061212a565b6106336112a8565b6001600160a01b0316610644610733565b6001600160a01b03161461066a5760405162461bcd60e51b815260040161047a906123d3565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6040516370a0823160e01b81526000906001600160a01b038416906370a08231906106e39085906004016120fc565b60206040518083038186803b1580156106fb57600080fd5b505afa15801561070f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610365919061201a565b6000546001600160a01b031690565b6000610758883388848b8a8a8a8442428d6112b2565b98975050505050505050565b61076c611ceb565b60008281526004602052604090206003015461079a5760405162461bcd60e51b815260040161047a906122c9565b60008281526004602081815260409283902083516101608101855281546001600160a01b0390811661014083019081528252855180850187526001840154909116815292810192909252600281015460ff16151593820193909352600383015460608201529082018054919291608084019190610816906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610842906126cf565b801561088f5780601f106108645761010080835404028352916020019161088f565b820191906000526020600020905b81548152906001019060200180831161087257829003601f168201915b5050505050815260200160058201548152602001600682015481526020016007820154815260200160088201548152602001600982016040518060400160405290816000820180546108e0906126cf565b80601f016020809104026020016040519081016040528092919081815260200182805461090c906126cf565b80156109595780601f1061092e57610100808354040283529160200191610959565b820191906000526020600020905b81548152906001019060200180831161093c57829003601f168201915b50505050508152602001600182018054610972906126cf565b80601f016020809104026020016040519081016040528092919081815260200182805461099e906126cf565b80156109eb5780601f106109c0576101008083540402835291602001916109eb565b820191906000526020600020905b8154815290600101906020018083116109ce57829003601f168201915b5050509190925250505090525092915050565b60015490565b6004602081815260009283526040928390208351808301855281546001600160a01b039081168252855193840190955260018201549094168252600281015460038201549382018054939460ff90921693919291610a61906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8d906126cf565b8015610ada5780601f10610aaf57610100808354040283529160200191610ada565b820191906000526020600020905b815481529060010190602001808311610abd57829003601f168201915b50505050509080600501549080600601549080600701549080600801549080600901604051806040016040529081600082018054610b17906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610b43906126cf565b8015610b905780601f10610b6557610100808354040283529160200191610b90565b820191906000526020600020905b815481529060010190602001808311610b7357829003601f168201915b50505050508152602001600182018054610ba9906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610bd5906126cf565b8015610c225780601f10610bf757610100808354040283529160200191610c22565b820191906000526020600020905b815481529060010190602001808311610c0557829003601f168201915b50505050508152505090508a565b600090815260046020526040902060030154151590565b6000600154886001600160a01b031663dd62ed3e33306040518363ffffffff1660e01b8152600401610c7a929190612110565b60206040518083038186803b158015610c9257600080fd5b505afa158015610ca6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cca919061201a565b1015610ce85760405162461bcd60e51b815260040161047a9061227c565b600087815260046020818152604080842081516101608101835281546001600160a01b0390811661014083019081528252835180860185526001840154909116815293810193909352600281015460ff16151591830191909152600381015460608301529182018054919291608084019190610d63906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610d8f906126cf565b8015610ddc5780601f10610db157610100808354040283529160200191610ddc565b820191906000526020600020905b815481529060010190602001808311610dbf57829003601f168201915b505050505081526020016005820154815260200160068201548152602001600782015481526020016008820154815260200160098201604051806040016040529081600082018054610e2d906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610e59906126cf565b8015610ea65780601f10610e7b57610100808354040283529160200191610ea6565b820191906000526020600020905b815481529060010190602001808311610e8957829003601f168201915b50505050508152602001600182018054610ebf906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610eeb906126cf565b8015610f385780601f10610f0d57610100808354040283529160200191610f38565b820191906000526020600020905b815481529060010190602001808311610f1b57829003601f168201915b50505091909252505050905250805151909150610f66908a90338b8b8b8b8b60015b8a60e00151428e6112b2565b9998505050505050505050565b600086815260046020818152604080842081516101608101835281546001600160a01b0390811661014083019081528252835180860185526001840154909116815293810193909352600281015460ff161515918301919091526003810154606083015291820180548493916080840191610fed906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054611019906126cf565b80156110665780601f1061103b57610100808354040283529160200191611066565b820191906000526020600020905b81548152906001019060200180831161104957829003601f168201915b5050505050815260200160058201548152602001600682015481526020016007820154815260200160088201548152602001600982016040518060400160405290816000820180546110b7906126cf565b80601f01602080910402602001604051908101604052809291908181526020018280546110e3906126cf565b80156111305780601f1061110557610100808354040283529160200191611130565b820191906000526020600020905b81548152906001019060200180831161111357829003601f168201915b50505050508152602001600182018054611149906126cf565b80601f0160208091040260200160405190810160405280929190818152602001828054611175906126cf565b80156111c25780601f10611197576101008083540402835291602001916111c2565b820191906000526020600020905b8154815290600101906020018083116111a557829003601f168201915b50505091909252505050905250805151909150610f66908a90338b8b8b8b8b6009610f5a565b6111f06112a8565b6001600160a01b0316611201610733565b6001600160a01b0316146112275760405162461bcd60e51b815260040161047a906123d3565b6001600160a01b03811661124d5760405162461bcd60e51b815260040161047a906121ef565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b3b151590565b6000846114e657600380549060006112c98361270a565b919050555060405180610140016040528060405180602001604052808f6001600160a01b0316815250815260200160405180602001604052808e6001600160a01b031681525081526020016000151581526020018a815260200187815260200188815260200186815260200185815260200184815260200160405180604001604052808b81526020018581525081525060046000600354815260200190815260200160002060008201518160000160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505060208201518160010160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505060408201518160020160006101000a81548160ff021916908315150217905550606082015181600301556080820151816004019080519060200190611424929190611c67565b5060a0820151600582015560c0820151600682015560e08201516007820155610100820151600882015561012082015180518051600984019161146c91839160200190611c67565b5060208281015180516114859260018501920190611c67565b5050509050508a6001600160a01b03168c6001600160a01b03166003547fc06d8b811960d44812b7b2c6eced2659c361e93a7b5efbada49e98e14030fee68a8c8a6040516114d59392919061217c565b60405180910390a450600354611937565b60018514156117275760405180610140016040528060405180602001604052808f6001600160a01b0316815250815260200160405180602001604052808e6001600160a01b031681525081526020016000151581526020018a815260200187815260200188815260200186815260200185815260200184815260200160405180604001604052808b815260200185815250815250600460008c815260200190815260200160002060008201518160000160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505060208201518160010160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505060408201518160020160006101000a81548160ff021916908315150217905550606082015181600301556080820151816004019080519060200190611643929190611c67565b5060a0820151600582015560c0820151600682015560e08201516007820155610100820151600882015561012082015180518051600984019161168b91839160200190611c67565b5060208281015180516116a49260018501920190611c67565b5050509050506116b48d8c611947565b6116d05760405162461bcd60e51b815260040161047a906121b8565b8a6001600160a01b03168c6001600160a01b03168b7fc06d8b811960d44812b7b2c6eced2659c361e93a7b5efbada49e98e14030fee68a8c8a6040516117189392919061217c565b60405180910390a45088611937565b60098514156119335760405180610140016040528060405180602001604052808f6001600160a01b0316815250815260200160405180602001604052808e6001600160a01b031681525081526020016000151581526020018a815260200187815260200188815260200186815260200185815260200184815260200160405180604001604052808b815260200185815250815250600460008c815260200190815260200160002060008201518160000160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505060208201518160010160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550505060408201518160020160006101000a81548160ff021916908315150217905550606082015181600301556080820151816004019080519060200190611884929190611c67565b5060a0820151600582015560c0820151600682015560e0820151600782015561010082015160088201556101208201518051805160098401916118cc91839160200190611c67565b5060208281015180516118e59260018501920190611c67565b5050509050508a6001600160a01b03168c6001600160a01b03168b7fc06d8b811960d44812b7b2c6eced2659c361e93a7b5efbada49e98e14030fee68a8c8a6040516117189392919061217c565b5060005b9c9b505050505050505050505050565b6000336001600160a01b038316146119715760405162461bcd60e51b815260040161047a90612408565b6040516370a0823160e01b81526001600160a01b038416906370a082319061199d9085906004016120fc565b60206040518083038186803b1580156119b557600080fd5b505afa1580156119c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ed919061201a565b6001541115611a0e5760405162461bcd60e51b815260040161047a90612392565b600254600154611a30916001600160a01b038681169233929190911690611a65565b7fb5cad7e871a7a81cb3b9d91e4d413e5ca2c07fedaa47840c9aed5d790580525c600154338560405161052d93929190612665565b611abd846323b872dd60e01b858585604051602401611a869392919061214d565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611ac3565b50505050565b6000611b18826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611b579092919063ffffffff16565b805190915015611b525780806020019051810190611b369190611e5d565b611b525760405162461bcd60e51b815260040161047a9061248d565b505050565b6060611b668484600085611b6e565b949350505050565b606082471015611b905760405162461bcd60e51b815260040161047a9061234c565b611b99856112ac565b611bb55760405162461bcd60e51b815260040161047a90612456565b600080866001600160a01b03168587604051611bd191906120e0565b60006040518083038185875af1925050503d8060008114611c0e576040519150601f19603f3d011682016040523d82523d6000602084013e611c13565b606091505b5091509150611c23828286611c2e565b979650505050505050565b60608315611c3d575081610365565b825115611c4d5782518084602001fd5b8160405162461bcd60e51b815260040161047a91906121a5565b828054611c73906126cf565b90600052602060002090601f016020900481019282611c955760008555611cdb565b82601f10611cae57805160ff1916838001178555611cdb565b82800160010185558215611cdb579182015b82811115611cdb578251825591602001919060010190611cc0565b50611ce7929150611d54565b5090565b604051806101400160405280611cff611d69565b8152602001611d0c611d69565b8152602001600015158152602001600081526020016060815260200160008019168152602001600081526020016000815260200160008152602001611d4f611d7b565b905290565b5b80821115611ce75760008155600101611d55565b60408051602081019091526000815290565b604051806040016040528060608152602001606081525090565b600082601f830112611da5578081fd5b813567ffffffffffffffff80821115611dc057611dc0612731565b604051601f8301601f191681016020018281118282101715611de457611de4612731565b604052828152848301602001861015611dfb578384fd5b82602086016020830137918201602001929092529392505050565b600060208284031215611e27578081fd5b813561036581612747565b60008060408385031215611e44578081fd5b8235611e4f81612747565b946020939093013593505050565b600060208284031215611e6e578081fd5b81516103658161275f565b60008060408385031215611e8b578182fd5b82359150602083013567ffffffffffffffff811115611ea8578182fd5b611eb485828601611d95565b9150509250929050565b60008060408385031215611ed0578182fd5b8235611edb81612747565b91506020830135611eeb81612747565b809150509250929050565b600080600080600080600060e0888a031215611f10578283fd5b8735611f1b81612747565b9650602088013595506040880135611f3281612747565b9450606088013567ffffffffffffffff80821115611f4e578485fd5b611f5a8b838c01611d95565b955060808a0135945060a08a0135915080821115611f76578384fd5b611f828b838c01611d95565b935060c08a0135915080821115611f97578283fd5b50611fa48a828b01611d95565b91505092959891949750929550565b600080600080600080600060e0888a031215611fcd578283fd5b8735611fd881612747565b96506020880135955060408801359450606088013567ffffffffffffffff80821115611f4e578485fd5b600060208284031215612013578081fd5b5035919050565b60006020828403121561202b578081fd5b5051919050565b600080600060608486031215612046578283fd5b8335925060208401356120588161275f565b929592945050506040919091013590565b15159052565b600081518084526120878160208601602086016126a3565b601f01601f19169290920160200192915050565b60008151604084526120b0604085018261206f565b9050602083015184820360208601526120c9828261206f565b95945050505050565b516001600160a01b03169052565b600082516120f28184602087016126a3565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b0393841681529183166020830152909116604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b901515815260200190565b600084825260606020830152612195606083018561206f565b9050826040830152949350505050565b600060208252610365602083018461206f565b6020808252601c908201527f4572726f72207768656e20506179205041494420536572766963657300000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526027908201527f56616c7565206f66205061796d656e7420617265206d6f7265207468616e207a60408201526665726f2028302960c81b606082015260800190565b6020808252602d908201527f446f6e2774206861766520616c6c6f77616e636520746f2070617920666f722060408201526c5041494420736572766963657360981b606082015260800190565b602080825260149082015273125b9d985b1a59081859dc99595b595b9d081a5960621b604082015260600190565b60208082526035908201527f45524332303a204572726f7220746f2053657420526563697069656e742077696040820152747468206120636f6e7472616374206164647265737360581b606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b60208082526021908201527f456e6f7567682042616c616e636520666f722074686973204f7065726174696f6040820152603760f91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602e908201527f53656e64657220696e206e6f74207468652053616d6520746f205369676e207460408201526d3432902a3930b739b0b1ba34b7b760911b606082015260800190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252602f908201527f45524332303a204572726f7220746f2053657420526563697069656e7420776960408201526e7468207a65726f206164647265737360881b606082015260800190565b60006020825261253a6020830184516120d2565b602083015161254c60408401826120d2565b50604083015161255f6060840182612069565b506060830151608083015260808301516101408060a085015261258661016085018361206f565b915060a085015160c085015260c085015160e085015260e0850151610100818187015280870151915050610120818187015280870151915050601f1985840301828601526125d4838261209b565b9695505050505050565b8a516001600160a01b0390811682528a511660208201528815156040820152606081018890526101406080820181905260009061261d8382018a61206f565b90508760a08401528660c08401528560e08401528461010084015282810361012084015261264b818561209b565b9d9c50505050505050505050505050565b90815260200190565b9283526001600160a01b03918216602084015216604082015260600190565b92835260208301919091526001600160a01b0316604082015260600190565b60005b838110156126be5781810151838201526020016126a6565b83811115611abd5750506000910152565b6002810460018216806126e357607f821691505b6020821081141561270457634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561272a57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461275c57600080fd5b50565b801515811461275c57600080fdfea26469706673582212207ae21c5c2ca6a09fecf0de406072129da8bef27f5f2beecfd20b358bcb8749c864736f6c63430008000033";