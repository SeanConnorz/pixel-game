// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {Base64} from "./Base64.sol";

function getCharacter(uint256 newItemId) pure returns (string memory) {
    string memory json1 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    "{"
                    '"name": "Sensei",'
                    '"image": "https://i.postimg.cc/90v1kYkN/sensei.png",'
                    '"description": "A wise man...",'
                    '"animation_url": "https://i.postimg.cc/T1WJnWPj/Sprite-Sheet.png"'
                    "}"
                )
            )
        )
    );
    string memory json2 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    "{"
                    '"name": "Swordsman",'
                    '"image": "https://i.postimg.cc/HsdhhQLV/swordsman.png",'
                    '"description": "Speedy and precise.",'
                    '"animation_url": "https://i.postimg.cc/MT4jj0rt/redsamurai.png"'
                    "}"
                )
            )
        )
    );
    string memory json3 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    "{"
                    '"name": "Samuri",'
                    '"image": "https://i.postimg.cc/pVhGrR0Y/knight.png",'
                    '"description": "A powerful foe.",'
                    '"animation_url": "https://i.postimg.cc/nc1vcWtG/Sprite-Sheet.png"'
                    "}"
                )
            )
        )
    );
    string memory json4 = Base64.encode(
        bytes(
            string(
                abi.encodePacked(
                    "{"
                    '"name": "Ninja",'
                    '"image": "https://i.postimg.cc/Y0DMdkWx/ninja.png",'
                    '"description": "A silent hero. A watchful protector.",'
                    '"animation_url": "https://i.postimg.cc/KYhFq0RC/Sprite-Sheet.png"'
                    "}"
                )
            )
        )
    );
}
