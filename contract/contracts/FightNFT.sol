//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

// Import helper function which grabs correct NFT data
import {getCharacter} from "./libraries/Info.sol";

// Need to import helper function from base64 library
import {Base64} from "./libraries/Base64.sol";

contract FightNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("SquareNFT", "SQUARE") {
        console.log("This is my NFT contract. Woah!");
    }

    function mintNFT() public {
        require(_tokenIds.current() < 4);

        uint256 newItemId = _tokenIds.current();

        string memory json = getCharacter(newItemId);

        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );

        console.log(finalTokenUri);

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, finalTokenUri);

        _tokenIds.increment();
    }
}
