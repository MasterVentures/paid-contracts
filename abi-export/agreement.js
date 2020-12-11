module.exports = {
  VERSION: "1.0.0",
  AgreementContract: {
    raw: {
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
          signature: "constructor",
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
          name: "AgreementPartyCreated",
          type: "event",
          signature:
            "0x572166c66a909216d53b7f1ecb3a81fa1d3fd98454e886f4751cda1661a8d5ee",
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
          signature:
            "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "bytes32", name: "", type: "bytes32" },
          ],
          name: "agreementForms",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "view",
          type: "function",
          constant: true,
          signature: "0x14d1cdb3",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "agreements",
          outputs: [
            {
              components: [
                { internalType: "address", name: "signatory", type: "address" },
              ],
              internalType: "struct AgreementModels.Party",
              name: "fromSigner",
              type: "tuple",
            },
            {
              components: [
                { internalType: "address", name: "signatory", type: "address" },
              ],
              internalType: "struct AgreementModels.Party",
              name: "toSigner",
              type: "tuple",
            },
            { internalType: "bool", name: "escrowed", type: "bool" },
            { internalType: "uint256", name: "validUntil", type: "uint256" },
            { internalType: "bytes", name: "agreementForm", type: "bytes" },
            { internalType: "uint256", name: "status", type: "uint256" },
            {
              components: [
                {
                  internalType: "string",
                  name: "multiaddressReference",
                  type: "string",
                },
                { internalType: "bytes", name: "digest", type: "bytes" },
              ],
              internalType: "struct AgreementModels.Content",
              name: "file",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
          constant: true,
          signature: "0xbd14de96",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
          constant: true,
          signature: "0x8da5cb5b",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
          signature: "0x715018a6",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
          signature: "0xf2fde38b",
        },
        {
          inputs: [
            { internalType: "uint256", name: "validUntil", type: "uint256" },
            { internalType: "address", name: "counterparty", type: "address" },
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
            { internalType: "bytes", name: "agreementForm", type: "bytes" },
            { internalType: "bytes", name: "digest", type: "bytes" },
          ],
          name: "partyCreate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
          signature: "0x3514a201",
        },
        {
          inputs: [
            { internalType: "uint256", name: "agreementId", type: "uint256" },
            { internalType: "uint256", name: "validUntil", type: "uint256" },
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
            { internalType: "bytes", name: "agreementForm", type: "bytes" },
            { internalType: "bytes", name: "digest", type: "bytes" },
          ],
          name: "counterPartiesSign",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
          signature: "0x4b0f650f",
        },
        {
          inputs: [
            { internalType: "bytes32", name: "id", type: "bytes32" },
            { internalType: "bytes", name: "content", type: "bytes" },
          ],
          name: "setAgreementTemplate",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
          signature: "0x15b95b54",
        },
        {
          inputs: [
            { internalType: "uint256", name: "agreementId", type: "uint256" },
            { internalType: "bool", name: "isCounterparty", type: "bool" },
            { internalType: "bytes32", name: "formId", type: "bytes32" },
          ],
          name: "getFormById",
          outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
          stateMutability: "nonpayable",
          type: "function",
          signature: "0x139b9765",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
          name: "has",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
          constant: true,
          signature: "0xcccf7a8e",
        },
        {
          inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
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
                { internalType: "bool", name: "escrowed", type: "bool" },
                {
                  internalType: "uint256",
                  name: "validUntil",
                  type: "uint256",
                },
                { internalType: "bytes", name: "agreementForm", type: "bytes" },
                { internalType: "uint256", name: "status", type: "uint256" },
                {
                  components: [
                    {
                      internalType: "string",
                      name: "multiaddressReference",
                      type: "string",
                    },
                    { internalType: "bytes", name: "digest", type: "bytes" },
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
          stateMutability: "nonpayable",
          type: "function",
          signature: "0x9507d39a",
        },
      ],
    },
    address: {
      "rinkeby-fork": "0x47f7b428A47111D64dA62a89365376301a29B057",
      rinkeby: "0x47f7b428A47111D64dA62a89365376301a29B057",
    },
  },
};
