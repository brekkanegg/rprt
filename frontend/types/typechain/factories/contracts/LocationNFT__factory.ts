/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LocationNFT,
  LocationNFTInterface,
} from "../../contracts/LocationNFT";

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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600d81526020017f4c6f436174696f6e546f6b656e000000000000000000000000000000000000008152506040518060400160405280600381526020017f4c43540000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000285565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200029e57607f821691505b60208210811415620002b557620002b462000256565b5b50919050565b612c6f80620002cb6000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102a4578063c87b56dd146102c0578063d204c45e146102f0578063e985e9c51461030c578063f2fde38b1461033c5761010b565b8063715018a6146102425780638da5cb5b1461024c57806395d89b411461026a578063a22cb465146102885761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e257806370a08231146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611b41565b610358565b6040516101379190611b89565b60405180910390f35b61014861043a565b6040516101559190611c3d565b60405180910390f35b61017860048036038101906101739190611c95565b6104cc565b6040516101859190611d03565b60405180910390f35b6101a860048036038101906101a39190611d4a565b610512565b005b6101c460048036038101906101bf9190611d8a565b61062a565b005b6101e060048036038101906101db9190611d8a565b61068a565b005b6101fc60048036038101906101f79190611c95565b6106aa565b6040516102099190611d03565b60405180910390f35b61022c60048036038101906102279190611ddd565b61075c565b6040516102399190611e19565b60405180910390f35b61024a610814565b005b610254610828565b6040516102619190611d03565b60405180910390f35b610272610852565b60405161027f9190611c3d565b60405180910390f35b6102a2600480360381019061029d9190611e60565b6108e4565b005b6102be60048036038101906102b99190611fd5565b6108fa565b005b6102da60048036038101906102d59190611c95565b61095c565b6040516102e79190611c3d565b60405180910390f35b61030a600480360381019061030591906120f9565b610a6f565b005b61032660048036038101906103219190612155565b610aa0565b6040516103339190611b89565b60405180910390f35b61035660048036038101906103519190611ddd565b610b34565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061042357507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610433575061043282610bb8565b5b9050919050565b606060008054610449906121c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610475906121c4565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b5050505050905090565b60006104d782610c22565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061051d826106aa565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561058e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058590612268565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105ad610c6d565b73ffffffffffffffffffffffffffffffffffffffff1614806105dc57506105db816105d6610c6d565b610aa0565b5b61061b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610612906122fa565b60405180910390fd5b6106258383610c75565b505050565b61063b610635610c6d565b82610d2e565b61067a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106719061238c565b60405180910390fd5b610685838383610dc3565b505050565b6106a5838383604051806020016040528060008152506108fa565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610753576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074a906123f8565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156107cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107c49061248a565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61081c61102a565b61082660006110a8565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610861906121c4565b80601f016020809104026020016040519081016040528092919081815260200182805461088d906121c4565b80156108da5780601f106108af576101008083540402835291602001916108da565b820191906000526020600020905b8154815290600101906020018083116108bd57829003601f168201915b5050505050905090565b6108f66108ef610c6d565b838361116e565b5050565b61090b610905610c6d565b83610d2e565b61094a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109419061238c565b60405180910390fd5b610956848484846112db565b50505050565b606061096782610c22565b6000600660008481526020019081526020016000208054610987906121c4565b80601f01602080910402602001604051908101604052809291908181526020018280546109b3906121c4565b8015610a005780601f106109d557610100808354040283529160200191610a00565b820191906000526020600020905b8154815290600101906020018083116109e357829003601f168201915b505050505090506000610a11611337565b9050600081511415610a27578192505050610a6a565b600082511115610a5c578082604051602001610a449291906124e6565b60405160208183030381529060405292505050610a6a565b610a658461134e565b925050505b919050565b6000610a7b60086113b6565b9050610a8760086113c4565b610a9183826113da565b610a9b81836113f8565b505050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610b3c61102a565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba39061257c565b60405180910390fd5b610bb5816110a8565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610c2b8161146c565b610c6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c61906123f8565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610ce8836106aa565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d3a836106aa565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d7c5750610d7b8185610aa0565b5b80610dba57508373ffffffffffffffffffffffffffffffffffffffff16610da2846104cc565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610de3826106aa565b73ffffffffffffffffffffffffffffffffffffffff1614610e39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e309061260e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ea9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ea0906126a0565b60405180910390fd5b610eb48383836114d8565b610ebf600082610c75565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f0f91906126ef565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f669190612723565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110258383836114dd565b505050565b611032610c6d565b73ffffffffffffffffffffffffffffffffffffffff16611050610828565b73ffffffffffffffffffffffffffffffffffffffff16146110a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109d906127c5565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156111dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d490612831565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112ce9190611b89565b60405180910390a3505050565b6112e6848484610dc3565b6112f2848484846114e2565b611331576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611328906128c3565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606061135982610c22565b6000611363611337565b9050600081511161138357604051806020016040528060008152506113ae565b8061138d84611679565b60405160200161139e9291906124e6565b6040516020818303038152906040525b915050919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6113f48282604051806020016040528060008152506117da565b5050565b6114018261146c565b611440576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161143790612955565b60405180910390fd5b80600660008481526020019081526020016000209080519060200190611467929190611a32565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006115038473ffffffffffffffffffffffffffffffffffffffff16611835565b1561166c578373ffffffffffffffffffffffffffffffffffffffff1663150b7a0261152c610c6d565b8786866040518563ffffffff1660e01b815260040161154e94939291906129ca565b602060405180830381600087803b15801561156857600080fd5b505af192505050801561159957506040513d601f19601f820116820180604052508101906115969190612a2b565b60015b61161c573d80600081146115c9576040519150601f19603f3d011682016040523d82523d6000602084013e6115ce565b606091505b50600081511415611614576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160b906128c3565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611671565b600190505b949350505050565b606060008214156116c1576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506117d5565b600082905060005b600082146116f35780806116dc90612a58565b915050600a826116ec9190612ad0565b91506116c9565b60008167ffffffffffffffff81111561170f5761170e611eaa565b5b6040519080825280601f01601f1916602001820160405280156117415781602001600182028036833780820191505090505b5090505b600085146117ce5760018261175a91906126ef565b9150600a856117699190612b01565b60306117759190612723565b60f81b81838151811061178b5761178a612b32565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856117c79190612ad0565b9450611745565b8093505050505b919050565b6117e48383611858565b6117f160008484846114e2565b611830576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611827906128c3565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118bf90612bad565b60405180910390fd5b6118d18161146c565b15611911576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161190890612c19565b60405180910390fd5b61191d600083836114d8565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461196d9190612723565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611a2e600083836114dd565b5050565b828054611a3e906121c4565b90600052602060002090601f016020900481019282611a605760008555611aa7565b82601f10611a7957805160ff1916838001178555611aa7565b82800160010185558215611aa7579182015b82811115611aa6578251825591602001919060010190611a8b565b5b509050611ab49190611ab8565b5090565b5b80821115611ad1576000816000905550600101611ab9565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611b1e81611ae9565b8114611b2957600080fd5b50565b600081359050611b3b81611b15565b92915050565b600060208284031215611b5757611b56611adf565b5b6000611b6584828501611b2c565b91505092915050565b60008115159050919050565b611b8381611b6e565b82525050565b6000602082019050611b9e6000830184611b7a565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611bde578082015181840152602081019050611bc3565b83811115611bed576000848401525b50505050565b6000601f19601f8301169050919050565b6000611c0f82611ba4565b611c198185611baf565b9350611c29818560208601611bc0565b611c3281611bf3565b840191505092915050565b60006020820190508181036000830152611c578184611c04565b905092915050565b6000819050919050565b611c7281611c5f565b8114611c7d57600080fd5b50565b600081359050611c8f81611c69565b92915050565b600060208284031215611cab57611caa611adf565b5b6000611cb984828501611c80565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ced82611cc2565b9050919050565b611cfd81611ce2565b82525050565b6000602082019050611d186000830184611cf4565b92915050565b611d2781611ce2565b8114611d3257600080fd5b50565b600081359050611d4481611d1e565b92915050565b60008060408385031215611d6157611d60611adf565b5b6000611d6f85828601611d35565b9250506020611d8085828601611c80565b9150509250929050565b600080600060608486031215611da357611da2611adf565b5b6000611db186828701611d35565b9350506020611dc286828701611d35565b9250506040611dd386828701611c80565b9150509250925092565b600060208284031215611df357611df2611adf565b5b6000611e0184828501611d35565b91505092915050565b611e1381611c5f565b82525050565b6000602082019050611e2e6000830184611e0a565b92915050565b611e3d81611b6e565b8114611e4857600080fd5b50565b600081359050611e5a81611e34565b92915050565b60008060408385031215611e7757611e76611adf565b5b6000611e8585828601611d35565b9250506020611e9685828601611e4b565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ee282611bf3565b810181811067ffffffffffffffff82111715611f0157611f00611eaa565b5b80604052505050565b6000611f14611ad5565b9050611f208282611ed9565b919050565b600067ffffffffffffffff821115611f4057611f3f611eaa565b5b611f4982611bf3565b9050602081019050919050565b82818337600083830152505050565b6000611f78611f7384611f25565b611f0a565b905082815260208101848484011115611f9457611f93611ea5565b5b611f9f848285611f56565b509392505050565b600082601f830112611fbc57611fbb611ea0565b5b8135611fcc848260208601611f65565b91505092915050565b60008060008060808587031215611fef57611fee611adf565b5b6000611ffd87828801611d35565b945050602061200e87828801611d35565b935050604061201f87828801611c80565b925050606085013567ffffffffffffffff8111156120405761203f611ae4565b5b61204c87828801611fa7565b91505092959194509250565b600067ffffffffffffffff82111561207357612072611eaa565b5b61207c82611bf3565b9050602081019050919050565b600061209c61209784612058565b611f0a565b9050828152602081018484840111156120b8576120b7611ea5565b5b6120c3848285611f56565b509392505050565b600082601f8301126120e0576120df611ea0565b5b81356120f0848260208601612089565b91505092915050565b600080604083850312156121105761210f611adf565b5b600061211e85828601611d35565b925050602083013567ffffffffffffffff81111561213f5761213e611ae4565b5b61214b858286016120cb565b9150509250929050565b6000806040838503121561216c5761216b611adf565b5b600061217a85828601611d35565b925050602061218b85828601611d35565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806121dc57607f821691505b602082108114156121f0576121ef612195565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612252602183611baf565b915061225d826121f6565b604082019050919050565b6000602082019050818103600083015261228181612245565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b60006122e4603e83611baf565b91506122ef82612288565b604082019050919050565b60006020820190508181036000830152612313816122d7565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612376602e83611baf565b91506123818261231a565b604082019050919050565b600060208201905081810360008301526123a581612369565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b60006123e2601883611baf565b91506123ed826123ac565b602082019050919050565b60006020820190508181036000830152612411816123d5565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612474602983611baf565b915061247f82612418565b604082019050919050565b600060208201905081810360008301526124a381612467565b9050919050565b600081905092915050565b60006124c082611ba4565b6124ca81856124aa565b93506124da818560208601611bc0565b80840191505092915050565b60006124f282856124b5565b91506124fe82846124b5565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612566602683611baf565b91506125718261250a565b604082019050919050565b6000602082019050818103600083015261259581612559565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b60006125f8602583611baf565b91506126038261259c565b604082019050919050565b60006020820190508181036000830152612627816125eb565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061268a602483611baf565b91506126958261262e565b604082019050919050565b600060208201905081810360008301526126b98161267d565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006126fa82611c5f565b915061270583611c5f565b925082821015612718576127176126c0565b5b828203905092915050565b600061272e82611c5f565b915061273983611c5f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561276e5761276d6126c0565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b60006127af602083611baf565b91506127ba82612779565b602082019050919050565b600060208201905081810360008301526127de816127a2565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b600061281b601983611baf565b9150612826826127e5565b602082019050919050565b6000602082019050818103600083015261284a8161280e565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b60006128ad603283611baf565b91506128b882612851565b604082019050919050565b600060208201905081810360008301526128dc816128a0565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b600061293f602e83611baf565b915061294a826128e3565b604082019050919050565b6000602082019050818103600083015261296e81612932565b9050919050565b600081519050919050565b600082825260208201905092915050565b600061299c82612975565b6129a68185612980565b93506129b6818560208601611bc0565b6129bf81611bf3565b840191505092915050565b60006080820190506129df6000830187611cf4565b6129ec6020830186611cf4565b6129f96040830185611e0a565b8181036060830152612a0b8184612991565b905095945050505050565b600081519050612a2581611b15565b92915050565b600060208284031215612a4157612a40611adf565b5b6000612a4f84828501612a16565b91505092915050565b6000612a6382611c5f565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612a9657612a956126c0565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000612adb82611c5f565b9150612ae683611c5f565b925082612af657612af5612aa1565b5b828204905092915050565b6000612b0c82611c5f565b9150612b1783611c5f565b925082612b2757612b26612aa1565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612b97602083611baf565b9150612ba282612b61565b602082019050919050565b60006020820190508181036000830152612bc681612b8a565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612c03601c83611baf565b9150612c0e82612bcd565b602082019050919050565b60006020820190508181036000830152612c3281612bf6565b905091905056fea264697066735822122084e49a83e67c3e302382d303a94597643eb9a81c4920ff719251760dabf653d264736f6c63430008090033";

type LocationNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LocationNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LocationNFT__factory extends ContractFactory {
  constructor(...args: LocationNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LocationNFT> {
    return super.deploy(overrides || {}) as Promise<LocationNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LocationNFT {
    return super.attach(address) as LocationNFT;
  }
  override connect(signer: Signer): LocationNFT__factory {
    return super.connect(signer) as LocationNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LocationNFTInterface {
    return new utils.Interface(_abi) as LocationNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LocationNFT {
    return new Contract(address, _abi, signerOrProvider) as LocationNFT;
  }
}
