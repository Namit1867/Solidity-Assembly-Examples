//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AddMod {
    function addModAssembly(uint x, uint y, uint n) public pure returns (uint) {
        assembly {
            let result := addmod(x, y, n)
            mstore(0x0, result)
            return(0x0, 32)
        }
    }

    function addModSolidity(uint x, uint y, uint n) public pure returns (uint) {
        return (x + y) % n;
    }
}
