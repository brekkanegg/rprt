// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BuffNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    mapping(address => bool) public isAllowlistAddress;

    constructor() ERC721("BuFfToken", "BFT") {}

    // // Allowlist addresses
    // function allowlistAddresses(
    //     address[] calldata wAddresses
    // ) public onlyOwner {
    //     for (uint i = 0; i < wAddresses.length; i++) {
    //         isAllowlistAddress[wAddresses[i]] = true;
    //     }
    // }

    function airdropNFTs(address[] calldata wAddresses) public onlyOwner {
        for (uint i = 0; i < wAddresses.length; i++) {
            _mintSingleNFT(wAddresses[i]);
        }
    }

    function _mintSingleNFT(address wAddress) private {
        uint tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(wAddress, tokenId);
    }

    // // Presale mint
    // function preSale() public {
    //     require(isAllowlistAddress[msg.sender], "Address is not allowlisted");

    //     for (uint i = 0; i < 2; i++) {
    //         _mintSingleNFT();
    //     }

    //     console.log("2 NFTs minted using allowlist.");

    //     isAllowlistAddress[msg.sender] = false;
    // }

    // function _mintSingleNFT() private {
    //     uint newTokenID = _tokenIds.current();
    //     _safeMint(msg.sender, newTokenID);
    //     _tokenIds.increment();
    // }
}
