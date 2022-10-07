//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Mod {
    function modAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := mod(x, y)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function modSolidity(uint x, uint y) public pure returns (uint) {
        return x % y;
    }
}
