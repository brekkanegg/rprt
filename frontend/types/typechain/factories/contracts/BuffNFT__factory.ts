/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { BuffNFT, BuffNFTInterface } from "../../contracts/BuffNFT";

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
        internalType: "address[]",
        name: "wAddresses",
        type: "address[]",
      },
    ],
    name: "airdropNFTs",
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
        name: "",
        type: "address",
      },
    ],
    name: "isAllowlistAddress",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020017f42754666546f6b656e00000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f424654000000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b612d1d80620005096000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063715018a6116100a2578063b88d4fde11610071578063b88d4fde146102cb578063c87b56dd146102e7578063cc76fd9214610317578063e985e9c514610347578063f2fde38b1461037757610116565b8063715018a6146102695780638da5cb5b1461027357806395d89b4114610291578063a22cb465146102af57610116565b806323b872dd116100e957806323b872dd146101b557806342842e0e146101d15780634909be91146101ed5780636352211e1461020957806370a082311461023957610116565b806301ffc9a71461011b57806306fdde031461014b578063081812fc14610169578063095ea7b314610199575b600080fd5b61013560048036038101906101309190611d60565b610393565b6040516101429190611da8565b60405180910390f35b610153610475565b6040516101609190611e53565b60405180910390f35b610183600480360381019061017e9190611eab565b610507565b6040516101909190611f19565b60405180910390f35b6101b360048036038101906101ae9190611f60565b61054d565b005b6101cf60048036038101906101ca9190611fa0565b610664565b005b6101eb60048036038101906101e69190611fa0565b6106c4565b005b61020760048036038101906102029190612058565b6106e4565b005b610223600480360381019061021e9190611eab565b610742565b6040516102309190611f19565b60405180910390f35b610253600480360381019061024e91906120a5565b6107c8565b60405161026091906120e1565b60405180910390f35b61027161087f565b005b61027b610893565b6040516102889190611f19565b60405180910390f35b6102996108bd565b6040516102a69190611e53565b60405180910390f35b6102c960048036038101906102c49190612128565b61094f565b005b6102e560048036038101906102e09190612298565b610965565b005b61030160048036038101906102fc9190611eab565b6109c7565b60405161030e9190611e53565b60405180910390f35b610331600480360381019061032c91906120a5565b610ad9565b60405161033e9190611da8565b60405180910390f35b610361600480360381019061035c919061231b565b610af9565b60405161036e9190611da8565b60405180910390f35b610391600480360381019061038c91906120a5565b610b8d565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061045e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061046e575061046d82610c10565b5b9050919050565b6060600080546104849061238a565b80601f01602080910402602001604051908101604052809291908181526020018280546104b09061238a565b80156104fd5780601f106104d2576101008083540402835291602001916104fd565b820191906000526020600020905b8154815290600101906020018083116104e057829003601f168201915b5050505050905090565b600061051282610c7a565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061055882610742565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036105c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bf9061242d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166105e7610cc5565b73ffffffffffffffffffffffffffffffffffffffff161480610616575061061581610610610cc5565b610af9565b5b610655576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161064c906124bf565b60405180910390fd5b61065f8383610ccd565b505050565b61067561066f610cc5565b82610d86565b6106b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ab90612551565b60405180910390fd5b6106bf838383610e1b565b505050565b6106df83838360405180602001604052806000815250610965565b505050565b6106ec611114565b60005b8282905081101561073d5761072a8383838181106107105761070f612571565b5b905060200201602081019061072591906120a5565b611192565b8080610735906125cf565b9150506106ef565b505050565b60008061074e836111b8565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036107bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b690612663565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610838576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082f906126f5565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610887611114565b61089160006111f5565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546108cc9061238a565b80601f01602080910402602001604051908101604052809291908181526020018280546108f89061238a565b80156109455780601f1061091a57610100808354040283529160200191610945565b820191906000526020600020905b81548152906001019060200180831161092857829003601f168201915b5050505050905090565b61096161095a610cc5565b83836112bb565b5050565b610976610970610cc5565b83610d86565b6109b5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ac90612551565b60405180910390fd5b6109c184848484611427565b50505050565b60606109d282610c7a565b60006006600084815260200190815260200160002080546109f29061238a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1e9061238a565b8015610a6b5780601f10610a4057610100808354040283529160200191610a6b565b820191906000526020600020905b815481529060010190602001808311610a4e57829003601f168201915b505050505090506000610a7c611483565b90506000815103610a91578192505050610ad4565b600082511115610ac6578082604051602001610aae929190612751565b60405160208183030381529060405292505050610ad4565b610acf8461149a565b925050505b919050565b60096020528060005260406000206000915054906101000a900460ff1681565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610b95611114565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c04576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfb906127e7565b60405180910390fd5b610c0d816111f5565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610c8381611502565b610cc2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cb990612663565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d4083610742565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d9283610742565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dd45750610dd38185610af9565b5b80610e1257508373ffffffffffffffffffffffffffffffffffffffff16610dfa84610507565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e3b82610742565b73ffffffffffffffffffffffffffffffffffffffff1614610e91576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e8890612879565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f00576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef79061290b565b60405180910390fd5b610f0d8383836001611543565b8273ffffffffffffffffffffffffffffffffffffffff16610f2d82610742565b73ffffffffffffffffffffffffffffffffffffffff1614610f83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7a90612879565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461110f8383836001611669565b505050565b61111c610cc5565b73ffffffffffffffffffffffffffffffffffffffff1661113a610893565b73ffffffffffffffffffffffffffffffffffffffff1614611190576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161118790612977565b60405180910390fd5b565b600061119e600861166f565b90506111aa600861167d565b6111b48282611693565b5050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611329576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611320906129e3565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161141a9190611da8565b60405180910390a3505050565b611432848484610e1b565b61143e848484846116b1565b61147d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161147490612a75565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606114a582610c7a565b60006114af611483565b905060008151116114cf57604051806020016040528060008152506114fa565b806114d984611838565b6040516020016114ea929190612751565b6040516020818303038152906040525b915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611524836111b8565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600181111561166357600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146115d75780600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115cf9190612a95565b925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146116625780600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461165a9190612ac9565b925050819055505b5b50505050565b50505050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6116ad828260405180602001604052806000815250611906565b5050565b60006116d28473ffffffffffffffffffffffffffffffffffffffff16611961565b1561182b578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026116fb610cc5565b8786866040518563ffffffff1660e01b815260040161171d9493929190612b52565b6020604051808303816000875af192505050801561175957506040513d601f19601f820116820180604052508101906117569190612bb3565b60015b6117db573d8060008114611789576040519150601f19603f3d011682016040523d82523d6000602084013e61178e565b606091505b5060008151036117d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117ca90612a75565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611830565b600190505b949350505050565b60606000600161184784611984565b01905060008167ffffffffffffffff8111156118665761186561216d565b5b6040519080825280601f01601f1916602001820160405280156118985781602001600182028036833780820191505090505b509050600082602001820190505b6001156118fb578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a85816118ef576118ee612be0565b5b049450600085036118a6575b819350505050919050565b6119108383611ad7565b61191d60008484846116b1565b61195c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161195390612a75565b60405180910390fd5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106119e2577a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083816119d8576119d7612be0565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611a1f576d04ee2d6d415b85acef81000000008381611a1557611a14612be0565b5b0492506020810190505b662386f26fc100008310611a4e57662386f26fc100008381611a4457611a43612be0565b5b0492506010810190505b6305f5e1008310611a77576305f5e1008381611a6d57611a6c612be0565b5b0492506008810190505b6127108310611a9c576127108381611a9257611a91612be0565b5b0492506004810190505b60648310611abf5760648381611ab557611ab4612be0565b5b0492506002810190505b600a8310611ace576001810190505b80915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b46576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b3d90612c5b565b60405180910390fd5b611b4f81611502565b15611b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b8690612cc7565b60405180910390fd5b611b9d600083836001611543565b611ba681611502565b15611be6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bdd90612cc7565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611cf0600083836001611669565b5050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d3d81611d08565b8114611d4857600080fd5b50565b600081359050611d5a81611d34565b92915050565b600060208284031215611d7657611d75611cfe565b5b6000611d8484828501611d4b565b91505092915050565b60008115159050919050565b611da281611d8d565b82525050565b6000602082019050611dbd6000830184611d99565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611dfd578082015181840152602081019050611de2565b60008484015250505050565b6000601f19601f8301169050919050565b6000611e2582611dc3565b611e2f8185611dce565b9350611e3f818560208601611ddf565b611e4881611e09565b840191505092915050565b60006020820190508181036000830152611e6d8184611e1a565b905092915050565b6000819050919050565b611e8881611e75565b8114611e9357600080fd5b50565b600081359050611ea581611e7f565b92915050565b600060208284031215611ec157611ec0611cfe565b5b6000611ecf84828501611e96565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611f0382611ed8565b9050919050565b611f1381611ef8565b82525050565b6000602082019050611f2e6000830184611f0a565b92915050565b611f3d81611ef8565b8114611f4857600080fd5b50565b600081359050611f5a81611f34565b92915050565b60008060408385031215611f7757611f76611cfe565b5b6000611f8585828601611f4b565b9250506020611f9685828601611e96565b9150509250929050565b600080600060608486031215611fb957611fb8611cfe565b5b6000611fc786828701611f4b565b9350506020611fd886828701611f4b565b9250506040611fe986828701611e96565b9150509250925092565b600080fd5b600080fd5b600080fd5b60008083601f84011261201857612017611ff3565b5b8235905067ffffffffffffffff81111561203557612034611ff8565b5b60208301915083602082028301111561205157612050611ffd565b5b9250929050565b6000806020838503121561206f5761206e611cfe565b5b600083013567ffffffffffffffff81111561208d5761208c611d03565b5b61209985828601612002565b92509250509250929050565b6000602082840312156120bb576120ba611cfe565b5b60006120c984828501611f4b565b91505092915050565b6120db81611e75565b82525050565b60006020820190506120f660008301846120d2565b92915050565b61210581611d8d565b811461211057600080fd5b50565b600081359050612122816120fc565b92915050565b6000806040838503121561213f5761213e611cfe565b5b600061214d85828601611f4b565b925050602061215e85828601612113565b9150509250929050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6121a582611e09565b810181811067ffffffffffffffff821117156121c4576121c361216d565b5b80604052505050565b60006121d7611cf4565b90506121e3828261219c565b919050565b600067ffffffffffffffff8211156122035761220261216d565b5b61220c82611e09565b9050602081019050919050565b82818337600083830152505050565b600061223b612236846121e8565b6121cd565b90508281526020810184848401111561225757612256612168565b5b612262848285612219565b509392505050565b600082601f83011261227f5761227e611ff3565b5b813561228f848260208601612228565b91505092915050565b600080600080608085870312156122b2576122b1611cfe565b5b60006122c087828801611f4b565b94505060206122d187828801611f4b565b93505060406122e287828801611e96565b925050606085013567ffffffffffffffff81111561230357612302611d03565b5b61230f8782880161226a565b91505092959194509250565b6000806040838503121561233257612331611cfe565b5b600061234085828601611f4b565b925050602061235185828601611f4b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806123a257607f821691505b6020821081036123b5576123b461235b565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612417602183611dce565b9150612422826123bb565b604082019050919050565b600060208201905081810360008301526124468161240a565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b60006124a9603d83611dce565b91506124b48261244d565b604082019050919050565b600060208201905081810360008301526124d88161249c565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b600061253b602d83611dce565b9150612546826124df565b604082019050919050565b6000602082019050818103600083015261256a8161252e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006125da82611e75565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361260c5761260b6125a0565b5b600182019050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b600061264d601883611dce565b915061265882612617565b602082019050919050565b6000602082019050818103600083015261267c81612640565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006126df602983611dce565b91506126ea82612683565b604082019050919050565b6000602082019050818103600083015261270e816126d2565b9050919050565b600081905092915050565b600061272b82611dc3565b6127358185612715565b9350612745818560208601611ddf565b80840191505092915050565b600061275d8285612720565b91506127698284612720565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006127d1602683611dce565b91506127dc82612775565b604082019050919050565b60006020820190508181036000830152612800816127c4565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612863602583611dce565b915061286e82612807565b604082019050919050565b6000602082019050818103600083015261289281612856565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006128f5602483611dce565b915061290082612899565b604082019050919050565b60006020820190508181036000830152612924816128e8565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612961602083611dce565b915061296c8261292b565b602082019050919050565b6000602082019050818103600083015261299081612954565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b60006129cd601983611dce565b91506129d882612997565b602082019050919050565b600060208201905081810360008301526129fc816129c0565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612a5f603283611dce565b9150612a6a82612a03565b604082019050919050565b60006020820190508181036000830152612a8e81612a52565b9050919050565b6000612aa082611e75565b9150612aab83611e75565b9250828203905081811115612ac357612ac26125a0565b5b92915050565b6000612ad482611e75565b9150612adf83611e75565b9250828201905080821115612af757612af66125a0565b5b92915050565b600081519050919050565b600082825260208201905092915050565b6000612b2482612afd565b612b2e8185612b08565b9350612b3e818560208601611ddf565b612b4781611e09565b840191505092915050565b6000608082019050612b676000830187611f0a565b612b746020830186611f0a565b612b8160408301856120d2565b8181036060830152612b938184612b19565b905095945050505050565b600081519050612bad81611d34565b92915050565b600060208284031215612bc957612bc8611cfe565b5b6000612bd784828501612b9e565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612c45602083611dce565b9150612c5082612c0f565b602082019050919050565b60006020820190508181036000830152612c7481612c38565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612cb1601c83611dce565b9150612cbc82612c7b565b602082019050919050565b60006020820190508181036000830152612ce081612ca4565b905091905056fea264697066735822122026f977e6e75af12271d86f000bb7e535b4b89f3eea77a44f6f55edf58fa1557064736f6c63430008110033";

type BuffNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuffNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BuffNFT__factory extends ContractFactory {
  constructor(...args: BuffNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BuffNFT> {
    return super.deploy(overrides || {}) as Promise<BuffNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BuffNFT {
    return super.attach(address) as BuffNFT;
  }
  override connect(signer: Signer): BuffNFT__factory {
    return super.connect(signer) as BuffNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuffNFTInterface {
    return new utils.Interface(_abi) as BuffNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BuffNFT {
    return new Contract(address, _abi, signerOrProvider) as BuffNFT;
  }
}
