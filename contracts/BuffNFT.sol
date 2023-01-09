// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BuffNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    // mapping(address => bool) public isAllowlistAddress;

    constructor() ERC721("BuFfToken", "BFT") {}

    // // Allowlist addresses
    // function allowlistAddresses(
    //     address[] calldata wAddresses
    // ) public onlyOwner {
    //     for (uint i = 0; i < wAddresses.length; i++) {
    //         isAllowlistAddress[wAddresses[i]] = true;
    //     }
    // }

    // function airdropNFTs(address[] calldata wAddresses) public onlyOwner {
    //     for (uint i = 0; i < wAddresses.length; i++) {
    //         _mintSingleNFT(wAddresses[i]);
    //     }
    // }

    // function _mintSingleNFT(address wAddress) private {
    //     uint tokenId = _tokenIdCounter.current();
    //     _tokenIdCounter.increment();
    //     _safeMint(wAddress, tokenId);
    // }

    function airdropNFTs(address[] calldata wAddresses, string[] calldata tokenUris) public onlyOwner {
        require(wAddresses.length == tokenUris.length);
        for (uint i = 0; i < wAddresses.length; i++) {
            _mintSingleNFT(wAddresses[i], tokenUris[i]);
        }
    }

    function _mintSingleNFT(address wAddress, string memory tokenUri) private {
        uint tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(wAddress, tokenId);
        _setTokenURI(tokenId, tokenUri);
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
