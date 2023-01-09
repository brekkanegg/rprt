/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200254e3803806200254e8339818101604052810190620000379190620002be565b81600090805190602001906200004f92919062000071565b5080600190805190602001906200006892919062000071565b505050620003a8565b8280546200007f9062000372565b90600052602060002090601f016020900481019282620000a35760008555620000ef565b82601f10620000be57805160ff1916838001178555620000ef565b82800160010185558215620000ef579182015b82811115620000ee578251825591602001919060010190620000d1565b5b509050620000fe919062000102565b5090565b5b808211156200011d57600081600090555060010162000103565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200018a826200013f565b810181811067ffffffffffffffff82111715620001ac57620001ab62000150565b5b80604052505050565b6000620001c162000121565b9050620001cf82826200017f565b919050565b600067ffffffffffffffff821115620001f257620001f162000150565b5b620001fd826200013f565b9050602081019050919050565b60005b838110156200022a5780820151818401526020810190506200020d565b838111156200023a576000848401525b50505050565b6000620002576200025184620001d4565b620001b5565b9050828152602081018484840111156200027657620002756200013a565b5b620002838482856200020a565b509392505050565b600082601f830112620002a357620002a262000135565b5b8151620002b584826020860162000240565b91505092915050565b60008060408385031215620002d857620002d76200012b565b5b600083015167ffffffffffffffff811115620002f957620002f862000130565b5b62000307858286016200028b565b925050602083015167ffffffffffffffff8111156200032b576200032a62000130565b5b62000339858286016200028b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200038b57607f821691505b60208210811415620003a257620003a162000343565b5b50919050565b61219680620003b86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636352211e1161008c578063a22cb46511610066578063a22cb46514610224578063b88d4fde14610240578063c87b56dd1461025c578063e985e9c51461028c576100cf565b80636352211e146101a657806370a08231146101d657806395d89b4114610206576100cf565b806301ffc9a7146100d457806306fdde0314610104578063081812fc14610122578063095ea7b31461015257806323b872dd1461016e57806342842e0e1461018a575b600080fd5b6100ee60048036038101906100e991906113cd565b6102bc565b6040516100fb9190611415565b60405180910390f35b61010c61039e565b60405161011991906114c9565b60405180910390f35b61013c60048036038101906101379190611521565b610430565b604051610149919061158f565b60405180910390f35b61016c600480360381019061016791906115d6565b610476565b005b61018860048036038101906101839190611616565b61058e565b005b6101a4600480360381019061019f9190611616565b6105ee565b005b6101c060048036038101906101bb9190611521565b61060e565b6040516101cd919061158f565b60405180910390f35b6101f060048036038101906101eb9190611669565b6106c0565b6040516101fd91906116a5565b60405180910390f35b61020e610778565b60405161021b91906114c9565b60405180910390f35b61023e600480360381019061023991906116ec565b61080a565b005b61025a60048036038101906102559190611861565b610820565b005b61027660048036038101906102719190611521565b610882565b60405161028391906114c9565b60405180910390f35b6102a660048036038101906102a191906118e4565b6108ea565b6040516102b39190611415565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061038757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061039757506103968261097e565b5b9050919050565b6060600080546103ad90611953565b80601f01602080910402602001604051908101604052809291908181526020018280546103d990611953565b80156104265780601f106103fb57610100808354040283529160200191610426565b820191906000526020600020905b81548152906001019060200180831161040957829003601f168201915b5050505050905090565b600061043b826109e8565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006104818261060e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156104f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e9906119f7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610511610a33565b73ffffffffffffffffffffffffffffffffffffffff161480610540575061053f8161053a610a33565b6108ea565b5b61057f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057690611a89565b60405180910390fd5b6105898383610a3b565b505050565b61059f610599610a33565b82610af4565b6105de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d590611b1b565b60405180910390fd5b6105e9838383610b89565b505050565b61060983838360405180602001604052806000815250610820565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106b7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ae90611b87565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610731576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072890611c19565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461078790611953565b80601f01602080910402602001604051908101604052809291908181526020018280546107b390611953565b80156108005780601f106107d557610100808354040283529160200191610800565b820191906000526020600020905b8154815290600101906020018083116107e357829003601f168201915b5050505050905090565b61081c610815610a33565b8383610df0565b5050565b61083161082b610a33565b83610af4565b610870576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161086790611b1b565b60405180910390fd5b61087c84848484610f5d565b50505050565b606061088d826109e8565b6000610897610fb9565b905060008151116108b757604051806020016040528060008152506108e2565b806108c184610fd0565b6040516020016108d2929190611c75565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109f181611131565b610a30576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2790611b87565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610aae8361060e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610b008361060e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b425750610b4181856108ea565b5b80610b8057508373ffffffffffffffffffffffffffffffffffffffff16610b6884610430565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610ba98261060e565b73ffffffffffffffffffffffffffffffffffffffff1614610bff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bf690611d0b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6690611d9d565b60405180910390fd5b610c7a83838361119d565b610c85600082610a3b565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cd59190611dec565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d2c9190611e20565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610deb8383836111a2565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e5f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e5690611ec2565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f509190611415565b60405180910390a3505050565b610f68848484610b89565b610f74848484846111a7565b610fb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610faa90611f54565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611018576040518060400160405280600181526020017f3000000000000000000000000000000000000000000000000000000000000000815250905061112c565b600082905060005b6000821461104a57808061103390611f74565b915050600a826110439190611fec565b9150611020565b60008167ffffffffffffffff81111561106657611065611736565b5b6040519080825280601f01601f1916602001820160405280156110985781602001600182028036833780820191505090505b5090505b60008514611125576001826110b19190611dec565b9150600a856110c0919061201d565b60306110cc9190611e20565b60f81b8183815181106110e2576110e161204e565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8561111e9190611fec565b945061109c565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006111c88473ffffffffffffffffffffffffffffffffffffffff1661133e565b15611331578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026111f1610a33565b8786866040518563ffffffff1660e01b815260040161121394939291906120d2565b602060405180830381600087803b15801561122d57600080fd5b505af192505050801561125e57506040513d601f19601f8201168201806040525081019061125b9190612133565b60015b6112e1573d806000811461128e576040519150601f19603f3d011682016040523d82523d6000602084013e611293565b606091505b506000815114156112d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112d090611f54565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611336565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113aa81611375565b81146113b557600080fd5b50565b6000813590506113c7816113a1565b92915050565b6000602082840312156113e3576113e261136b565b5b60006113f1848285016113b8565b91505092915050565b60008115159050919050565b61140f816113fa565b82525050565b600060208201905061142a6000830184611406565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561146a57808201518184015260208101905061144f565b83811115611479576000848401525b50505050565b6000601f19601f8301169050919050565b600061149b82611430565b6114a5818561143b565b93506114b581856020860161144c565b6114be8161147f565b840191505092915050565b600060208201905081810360008301526114e38184611490565b905092915050565b6000819050919050565b6114fe816114eb565b811461150957600080fd5b50565b60008135905061151b816114f5565b92915050565b6000602082840312156115375761153661136b565b5b60006115458482850161150c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115798261154e565b9050919050565b6115898161156e565b82525050565b60006020820190506115a46000830184611580565b92915050565b6115b38161156e565b81146115be57600080fd5b50565b6000813590506115d0816115aa565b92915050565b600080604083850312156115ed576115ec61136b565b5b60006115fb858286016115c1565b925050602061160c8582860161150c565b9150509250929050565b60008060006060848603121561162f5761162e61136b565b5b600061163d868287016115c1565b935050602061164e868287016115c1565b925050604061165f8682870161150c565b9150509250925092565b60006020828403121561167f5761167e61136b565b5b600061168d848285016115c1565b91505092915050565b61169f816114eb565b82525050565b60006020820190506116ba6000830184611696565b92915050565b6116c9816113fa565b81146116d457600080fd5b50565b6000813590506116e6816116c0565b92915050565b600080604083850312156117035761170261136b565b5b6000611711858286016115c1565b9250506020611722858286016116d7565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61176e8261147f565b810181811067ffffffffffffffff8211171561178d5761178c611736565b5b80604052505050565b60006117a0611361565b90506117ac8282611765565b919050565b600067ffffffffffffffff8211156117cc576117cb611736565b5b6117d58261147f565b9050602081019050919050565b82818337600083830152505050565b60006118046117ff846117b1565b611796565b9050828152602081018484840111156118205761181f611731565b5b61182b8482856117e2565b509392505050565b600082601f8301126118485761184761172c565b5b81356118588482602086016117f1565b91505092915050565b6000806000806080858703121561187b5761187a61136b565b5b6000611889878288016115c1565b945050602061189a878288016115c1565b93505060406118ab8782880161150c565b925050606085013567ffffffffffffffff8111156118cc576118cb611370565b5b6118d887828801611833565b91505092959194509250565b600080604083850312156118fb576118fa61136b565b5b6000611909858286016115c1565b925050602061191a858286016115c1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061196b57607f821691505b6020821081141561197f5761197e611924565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006119e160218361143b565b91506119ec82611985565b604082019050919050565b60006020820190508181036000830152611a10816119d4565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611a73603e8361143b565b9150611a7e82611a17565b604082019050919050565b60006020820190508181036000830152611aa281611a66565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611b05602e8361143b565b9150611b1082611aa9565b604082019050919050565b60006020820190508181036000830152611b3481611af8565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611b7160188361143b565b9150611b7c82611b3b565b602082019050919050565b60006020820190508181036000830152611ba081611b64565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611c0360298361143b565b9150611c0e82611ba7565b604082019050919050565b60006020820190508181036000830152611c3281611bf6565b9050919050565b600081905092915050565b6000611c4f82611430565b611c598185611c39565b9350611c6981856020860161144c565b80840191505092915050565b6000611c818285611c44565b9150611c8d8284611c44565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611cf560258361143b565b9150611d0082611c99565b604082019050919050565b60006020820190508181036000830152611d2481611ce8565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611d8760248361143b565b9150611d9282611d2b565b604082019050919050565b60006020820190508181036000830152611db681611d7a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611df7826114eb565b9150611e02836114eb565b925082821015611e1557611e14611dbd565b5b828203905092915050565b6000611e2b826114eb565b9150611e36836114eb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e6b57611e6a611dbd565b5b828201905092915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611eac60198361143b565b9150611eb782611e76565b602082019050919050565b60006020820190508181036000830152611edb81611e9f565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611f3e60328361143b565b9150611f4982611ee2565b604082019050919050565b60006020820190508181036000830152611f6d81611f31565b9050919050565b6000611f7f826114eb565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611fb257611fb1611dbd565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611ff7826114eb565b9150612002836114eb565b92508261201257612011611fbd565b5b828204905092915050565b6000612028826114eb565b9150612033836114eb565b92508261204357612042611fbd565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006120a48261207d565b6120ae8185612088565b93506120be81856020860161144c565b6120c78161147f565b840191505092915050565b60006080820190506120e76000830187611580565b6120f46020830186611580565b6121016040830185611696565b81810360608301526121138184612099565b905095945050505050565b60008151905061212d816113a1565b92915050565b6000602082840312156121495761214861136b565b5b60006121578482850161211e565b9150509291505056fea2646970667358221220ace677f5a310ff607f5698eec02a738f6954135d755babd0400f2bd2c5483bca64736f6c63430008090033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
