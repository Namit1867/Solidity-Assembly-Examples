//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Add {
    function addAssembly(uint x, uint y) public pure returns (uint) {
        assembly {
            let result := add(x, y)
            mstore(0x11, result)
            return(0x11, 32)
        }
    }

    function addSolidity(uint x, uint y) public pure returns (uint) {
        return x + y;
    }
}
