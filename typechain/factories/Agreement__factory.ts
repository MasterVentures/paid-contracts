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
        internalType: "uint32",
        name: "agreementId",
        type: "uint32",
      },
      {
        internalType: "uint8",
        name: "amountSigner",
        type: "uint8",
      },
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "addWhitelisted",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "agreements",
    outputs: [
      {
        internalType: "bool",
        name: "escrowed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "peersSigned",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "status",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "amountSigner",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "created_at",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "updated_at",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "validUntilSign",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "validUntilSA",
        type: "uint32",
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
        name: "createSigner",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "agreementForm",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "agreementFormTemplateId",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "string",
            name: "multiaddressReference",
            type: "string",
          },
          {
            internalType: "bytes32",
            name: "digest",
            type: "bytes32",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "validUntilSign",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "validUntilSA",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "amountSigner",
        type: "uint32",
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
        internalType: "bytes32",
        name: "agreementForm",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
    ],
    name: "create",
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
        internalType: "uint32",
        name: "agreementId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "string",
        name: "multiaddrReference",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "agreementForm",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
    ],
    name: "declined",
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
        name: "_id",
        type: "uint256",
      },
    ],
    name: "hasValidSA",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "hasValidToSign",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_agreementId",
        type: "uint32",
      },
    ],
    name: "iscompleted",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "agreementId",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "validUntilSign",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "validUntilSA",
        type: "uint32",
      },
      {
        internalType: "string",
        name: "multiaddrReference",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "agreementForm",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
    ],
    name: "pendingSign",
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
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "whiteListed",
    outputs: [
      {
        internalType: "bool",
        name: "whiteListed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "signed",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "creator",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "AgreementId",
        type: "uint32",
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
        name: "peerSigner",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060006200001e6200006e565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000072565b3390565b61338080620000826000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806379e24dfd116100a2578063bd14de9611610071578063bd14de961461020b578063c8d519e114610236578063d5f50a2314610249578063eb3add661461025c578063f2fde38b1461026f5761010b565b806379e24dfd146101d55780638da5cb5b146101e85780639f585a7c146101f0578063bb328a7d146102035761010b565b80633bbed4a0116100de5780633bbed4a0146101745780634642fdbd146101875780635bb51765146101ab578063715018a6146101cb5761010b565b806301b741de1461011057806315b95b54146101395780631b88094d1461014c5780632fffa19614610161575b600080fd5b61012361011e36600461290c565b610282565b6040516101309190612ba5565b60405180910390f35b610123610147366004612884565b610330565b61015461035a565b6040516101309190612b30565b61012361016f3660046128dc565b6103b4565b610123610182366004612720565b61045f565b61019a610195366004612994565b61054c565b604051610130959493929190612bb0565b6101be6101b9366004612926565b6105b0565b6040516101309190613202565b6101d36108fe565b005b6101be6101e336600461273a565b610987565b610154610e49565b6101be6101fe3660046127cb565b610e58565b6101be610f7e565b61021e6102193660046128dc565b610f84565b6040516101309c9b9a99989796959493929190612be5565b6101236102443660046128dc565b6110b9565b6101236102573660046129d6565b6110de565b61012361026a3660046128dc565b6112b3565b6101d361027d366004612720565b6112fc565b63ffffffff808216600090815260036020526040812080546001909101549192600160301b90910416906001600160a01b0316825b8260ff168160ff1610156103235763ffffffff851660009081526004602090815260408083206001600160a01b0386168452825280832060ff8086168552925290912054610100900416610311576000935050505061032b565b8061031b816132fe565b9150506102b7565b506001925050505b919050565b60008281526005602090815260408220835161034e928501906125d4565b50600190505b92915050565b60006103646113bc565b6001600160a01b0316610375610e49565b6001600160a01b0316146103a45760405162461bcd60e51b815260040161039b90612fe4565b60405180910390fd5b506002546001600160a01b031690565b60006103be6113bc565b6001600160a01b03166103cf610e49565b6001600160a01b0316146103f55760405162461bcd60e51b815260040161039b90612fe4565b816104125760405162461bcd60e51b815260040161039b906130be565b60018054908390556040517ff7a493f00ad4254fe0642ea1181467da775bacea6e4074c44f384fcfbfdb09439061044e9083908690339061322a565b60405180910390a150600192915050565b60006104696113bc565b6001600160a01b031661047a610e49565b6001600160a01b0316146104a05760405162461bcd60e51b815260040161039b90612fe4565b6001600160a01b0382166104c65760405162461bcd60e51b815260040161039b90613156565b6104d8826001600160a01b03166113c0565b156104f55760405162461bcd60e51b815260040161039b90612e9a565b600280546001600160a01b038481166001600160a01b031983161792839055604051918116927f2733673eb7191ab77c4772afbf55984a872b50c4c30fd2e986ed37507c1fbf669261044e92859216903390612b5e565b6004602090815260009384526040808520825292845282842081529083529181902080548251938401909252600101546001600160a01b0316825260ff808216926101008304821692620100008104909216916301000000900463ffffffff169085565b63ffffffff858116600090815260036020526040812054909162010000909104166004146105f05760405162461bcd60e51b815260040161039b90612e63565b63ffffffff868116600090815260036020819052604090912054620100009004909116146106305760405162461bcd60e51b815260040161039b90612f35565b63ffffffff8616600090815260036020526040902054610100900460ff166106c05763ffffffff868116600090815260036020526040902054428216600160901b909104909116106106bb5763ffffffff861660009081526003602052604090819020805465ffffffff00001916620400001790555162461bcd60e51b815261039b90600401612d01565b6106d8565b60405162461bcd60e51b815260040161039b90612cb9565b63ffffffff8087166000908152600360208181526040808420815161018081018352815460ff80821615158352610100808304909116151583870152620100008204891683860152600160301b820489166060840152600160501b820489166080840152600160701b8204891660a0840152600160901b8204891660c0840152600160b01b90910490971660e08201528251938401835260018201546001600160a01b031684529586019290925260028201546101208601529181015461014085015281518083019092526004810180549394939192610160850192909190829082906107c49061329f565b80601f01602080910402602001604051908101604052809291908181526020018280546107f09061329f565b801561083d5780601f106108125761010080835404028352916020019161083d565b820191906000526020600020905b81548152906001019060200180831161082057829003601f168201915b50505091835250506001919091015460209182015291526040805160e0808201835263ffffffff8d811683526003838601526060808801518216848601526080808901518316828601524283169085015260c080890151831660a08601529288015190911691830191909152825190810183526001600160a01b038c8116825261010087015151169381019390935233918301919091526101408401519394506108ed93909250889088886113c6565b63ffffffff16979650505050505050565b6109066113bc565b6001600160a01b0316610917610e49565b6001600160a01b03161461093d5760405162461bcd60e51b815260040161039b90612fe4565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b63ffffffff8087166000908152600360208181526040808420815161018081018352815460ff80821615158352610100808304909116151583870152620100008204891683860152600160301b820489166060840152600160501b820489166080840152600160701b8204891660a0840152600160901b8204891660c0840152600160b01b90910490971660e08201528251938401835260018201546001600160a01b03168452958601929092526002820154610120860152918101546101408501528151808301909252600481018054939485949093610160850192909182908290610a739061329f565b80601f0160208091040260200160405190810160405280929190818152602001828054610a9f9061329f565b8015610aec5780601f10610ac157610100808354040283529160200191610aec565b820191906000526020600020905b815481529060010190602001808311610acf57829003601f168201915b505050918352505060019190910154602090910152905250604081015190915063ffffffff16600414610b315760405162461bcd60e51b815260040161039b90612e63565b604081015163ffffffff16600314610b5b5760405162461bcd60e51b815260040161039b90612f35565b80602001516106c0574263ffffffff168763ffffffff1610610b9557600460408281018290525162461bcd60e51b815261039b9101612d01565b604051636eb1769f60e11b81526000906001600160a01b038b169063dd62ed3e90610bc69033903090600401612b44565b60206040518083038186803b158015610bde57600080fd5b505afa158015610bf2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1691906128f4565b9050600154811015610c3a5760405162461bcd60e51b815260040161039b90612e16565b6000610c468a3361223a565b63ffffffff8b16600090815260036020908152604080832060010154600483528184206001600160a01b0390911680855290835281842060ff80871686529352922054929350909116610cab5760405162461bcd60e51b815260040161039b90613019565b63ffffffff8b1660009081526004602090815260408083206001600160a01b0385168452825280832060ff808716855292529091205461010090041615610d045760405162461bcd60e51b815260040161039b90612f6c565b610d0d8b610282565b15610e1b576040805160e0810190915263ffffffff8c168152610e0a906020810160025b63ffffffff1663ffffffff168152602001866060015163ffffffff1663ffffffff168152602001866080015163ffffffff1663ffffffff1681526020014263ffffffff1663ffffffff1681526020018c63ffffffff1663ffffffff1681526020018b63ffffffff1663ffffffff1681525060405180606001604052808f6001600160a01b03166001600160a01b03168152602001876101000151600001516001600160a01b03166001600160a01b03168152602001336001600160a01b03166001600160a01b03168152508a8761014001518b8b6113c6565b63ffffffff16945050505050610e3e565b6040805160e0810190915263ffffffff8c168152610e0a90602081016001610d31565b979650505050505050565b6000546001600160a01b031690565b6000600154896001600160a01b031663dd62ed3e33306040518363ffffffff1660e01b8152600401610e8b929190612b44565b60206040518083038186803b158015610ea357600080fd5b505afa158015610eb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edb91906128f4565b1015610ef95760405162461bcd60e51b815260040161039b90612e16565b6040805160e0810182526000808252602080830182905263ffffffff8a811684860152428116606080860182905260808601919091528d821660a0860152908c1660c0850152845190810185526001600160a01b038e168152339181019190915292830152610f6b91878787876113c6565b63ffffffff169998505050505050505050565b60015490565b60036020818152600092835260409283902080548451928301855260018201546001600160a01b03168352600282015493820154855180870190965260048301805460ff8085169861010086049091169763ffffffff620100008704811698600160301b8804821698600160501b8904831698600160701b8104841698600160901b8204851698600160b01b9092049094169692959192829082906110289061329f565b80601f01602080910402602001604051908101604052809291908181526020018280546110549061329f565b80156110a15780601f10611076576101008083540402835291602001916110a1565b820191906000526020600020905b81548152906001019060200180831161108457829003601f168201915b5050505050815260200160018201548152505090508c565b60009081526003602052604090205463ffffffff428116600160b01b90920416101590565b63ffffffff838116600090815260036020526040812054909162010000909104161561111c5760405162461bcd60e51b815260040161039b90613087565b8260ff1682511461113f5760405162461bcd60e51b815260040161039b906131a5565b63ffffffff84166000908152600360205260408120600101546001600160a01b0316905b8460ff168160ff1610156112a5576000848260ff168151811061119657634e487b7160e01b600052603260045260246000fd5b60200260200101519050826001600160a01b0316816001600160a01b031614611292576040805160a08101825260018082526000602080840182815284860183815263ffffffff8e81166060880181815289518087018b526001600160a01b038c8116825260808b01918252928852600487528a88208e8416895287528a882060ff8e168952909652989095209651875493519251985160ff199094169015151761ff001916610100921515929092029190911762ff0000191662010000971515979097029690961766ffffffff000000191663010000009190961602949094178355925151910180546001600160a01b031916919092161790555b508061129d816132fe565b915050611163565b5060019150505b9392505050565b600081815260036020526040812054610100900460ff16156112d75750600161032b565b5060009081526003602052604090205463ffffffff428116600160901b909204161190565b6113046113bc565b6001600160a01b0316611315610e49565b6001600160a01b03161461133b5760405162461bcd60e51b815260040161039b90612fe4565b6001600160a01b0381166113615760405162461bcd60e51b815260040161039b90612d84565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b3b151590565b6000806113e18860016020020151886002602002015161223a565b905060ff81161580156113fd5750602088015163ffffffff1615155b1561141a5760405162461bcd60e51b815260040161039b90612dca565b602088015163ffffffff1661196c5760028054600160a01b900463ffffffff16906014611446836132da565b82546101009290920a63ffffffff818102199093169183160217909155604080516101808101825260008082526020808301919091528c0151831681830152908b01519091166060820152905060808101896003602002015163ffffffff168152602001896004600781106114cb57634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff168152602001896005600781106114fc57634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff1681526020018960066007811061152d57634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff16815260200160405180602001604052808a60016003811061156957634e487b7160e01b600052603260045260246000fd5b60200201516001600160a01b0316815250815260200186815260200185815260200160405180604001604052808981526020018681525081525060036000600260149054906101000a900463ffffffff1663ffffffff16815260200190815260200160002060008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548163ffffffff021916908363ffffffff16021790555060608201518160000160066101000a81548163ffffffff021916908363ffffffff160217905550608082015181600001600a6101000a81548163ffffffff021916908363ffffffff16021790555060a082015181600001600e6101000a81548163ffffffff021916908363ffffffff16021790555060c08201518160000160126101000a81548163ffffffff021916908363ffffffff16021790555060e08201518160000160166101000a81548163ffffffff021916908363ffffffff1602179055506101008201518160010160008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555050506101208201518160020155610140820151816003015561016082015181600401600082015181600001908051906020019061176d9291906125d4565b506020918201516001918201556040805160a081018252828152808401839052808201839052600254600160a01b900463ffffffff1660608201528151938401909152935060808401925081908b90602090810291909101516001600160a01b03169091529152600254600160a01b900463ffffffff16600090815260049091526040812090896001602090810291909101516001600160a01b03908116835282820193909352604091820160009081208180528252828120855181549387015194870151606088015163ffffffff1663010000000266ffffffff00000019911515620100000262ff0000199715156101000261ff001994151560ff199098169790971793909316959095179590951617939093169190911782556080909301515160019091018054919092166001600160a01b03199091161790556118c290889060200201518860015b60200201516122eb565b6118de5760405162461bcd60e51b815260040161039b90612d4d565b86600260200201516001600160a01b031687600160200201516002546001600160a01b0390911690600160a01b900463ffffffff167fc06d8b811960d44812b7b2c6eced2659c361e93a7b5efbada49e98e14030fee6878a8d6001602002015160405161194d93929190612c77565b60405180910390a45050600254600160a01b900463ffffffff16612230565b602088015163ffffffff1660011415611e54576040805161018081018252600080825260208201529081018960015b602002015163ffffffff168152602001896002600781106119cc57634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff168152602001896003600781106119fd57634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff16815260200189600460078110611a2e57634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff16815260200189600560078110611a5f57634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff16815260200189600660078110611a9057634e487b7160e01b600052603260045260246000fd5b602002015163ffffffff16815260200160405180602001604052808a600160038110611acc57634e487b7160e01b600052603260045260246000fd5b60200201516001600160a01b03168152508152602001868152602001858152602001604051806040016040528089815260200186815250815250600360008a600060078110611b2b57634e487b7160e01b600052603260045260246000fd5b6020908102919091015163ffffffff90811683528282019390935260409182016000208451815486840151948701516060880151608089015160a08a015160c08b015160e08c015160ff199096169615159690961761ff0019166101009915158a021765ffffffff0000191662010000948b16949094029390931769ffffffff0000000000001916600160301b928a16929092029190911763ffffffff60501b1916600160501b918916919091021763ffffffff60701b1916600160701b918816919091021763ffffffff60901b1916600160901b928716929092029190911763ffffffff60b01b1916600160b01b919095160293909317835590830151516001830180546001600160a01b0319166001600160a01b03909216919091179055610120830151600283015561014083015160038301556101608301518051805191926004850192611c7f92849201906125d4565b506020918201516001918201556040805160a081018252828152808401929092526000828201528c5163ffffffff166060830152805192830190529250608083019150808a6002602090810291909101516001600160a01b03169091529152895163ffffffff16600090815260049091526040812090896001602090810291909101516001600160a01b039081168352828201939093526040918201600090812060ff871682528252829020845181549286015193860151606087015163ffffffff1663010000000266ffffffff00000019911515620100000262ff0000199615156101000261ff001994151560ff199097169690961793909316949094179490941617929092161781556080909201515160019092018054929091166001600160a01b03199092169190911790558651611dbc908860026118b8565b611dd85760405162461bcd60e51b815260040161039b90612d4d565b8660025b60200201516001600160a01b031687600160200201516001600160a01b0316896000602002015163ffffffff167fc06d8b811960d44812b7b2c6eced2659c361e93a7b5efbada49e98e14030fee6878a8d60016020020151604051611e4393929190612c77565b60405180910390a450508551612230565b602088015163ffffffff1660021415611e8b5760408051610180810182526000815260016020820181905290918201908a9061199b565b602088015163ffffffff166003141561222a5760408051610180810182526000815260016020808301919091528a015163ffffffff90811682840152918a015182166060808301919091528a015182166080808301919091528a0151821660a0808301919091528a015190911660c082015260e08101896006602002015163ffffffff16815260200160405180602001604052808a600160038110611f4057634e487b7160e01b600052603260045260246000fd5b60200201516001600160a01b03168152508152602001868152602001858152602001604051806040016040528089815260200186815250815250600360008a600060078110611f9f57634e487b7160e01b600052603260045260246000fd5b6020908102919091015163ffffffff90811683528282019390935260409182016000208451815486840151948701516060880151608089015160a08a015160c08b015160e08c015160ff199096169615159690961761ff0019166101009915158a021765ffffffff0000191662010000948b16949094029390931769ffffffff0000000000001916600160301b928a16929092029190911763ffffffff60501b1916600160501b918916919091021763ffffffff60701b1916600160701b918816919091021763ffffffff60901b1916600160901b928716929092029190911763ffffffff60b01b1916600160b01b919095160293909317835590830151516001830180546001600160a01b0319166001600160a01b039092169190911790556101208301516002830155610140830151600383015561016083015180518051919260048501926120f392849201906125d4565b506020918201516001918201556040805160a081018252828152808401929092526000828201528c5163ffffffff166060830152805192830190529250608083019150808a6002602090810291909101516001600160a01b03169091529152895163ffffffff16600090815260049091526040812090896001602090810291909101516001600160a01b039081168352828201939093526040918201600090812060ff871682528252829020845181549286015193860151606087015163ffffffff1663010000000266ffffffff00000019911515620100000262ff0000199615156101000261ff001994151560ff199097169690961793909316949094179490941617929092161781556080909201515160019092018054929091166001600160a01b0319909216919091179055866002611ddc565b60009150505b9695505050505050565b63ffffffff808316600090815260036020526040812080546001909101549192600160301b90910416906001600160a01b0316825b8260ff168160ff1610156122df5763ffffffff861660009081526004602090815260408083206001600160a01b03808716855290835281842060ff8616855290925290912060010154868216911614156122cd579250610354915050565b806122d7816132fe565b91505061226f565b50600095945050505050565b6040516370a0823160e01b81526000906001600160a01b038416906370a082319061231a908590600401612b30565b60206040518083038186803b15801561233257600080fd5b505afa158015612346573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236a91906128f4565b600154111561238b5760405162461bcd60e51b815260040161039b90612fa3565b6002546001546123ad916001600160a01b0386811692869291909116906123e2565b7fb5cad7e871a7a81cb3b9d91e4d413e5ca2c07fedaa47840c9aed5d790580525c600154338560405161044e9392919061320b565b61243a846323b872dd60e01b85858560405160240161240393929190612b81565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612440565b50505050565b6000612495826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166124d49092919063ffffffff16565b8051909150156124cf57808060200190518101906124b39190612864565b6124cf5760405162461bcd60e51b815260040161039b9061310c565b505050565b60606124e384846000856124eb565b949350505050565b60608247101561250d5760405162461bcd60e51b815260040161039b90612eef565b612516856113c0565b6125325760405162461bcd60e51b815260040161039b90613050565b600080866001600160a01b0316858760405161254e9190612b14565b60006040518083038185875af1925050503d806000811461258b576040519150601f19603f3d011682016040523d82523d6000602084013e612590565b606091505b5091509150610e3e828286606083156125aa5750816112ac565b8251156125ba5782518084602001fd5b8160405162461bcd60e51b815260040161039b9190612ca6565b8280546125e09061329f565b90600052602060002090601f0160209004810192826126025760008555612648565b82601f1061261b57805160ff1916838001178555612648565b82800160010185558215612648579182015b8281111561264857825182559160200191906001019061262d565b50612654929150612658565b5090565b5b808211156126545760008155600101612659565b600067ffffffffffffffff83111561268757612687613334565b61269a601f8401601f1916602001613249565b90508281528383830111156126ae57600080fd5b828260208301376000602084830101529392505050565b80356001600160a01b038116811461032b57600080fd5b600082601f8301126126ec578081fd5b6112ac8383356020850161266d565b803563ffffffff8116811461032b57600080fd5b803560ff8116811461032b57600080fd5b600060208284031215612731578081fd5b6112ac826126c5565b600080600080600080600060e0888a031215612754578283fd5b61275d886126c5565b965061276b602089016126fb565b9550612779604089016126fb565b9450612787606089016126fb565b9350608088013567ffffffffffffffff8111156127a2578384fd5b6127ae8a828b016126dc565b93505060a0880135915060c0880135905092959891949750929550565b600080600080600080600080610100898b0312156127e7578081fd5b6127f0896126c5565b97506127fe60208a016126fb565b965061280c60408a016126fb565b955061281a60608a016126fb565b9450608089013567ffffffffffffffff811115612835578182fd5b6128418b828c016126dc565b989b979a50959894979660a0860135965060c08601359560e00135945092505050565b600060208284031215612875578081fd5b815180151581146112ac578182fd5b60008060408385031215612896578182fd5b82359150602083013567ffffffffffffffff8111156128b3578182fd5b8301601f810185136128c3578182fd5b6128d28582356020840161266d565b9150509250929050565b6000602082840312156128ed578081fd5b5035919050565b600060208284031215612905578081fd5b5051919050565b60006020828403121561291d578081fd5b6112ac826126fb565b600080600080600060a0868803121561293d578081fd5b612946866126fb565b9450612954602087016126c5565b9350604086013567ffffffffffffffff81111561296f578182fd5b61297b888289016126dc565b9598949750949560608101359550608001359392505050565b6000806000606084860312156129a8578081fd5b6129b1846126fb565b92506129bf602085016126c5565b91506129cd6040850161270f565b90509250925092565b6000806000606084860312156129ea578081fd5b6129f3846126fb565b92506020612a0281860161270f565b9250604085013567ffffffffffffffff80821115612a1e578384fd5b818701915087601f830112612a31578384fd5b813581811115612a4357612a43613334565b8381029150612a53848301613249565b8181528481019084860184860187018c1015612a6d578788fd5b8795505b83861015612a9657612a82816126c5565b835260019590950194918601918601612a71565b508096505050505050509250925092565b60008151808452612abf816020860160208601613273565b601f01601f19169290920160200192915050565b6000815160408452612ae86040850182612aa7565b602093840151949093019390935250919050565b516001600160a01b03169052565b63ffffffff169052565b60008251612b26818460208701613273565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b0393841681529183166020830152909116604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b901515815260200190565b94151585529215156020850152901515604084015263ffffffff166060830152516001600160a01b0316608082015260a00190565b8c151581528b1515602082015263ffffffff8b811660408301528a811660608301528981166080830152881660a08201526000610180612c2860c084018a612b0a565b612c3560e0840189612b0a565b612c43610100840188612afc565b856101208401528461014084015280610160840152612c6481840185612ad3565b9f9e505050505050505050505050505050565b600084825260606020830152612c906060830185612aa7565b905063ffffffff83166040830152949350505050565b6000602082526112ac6020830184612aa7565b60208082526028908201527f416c6c205369676e657220616e64205369676e656420746820536d617274204160408201526719dc99595b595b9d60c21b606082015260800190565b6020808252602c908201527f54696d6520686173206578706972656420746f207369676e2074686520536d6160408201526b1c9d081059dc99595b595b9d60a21b606082015260800190565b6020808252601c908201527f4572726f72207768656e20506179205041494420536572766963657300000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252602c908201527f4d7573742062652057686974656c697374656420616c6c20506565722053696760408201526b6e6572206265666f7265212160a01b606082015260800190565b6020808252602d908201527f446f6e2774206861766520616c6c6f77616e636520746f2070617920666f722060408201526c5041494420736572766963657360981b606082015260800190565b6020808252601c908201527f536d6172742041677265656d656e747320686173204578706972656400000000604082015260600190565b60208082526035908201527f45524332303a204572726f7220746f2053657420526563697069656e742077696040820152747468206120636f6e7472616374206164647265737360581b606082015260800190565b60208082526026908201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6040820152651c8818d85b1b60d21b606082015260800190565b6020808252601d908201527f536d6172742041677265656d656e747320686173204465636c696e6564000000604082015260600190565b6020808252601d908201527f5369676e2077617320657865637574652c206279205369676e65722121000000604082015260600190565b60208082526021908201527f456e6f7567682042616c616e636520666f722074686973204f7065726174696f6040820152603760f91b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526018908201527f5369676e657220446f6e27742057686974656c69737465640000000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526017908201527f43616e2774206164642050656572205369676e65722773000000000000000000604082015260600190565b6020808252602e908201527f45524332303a2056616c7565206f66205061796d656e7420617265206d6f726560408201526d207468616e207a65726f2028302960901b606082015260800190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252602f908201527f45524332303a204572726f7220746f2053657420526563697069656e7420776960408201526e7468207a65726f206164647265737360881b606082015260800190565b60208082526038908201527f546865206e756d626572206f66207369676e696e672070656572206973206e6f60408201527f74207468652073616d65204172726179206c656e677468200000000000000000606082015260800190565b90815260200190565b9283526001600160a01b03918216602084015216604082015260600190565b92835260208301919091526001600160a01b0316604082015260600190565b60405181810167ffffffffffffffff8111828210171561326b5761326b613334565b604052919050565b60005b8381101561328e578181015183820152602001613276565b8381111561243a5750506000910152565b6002810460018216806132b357607f821691505b602082108114156132d457634e487b7160e01b600052602260045260246000fd5b50919050565b600063ffffffff808316818114156132f4576132f461331e565b6001019392505050565b600060ff821660ff8114156133155761331561331e565b60010192915050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212202c830a6ca638a4818b4e70b27095e3b557dba860fee5e7cb9b8468af4ec1c64164736f6c63430008000033";
